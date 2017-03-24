/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         * 
         * Iterate through all the feed items in allFeeds object and check if
         * the url is available/true and also check if the url is not an 
         * empty string
         */
        it('has a URL defined and the URL is not empty', function() {
            allFeeds.forEach(function(feed){
                expect(feed.url).toBeTruthy();
                expect(feed.url.length).not.toBe(0);
            });
        });
        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it 
         * and that the name is not empty.
         *
         * 
         * Iterate through all the feed items in allFeeds object and check if 
         * the name is available/true and also check if the name is not an
         * empty string
         */
        it('has a name defined and the name is not empty', function() {
            allFeeds.forEach(function(feed){
                expect(feed.name).toBeTruthy();
                expect(feed.name.length).not.toBe(0);
            });
        });
    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function() {
        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         *
         *
         *
         * beforeEach function is used to get the body element from HTML which 
         * can be accessed anywhere within this spec
         */
        var body;
        beforeEach(function() {
            body = $('body');
        });
        /*
         * The menu is hidden by default is checked by using jQuery's hasClass function.
         * This hasClass function checks whether the body element has menu-hidden class 
         * with it or not. Based on this boolean result the test is made pass
         * 
         */
        it('is hidden by default', function() {
            expect(body.hasClass('menu-hidden')).toBe(true);
        });

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          *
          * The menu changevisibility is checked by click events. Initially the
          * element with menu-icon-link class is made to click and then check 
          * if the menu-hidden class is not available in the body.
          * 
          * Again the click event is made on the menu link and then check if the 
          * menu-hidden class isavailable in the body
          */
        it('changes visibility when the menu icon is clicked and it does hide when clicked again', function() {
            $('.menu-icon-link').click();
            expect(body.hasClass('menu-hidden')).toBe(false);
            $('.menu-icon-link').click();
            expect(body.hasClass('menu-hidden')).toBe(true);
        });
     });

    /* TODO: Write a new test suite named "Initial Entries" */

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
    describe('Initial Entries', function() {
        /*
         * beforeEach function is added to call the loadFeed function which
         * will call all the feeds. This function is an aysnchronous function
         * as it will call the call the callback function once the loadFeed 
         * function completed it function
         */
        var feedContainer=$('.feed');
        beforeEach(function(done) {
            loadFeed(0,done);
        });
        /*
         * Alteast one entry in feed container is checked by getting all 
         * elements with entry class and the element length is checked for
         * greater than 0 value.
         */
        it('has atleast one feed entry', function(done) {
            var feedChildren=feedContainer.children().find('.entry');
            expect(feedChildren.length>0).toBe(true);
            done();
        });
    });    

    /* TODO: Write a new test suite named "New Feed Selection"

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
    describe('New Feed Selection', function() {
        /*
         * beforeEach function calls the loadFeed function two times in a 
         * nested way with 0 and 1 as parameter respectively. Each function 
         * call is asynchronous.
         * 
         * After the first call to the loadFeed is finished the url of the 
         * entry-link is stored in a variable named oldFeed. Then the second 
         * call to the loadFeed is made and then the url of the entry-link 
         * is stored in a variable name newFeed.
         */
        var oldFeed,newFeed;
        beforeEach(function(done) {
            loadFeed(0,function(){
                oldFeed=$('.entry-link').attr('href');
                loadFeed(1,function(){
                    newFeed=$('.entry-link').attr('href');
                    done();
                });
            });
        });
        /*
         * The content actually changes is checked by comparing the oldFeed 
         * variable and newFeed variable for not equal.
         */
        it('content actually changes', function(done) {
            expect(oldFeed).not.toEqual(newFeed);
            done();
        });
    });
}());