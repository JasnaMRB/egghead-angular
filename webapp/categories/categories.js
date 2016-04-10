angular.module('categories', [
    'eggly.models.categories', 'ui.router'
])
    .config(categoriesConfig);
function categoriesConfig($stateProvider) {
    $stateProvider.state('eggly.categories', {
        url: '/',
        views: {
            'categories@': {
                controller: 'CategoriesCtrl as catVm',
                templateUrl: 'webapp/categories/categories.tmpl.html'
            },
            'bookmarks@': {
                controller: 'BookmarksCtrl as bmVm',
                templateUrl: 'webapp/categories/bookmarks/bookmarks.tmpl.html'
            }
        }
    });
}
// name@ with @ means it's an absolute path

angular.module('categories').controller('CategoriesCtrl', CategoriesCtrl);

function CategoriesCtrl(CategoriesModel) {
    var catVm = this;
    catVm.categories = CategoriesModel.getCategories();

}

