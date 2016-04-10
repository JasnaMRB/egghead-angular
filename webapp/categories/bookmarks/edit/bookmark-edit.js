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

function EditBookmarkCtrl($state, $stateParams, BookmarksModel) {
    var editBmVm = this;
    editBmVm.updatedBookmark = updatedBookmark;
    editBmVm.cancelEditing = cancelEditing;

    function returnToBookmarks () {
        $state.go('eggly.categories.bookmarks', {
            category: $stateParams.category
        });
    }

    function cancelEditing() {
        returnToBookmarks();
    }

    function updatedBookmark() {
        editBmVm.bookmark = angular.copy(editBmVm.editedBookmark);
        BookmarksModel.updateBookmark(editBmVm.bookmark);
        returnToBookmarks();
    }
    BookmarksModel.getBookmarkById($stateParams.bookmarkId)
        .then(function(bookmark) {
            if (bookmark) {
                editBmVm.bookmark = bookmark;
                editBmVm.editedBookmark = angular.copy(editBmVm.bookmark);
            } else {
                returnToBookmarks();
            }
        });


}