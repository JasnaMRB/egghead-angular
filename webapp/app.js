angular.module("eggly", [
    'categories',
    'categories.bookmarks',
    'ui.router',
    'ngAnimate'
])
    .config(config);
function config($stateProvider, $urlRouterProvider) {
    $stateProvider.state('eggly', {
        url: '',
        abstract: true
    });
    $urlRouterProvider.otherwise('/');
}