(function() {
    'use strict';

    let expect = window.chai.expect;


    //some objects to pass it within
    let firstObj = {};
    firstObj.content = 'first thought';
    firstObj.createTime = new Date();
    let timeObj = firstObj.createTime;
    firstObj.id = 1111;
    let secObj = {};
    secObj.content = 'thought';
    secObj.createTime = new Date();
    secObj.id = '2222';
    let thirdObj = {};
    thirdObj.content = 'thought';
    thirdObj.createTime = new Date();

    //describe block to contain the other describe blocks
    describe('recent-thoughts module', function() {

        describe('showRecent function', function() {


            beforeEach(function() {
                let mainTag = document.createElement('main');
                mainTag.classList.add('recent');
                document.querySelector('body').appendChild(mainTag);
            });
            //aferEach
            afterEach(function() {
                let mainTag = document.querySelector('main.recent');
                mainTag.parentNode.removeChild(mainTag);
            });



            //checks for a function--- sanity check
            it('should test that there is a function', function() {
                expect(window.thoughter.showRecent).to.be.a('function');
            });

            it('should not be an array that is passed as an argument', function() {
                expect(window.thoughter.showRecent('blue')).to.be.an('undefined');
                // console.info(window.thoughter.showRecent);
            });

            it('should be undefined if an array containing something other than an object is passed',
                function() {
                    expect(window.thoughter.showRecent(['green'])).to.be.an('undefined');
                });

            it('should expect a length of 0 if nothing is passed', function(){
                window.thoughter.showRecent(); //
                let article = document.querySelectorAll('main article');
                // console.info('Expect  0 = ' + article);
                expect(article.length).to.equal(0);
            });

            //I should add the check for 1 article be created

            it('should create a new article for every thought', function(){
                window.thoughter.showRecent([firstObj, secObj]);
                let recent = document.querySelector('.recent');
                expect(recent.childNodes.length).to.equal(2);
                // console.info(document.querySelector('.recent'));
            });

            it('should create a main with a class of recent', function(){
                window.thoughter.showRecent([firstObj]);
                let mainClass = document.querySelector('main').classList;
                expect(mainClass.contains('recent'));
            });

            it('should create an article with a class of panel', function(){
                window.thoughter.showRecent([firstObj]);
                let articleClass = document.querySelector('article').classList;
                // console.info(articleClass);
                expect(articleClass.contains('panel'));
            });

            it('should create an article with a class of panel-info', function(){
                window.thoughter.showRecent([firstObj]);
                let articleClass = document.querySelector('article').classList;
                // console.info(articleClass);
                expect(articleClass.contains('panel-info'));
            });

            it('should create an header with a class of panel-heading', function(){
                window.thoughter.showRecent([firstObj]);
                let headingClass = document.querySelector('header').classList;
                expect(headingClass.contains('panel-heading'));
            });

            it('should check the id for the obj given', function() {
                window.thoughter.showRecent([firstObj]);
                let objId = document.querySelector('article');
                expect(objId.getAttribute('id')).to.equal('thought-1111');
            });

            it('should check content of the <p>', function() {
                window.thoughter.showRecent([firstObj]);
                let mContent = document.querySelector('p');
                expect(mContent.innerHTML).to.equal('first thought');
            });

            it('should check date posted', function() {
                window.thoughter.showRecent([firstObj]);
                let header = document.querySelector('header');
                // console.info(timeObj);
                expect(header.innertext).to.equal(timeObj.value);
            });


        });


    });


}());
