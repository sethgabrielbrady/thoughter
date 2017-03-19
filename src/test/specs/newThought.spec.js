(function() {
  'use strict';

const fetchMock = require('fetch-mock/es5/client');
// let expect = window.chai.expect;


  describe('new-thought module', function(){

    beforeEach(function() {
      fetchMock.mock({
        method:'GET',
        matcher:'http://thoughter.herokuapp.com/api/Thoughts',
        response:{
          status:200,
          headers:{'Content-Type': 'application/json'},
          body:JSON.stringify([
            {name:'Seth'},
            {name:'Megan'}
          ])
        }

      });
    });
    fetchMock.mock({
        method:'GET',
        matcher:'http://thoughter.herokuapp.com/api/Thoughts',
        response:{
          status:404,
          headers:{'Content-Type': 'application/json'},
          body:JSON.stringify({
            'message':'Not Found',
            'documentation_url': 'http://thoughter.herokuapp.com/api/Thoughts'
          })
        }
      });
    });

    afterEach(function(){
      fetchMock.restore();
    });


    describe('create-thought', function(){








    });


}());


//tests
//should be a Promise
//should take a string
//should return a promise rejection on failure
// should return a fetch post on positive repsonse
// should handle status repsonse correctly
