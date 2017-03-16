
(function() {
  'use strict';

let expect = chai.expect;
let th ={};
th.content = 'thought';
th.createTime = 'time is here';
th.id = '4387562348976';
let rec = {};
rec.content = 'thought';
rec.createTime = 'time is here';
// rec.id = '4387562348976';
let lst = {};
lst.content = 'thought';
lst.createTime = 'time is here';
lst.id = '4387562348976';

//describe block to contain the other describe blocks
describe('recent-thoughts module', function(){

  describe('showRecent function', function(){


      beforeEach(function(){
        let mainTag = document.createElement('main');
        mainTag.classList.add('recent');
        document.querySelector('body').appendChild(mainTag);
        });
        //aferEach
      afterEach(function(){
        let mainTag = document.querySelector('main');
        mainTag.parentNode.removeChild(mainTag);
        });



      //checks for a function-1st sanity check
      it('should be a function', function(){
        expect(window.thoughter.showRecent).to.be.a('function');
        });

      it('should not be an array that is passed inside the argument', function(){
        expect(window.thoughter.showRecent('blue')).to.be.an('undefined');
        // console.info(window.thoughter.showRecent);
        });

      it('should expect nothing nothing is passed', function(){
          window.thoughter.showRecent();//
          let article = document.querySelectorAll('main article');
          // console.info(article);
          expect(article.length).to.equal(0);
          // console.info(window.thoughter.showThought);//return undefined
        });

      it('should expect 1 if nothing is passed ', function(){
          let recent = window.thoughter.showRecent();//
          let article = document.querySelectorAll('.recent');
          console.info(article);//returns nodelist 0 ie legth of 1
          expect(article.length).to.equal(1);
          console.info(recent);
        });

      it('should create a new article for every thought', function(){
          window.thoughter.showRecent([lst]);
          let recent = document.querySelector('.recent');
          expect(recent.childNodes.length).to.equal(1);
          console.info(document.querySelector('.recent'));
      });





  });
});






}());
