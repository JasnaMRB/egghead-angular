angular.module('categories.bookmarks', [
    'eggly.models.categories',
    'eggly.models.bookmarks',
    'categories.bookmarks.create',
    'categories.bookmarks.edit',
    'ui.router'
]).config(bookmarkConfig)
    .controller('BookmarksCtrl', BookmarksCtrl);

function bookmarkConfig($stateProvider) {
    $stateProvider.state('eggly.categories.bookmarks', {
        url: 'categories/:category',
        views: {
            'bookmarks@': {
                templateUrl: 'webapp/categories/bookmarks/bookmarks.tmpl.html',
                controller: 'BookmarksCtrl as bmVm'
            }
        }
    });
}

function BookmarksCtrl($stateParams, BookmarksModel, CategoriesModel) {
    var bmVm = this;
    bmVm.currentCategoryName = $stateParams.category; // from the url parameter
    bmVm.getCurrentCategory = CategoriesModel.getCurrentCategory;
    bmVm.getCurrentCategoryName = CategoriesModel.getCurrentCategoryName;
    bmVm.deleteBookmark = BookmarksModel.deleteBookmark;

    CategoriesModel.setCurrentCategory($stateParams.category);
    BookmarksModel.getBookmarks().then(function (bookmarks) {
        bmVm.bookmarks = bookmarks;
    });

}
