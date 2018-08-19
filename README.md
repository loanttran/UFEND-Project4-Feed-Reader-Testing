# Testing with Jasmine 

## Project Overview 
<p>Given a web-based application that reads RSS feeds, write a number of <a href="https://jasmine.github.io/">Jasmine</a> tests to test the application. These will test the underlying business logic of the application as well as the event handling and DOM manipulation.</p>

<p>Click on <em>index.html</em> to see the app. All the written tests are in <em>/jasmine/spec/feedreader.js</em></p>

## The Importance of Testing
<p>Testing is an important part of the development process and many organizations practice a standard of development known as "test-driven development." This is when developers write tests first, before they ever start developing their application. All the tests initially fail and then they start writing application code to make these tests pass.</p>

<p>Testing is an important skill, be it in an organization that uses test-driven development or in an organization that uses tests to make sure future feature development doesn't break existing features.</p>

<p>Writing effective tests requires analyzing multiple aspects of an application including the HTML, CSS and JavaScript - an extremely important skill when changing teams or joining a new company.</p>

<p>Good tests give you the ability to quickly analyze whether new code breaks an existing feature within your codebase, without having to manually test all of the functionality.</p>

## Test Suite Description
### "RSS Feeds"
- Ensure that the `allFeeds` variable has been defined and that it is not empty.
- Loop through each feed in the `allFeeds` object and ensures it has a URL defined and that the URL is not empty.
- Loop through each feed in the `allFeeds` object and ensures it has a name defined and that the name is not empty.

### "The menu"
- Ensure the menu element is hidden by default.
- Ensure the menu change visibility when the menu icon is clicked. This test should have two expectations: does the menu display when clicked and does it hide when clicked again.

### "Initial Entries"
- Ensure when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container.

### "New Feed Selection"
- Ensure when a new feed is loaded by the `loadFeed` function that the content actually changes.
- No test should be dependent on the results of another. 
- Callbacks should be used to ensure that feeds are loaded before they are tested.
