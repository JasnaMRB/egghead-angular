# Eggly Bookmarks
This app is to help me understand Angular 1 better. I am following Egghead.io's intro tutorial.

[egghead.io](egghead.io)

## Style
I am not following the tutorial exactly. I'm instead trying to implement [John Papa's style guide](https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md) to get me used to that.

## About
This app lets you add, edit, and delete Internet bookmarks.

## Requirements
npm
[npm serve](https://www.npmjs.com/package/serve)

## To run
First time: `npm install`
Then: `http-server`

## Development Steps
### Beginning
1. Create HTML template
1. Add Angular, jQuery, bootstrap dependencies
1. Add ng-app to `<html>` opening tag to initialize Angular
1. Create Angular app in app.js: 
    `angular.module('eggly',[])`
1. Create a main controller in main-controller.js:
    `angular.module('eggly').controller('MainCtrl', MainCtrl);`
    `function MainCtrl() {`
        `var mainVm = this;`
        `mainVm.someVariable = null;`
        `mainVm.someFunction = someFunction;`
        `function someFunction() { ... }`
     `}`
1. Add your data, e.g., JSON for categories and bookmarks, in the controller.
1. Register your controller with an element in the view: `<body ng-controller="MainCtrl as mainVm">`.
1. In a child element, use `ng-repeat` and handlebars `{{ }}`
    `<div><ul><li ng-repeat="bookmark in mainVm.bookmarks">{{ bookmark.title }}</li></ul></div>`
1. Create functions and variables to filter display of bookmarks by current selected category.
1. Create functions and variables for CRUD operations on bookmarks.
1. Create functions and variables to make display nicer, e.g., highlight active category or active bookmark.

### Refactoring code for modularity/scalability
1. Create a file structure [based on feature](http://cliffmeyers.com/blog/2013/4/21/code-organization-angularjs-javascript) .
1. Create module `angular.module('categories',[])` and submodule `angular.module('categories.bookmarks', [])` in their feature folders->JS files.
1. Create submodules for `create` and `edit` bookmarks.
1. Inject those submodules into the `categories.bookmarks` submodule: `angular.module('categories.bookmarks', ['categories.bookmarks.create', 'categories.bookmarks.edit'])`
1. Create a common folder for things used across modules, e.g., models. Here we'll have bookmarks and categories models.
1. Inject them in their appropriate features modules: `angular.module('categories', ['eggly.models.categories']);` and 
    `angular.module('categories.bookmarks', [
        'eggly.models.categories',
        'eggly.models.bookmarks',
        'categories.bookmarks.create',
        'categories.bookmarks.edit'
    ]);`
1. Inject the bookmarks and categories modules into the main app module. `angular.module("eggly", ['categories', 'categories.bookmarks']);`


