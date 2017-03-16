


(function() {
  'use strict';

let expect = chai.expect;

//describe block to contain the other describe blocks
describe('recent-thoughts module', function(){

  describe('showRecent function', function(){
    //need to start with some sanity chekcs after
    //1st lets check for a function

      //checks for a function
      it('should be a funciton', function(){
        expect(window.thoughter.showRecent).to.be.a('function');
      });




  });
});






}());
