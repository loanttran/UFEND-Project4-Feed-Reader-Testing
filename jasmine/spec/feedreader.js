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
    /* This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', () => {
        /* makes sure that the allFeeds variable has been 
         * defined and that it is not empty.
         */
        it('are defined', () => {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* loops through each feed in the allFeeds object 
         * and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it("have URLs defined, and the URLs are not empty", () => {
            allFeeds.forEach((feed) => {
                expect(feed.url).toBeDefined(); 
                expect(feed.url.length).not.toBe(0); 
            }); 
        }); 

        /* loops through each feed in the allFeeds object
         * and ensures it has a name defined
         * and that the name is not empty.
         */
        it("have names defined, and the names are not empty", () => {
            allFeeds.forEach((feed) => {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0); 
            });
        });
    });


    describe("The menu", () => {
        /* ensures the menu element is hidden by default. */
        it("is hidden by default", () => { 
            expect($('body').hasClass("menu-hidden")).toBe(true); 
        }); 

         /* ensures the menu changes visibility when the menu icon is clicked. 
          * This test have two expectations: the menu displays when
          * clicked and it hide when clicked again.
          */
        it("displays when clicked and hides when clicked again", () => {
            $('.menu-icon-link').click(); 
            expect($('.menu-icon-link').hasClass("menu-hidden")).toBe(false);

            $('.menu-icon-link').click(); 
            expect($('body').hasClass("menu-hidden")).toBe(true);
        }); 
    }); 


    describe("Initial Entries", () => {
        /* ensures when the loadFeed function is called and completes its work, 
         * there is at least a single .entry element within the .feed container.
         * loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        beforeEach((done) => {
            loadFeed(0, () => {
                done();
            }); 
        });

        it("are loaded", () => {
            let entries = $('.feed .entry'); // select entry as child element of feed
            expect(Array.from(entries).length > 0).toBe(true); 
        });
    });


    describe("New Feed Selection", () => {
        /* ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */     
        let firstFeed,    
            secondFeed;  

        // Check if there are at least 2 feeds to load
        it('has at least two feeds to load', () => {
            expect(allFeeds.length > 1).toBe(true); 
        }); 

        describe("loads another feed", () => {
            beforeEach((done) => {
                /* Load second feed of allFeeds array with a callback which will
                * reload the first feed of the array
                */
                loadFeed(1, () => {
                // Wait till it's done and store the loaded feed for future testing
                firstFeed = $('.feed').html(); 
                    loadFeed(0, () => {
                        secondFeed = $('.feed').html(); 
                        done();
                    });
                }); 
            });
            
            it("actually changes content", function() {
                // check if the content of the two feeds are different
                // console.log(firstFeed); 
                // console.log(secondFeed);
                // console.log(firstFeed === secondFeed); 
                expect(secondFeed).not.toEqual(firstFeed);
            })
        })
    }); 
}());