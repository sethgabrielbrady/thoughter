module.exports = function configuration(gruntConfig) {
  gruntConfig.initConfig({

    clean:['build/'],

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

    sass: {
      allSASS:{
        files:{
          'build/style.css' : 'src/sass/main.scss'
        }
      }
    },

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
        }
      }
    },

    watch: {
      scripts: {
        files: ['**/*.js', '**/*.html', 'src/sass/*.scss'],
        tasks: ['jshint','karma', 'clean', 'copy', 'sass'],
      }
    }

  });

  require('load-grunt-tasks')(gruntConfig);

  gruntConfig.registerTask('build', ['jshint','karma', 'clean', 'copy', 'sass']);
};
