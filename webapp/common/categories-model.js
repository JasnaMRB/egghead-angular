angular.module('eggly.models.categories',[])
    .service('CategoriesModel', CategoriesModel);

function CategoriesModel($http, $q) {
    var model = this,
        URLS = {
            FETCH: 'data/categories.json'
        },
        categories,
        currentCategory;

    model.getCategories = getCategories;
    model.getCategoryByName = getCategoryByName;
    model.setCurrentCategory = setCategoryName;
    model.getCurrentCategory = getCurrentCategory;
    model.getCurrentCategoryName = getCurrentCategoryName;

    function extract(result) {
        return result.data;
    }

    function cacheCategories(result) {
        categories = extract(result);
        return categories;
    }
    function getCategories() {
        return (categories) ?
            $q.when(categories) : $http.get(URLS.FETCH).then(cacheCategories);
    }

    function getCategoryByName(categoryName) {
        var deferred = $q.defer();
        function findCategory() {
            return _.find(categories, function(c) {
                return c.name === categoryName;
            })
        }
        if (categories) {
            deferred.resolve(findCategory());
        } else {
            model.getCategories()
                .then(function(result) {
                    deferred.resolve(findCategory())
                });
        }
        return deferred.promise;

    }

    function setCategoryName(categoryName) {
     return model.getCategoryByName(categoryName)
         .then(function(category) {
             currentCategory = category;
         })
    }

    function getCurrentCategory() {
        return currentCategory;
    }

    function getCurrentCategoryName() {
        return currentCategory ? currentCategory.name : '';
    }


}
