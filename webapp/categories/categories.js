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

function CategoriesCtrl() {
    var catVm = this;
    catVm.categories = [
        {"id": 0, "name": "Development"},
        {"id": 1, "name": "Design"},
        {"id": 2, "name": "Exercise"},
        {"id": 3, "name": "Humor"}
    ];

}

