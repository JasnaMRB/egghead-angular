angular.module('categories.bookmarks.create', ['ui.router'])
    .config(bookmarkCreateConfig)
    .controller('CreateBookmarkCtrl', CreateBookmarkCtrl);

function bookmarkCreateConfig($stateProvider) {
    $stateProvider.state('eggly.categories.bookmarks.create', {
        url: '/bookmarks/create',
        templateUrl: 'webapp/categories/bookmarks/create/bookmark-create.tmpl.html',
        controller: 'CreateBookmarkCtrl as createBmVm'
    });
}

function CreateBookmarkCtrl() {

}

