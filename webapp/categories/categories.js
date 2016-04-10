angular.module('categories', [
    'eggly.models.categories', 'ui.router'
])
    .config(categoriesConfig);
function categoriesConfig($stateProvider) {
    $stateProvider.state('eggly.categories', {
        url: '/',
        views: {
            'categories@': {
                controller: 'CategoriesListCtrl as catListVm',
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

angular.module('categories').controller('CategoriesListCtrl', CategoriesListCtrl);

function CategoriesListCtrl() {
    var catListVm = this;
    catListVm.categories = [
        {"id": 0, "name": "Development"},
        {"id": 1, "name": "Design"},
        {"id": 2, "name": "Exercise"},
        {"id": 3, "name": "Humor"}
    ];

}

