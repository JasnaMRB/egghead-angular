angular.module('categories.bookmarks.edit', ['ui.router'])
    .config(bookmarkEditConfig)
    .controller('EditBookmarkCtrl', EditBookmarkCtrl);

function bookmarkEditConfig($stateProvider) {
    $stateProvider
        .state('eggly.categories.bookmarks.edit', {
            url: '/bookmarks/:bookmarkId/edit',
            templateUrl: 'webapp/categories/bookmarks/edit/bookmark-edit.tmpl.html',
            controller: 'EditBookmarkCtrl as editBmVm'
        });
}

function EditBookmarkCtrl() {

}