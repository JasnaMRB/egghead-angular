# Eggly Bookmarks
This app is to help me understand Angular 1 better. I am following Egghead.io's intro tutorial.

[egghead.io](egghead.io)

## Style
I am not following the tutorial exactly. I instead trying to implement [John Papa's style guide](https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md) to get me used to that.

## About
This app lets you add, edit, and delete Internet bookmarks.

## Requirements
npm

## To run
`http-server`

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


