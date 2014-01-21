# angular-slideshow
This is a simple angularjs slideshow app, for those who prefer to create slides in html over PowerPoint.

## Prerequisites

+ [Node](http://nodejs.org/)
+ [npm](http://npmjs.org/)
+ [Bower](http://bower.io)

```
npm install -g bower
```

## Quick start

###### Clone the repo

```
git clone git://github.com/murrayju/angular-slideshow.git
```
###### Use Bower to download dependencies

```
bower install
```
###### Run the test server

```
cd test
npm install
node testserver.js
```
###### Launch it in your browser

```
http://localhost:55555
```

## Creating Slides
###### Create a html page for each slide
These are loaded as AngularJS templates, and therefore can contain any directives that you wish to use.
###### Update the slide tree
In `slides.js` you define the ordering of the slides to be in the show.