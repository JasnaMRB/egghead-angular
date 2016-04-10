angular.module('eggly.models.bookmarks', [])
    .service('BookmarksModel', BookmarksModel);

function BookmarksModel($http, $q) {
    var model = this,
        URLS = {
            FETCH: "data/bookmarks.json"
        }, bookmarks;
    model.getBookmarks = getBookmarks;

    function extract(result) {
        return result.data;
    }
    function cacheBookmarks(result) {
        bookmarks = extract(result);
        return bookmarks;
    }
    function getBookmarks() {
        return (bookmarks) ?
            $q.when(bookmarks) : $http.get(URLS.FETCH).then(cacheBookmarks);
    }
}