module.exports = function configuration(gruntConfig) {
    gruntConfig.initConfig({


        clean:['build/'],

//copy
        copy:{
          allHTML:{
            files:[
              {
              cwd:'src',
              src:['*.html'],
              dest:'build/',
              expand:true
              }
            ]
          },
          allJavaScript:{
            files:[
              {
              cwd:'src/js', //if sll your files are already in a subfolder, grunt i will copy it
              src:['**/*.js'],//** means any sub directory
              dest:'build/js/',
              expand:true
              }
            ]
          },
          allJQuery:{
            files:[
              {
              cwd:'node_modules/jquery/dist',
              src:['jquery.js'],
              dest:'build/js/vendor/',
              expand:true
              }
            ]
          }
        },

//sass
        sass: {
          allSASS:{
            files:{
              'build/style.css' : 'src/sass/main.scss'
            }
          }
        },

//jshint
        jshint:{
          source:{
            options:{
              jshintrc:'.jshintrc'
            },
              files:{
                  src:['src/**/*.js']
              }
            }
          },

//karma
        karma:{
          testUNITS:{
            options:{
                frameworks:[ 'mocha', 'chai'],
                browsers: ['Chrome'],
                singleRun: true,
                files: [
                  'src/**/*.js',
                  'node_modules/fetch-mock/es5/client-browserified.js',
                  'test/specs/**/*.js'
                  ]
                // preprocessors:{
                //   'src/**/*.js': ['coverage'], //what files we are testing
                // },
                // reporters:['dots', 'coverage'],
                // coverageReporter:{
                // type:'text-summary'
                // }
              }
            }

          },

//watch
        watch: {
          scripts: {
            files: ['**/*.js', '**/*.html', 'src/sass/*.scss'],
            tasks: ['jshint','karma', 'clean', 'copy', 'sass'],
            // options: {
            // spawn: false,
            // event:['all']//what is this
          // }
        }
      }


  });


//one task to rule them all
    require('load-grunt-tasks')(gruntConfig);
    //run watch by itself.

//gruntConfig
    gruntConfig.registerTask('build', ['jshint','karma', 'clean', 'copy', 'sass']);
};
