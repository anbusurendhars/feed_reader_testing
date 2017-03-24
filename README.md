## Feed Reader Testing - Overview

In this project you are given a web-based application that reads RSS feeds. The original developer of this application clearly saw the value in testing, they've already included [Jasmine](http://jasmine.github.io/) and even started writing their first test suite! Unfortunately, they decided to move on to start their own company and we're now left with an application with an incomplete test suite. That's where you come in.

## Guide to get started with this project

Please find a file named **_index.html_** in this repository and open it in any browser. As the jasmine testing framework is included in this project, it will make an automated test across the whole application. The test results for the page will be shown at the end of the page.

### What are the tests/tasks accomplished?

**RSS Feeds**
* Does RSS Feeds are defined?
* Does each feed's url is defined?
* Does each feed's url is non-empty?
* Does each feed's name is defined?
* Does each feed's name is non-empty?

**The menu**
* Does the menu is hidden by default?
* Does the visibility changes when the menu link is click?

**Initial Entries**
* Does Initial Entries have atleast one feed?

**New Feed Selection**
* Does the feed content actually change when new feed is loaded asynchronously?

### Test Result

All specs are tested and are passed



## Helpful Resources

1. [Project Rubric](https://review.udacity.com/#!/projects/3442558598/rubric).
2. [JavaScript Testing](https://www.udacity.com/course/ud549).
3. [Required Project Assets](http://github.com/udacity/frontend-nanodegree-feedreader).
4. [Jasmine documentation](http://jasmine.github.io).