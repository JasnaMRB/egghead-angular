angular.module('eggly.models.categories',[])
    .service('CategoriesModel', CategoriesModel);

function CategoriesModel($http) {
    var model = this,
        URLS = {
            FETCH: 'data/categories.json'
        },
        categories;

    model.getCategories = getCategories;
    function extract(result) {
        return result.data;
    }

    function cacheCategories(result) {
        categories = extract(result);
        return categories;
    }
    function getCategories() {
        return $http.get(URLS.FETCH).then(cacheCategories);
    }

}
