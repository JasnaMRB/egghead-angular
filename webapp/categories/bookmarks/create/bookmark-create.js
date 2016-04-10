angular.module('categories.bookmarks.create', ['ui.router'])
    .config(bookmarkCreateConfig)
    .controller('CreateBookmarkCtrl', CreateBookmarkCtrl);

function bookmarkCreateConfig($stateProvider) {
    $stateProvider
        .state('eggly.categories.bookmarks.create', {
            url: '/bookmarks/create',
            templateUrl: 'webapp/categories/bookmarks/create/bookmark-create.tmpl.html',
            controller: 'CreateBookmarkCtrl as createBmVm'
        });
}

function CreateBookmarkCtrl($state, $stateParams, BookmarksModel) {
   var createBmVm = this;
    createBmVm.createBookmark = createBookmark;
    createBmVm.cancelCreating = cancelCreating;

    function returnToBookmarks() {
        $state.go('eggly.categories.bookmarks', {
            category: $stateParams.category
        });
    }

    function cancelCreating() {
        returnToBookmarks();
    }

    function createBookmark() {
        BookmarksModel.createBookmark(createBmVm.newBookmark);
        returnToBookmarks();
    }

    function resetForm() {
        createBmVm.newBookmark = {
            title: '',
            url: '',
            category: $stateParams.category
        };
    }
    resetForm();

}

