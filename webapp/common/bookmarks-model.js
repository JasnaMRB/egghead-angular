angular.module('eggly.models.bookmarks', [])
    .service('BookmarksModel', BookmarksModel);

function BookmarksModel($http) {
    var model = this,
        URLS = {
            FETCH: "data/bookmarks.json"
        },
        bookmarks;
    model.getBookmarks = getBookmarks;
    model.createBookmark = createBookmark;

    function extract(result) {
        return result.data;
    }
    function cacheBookmarks(result) {
        bookmarks = extract(result);
        return bookmarks;
    }
    function getBookmarks() {
        return $http.get(URLS.FETCH).then(cacheBookmarks);
    }

    function createBookmark (bookmark) {
        bookmark.id = bookmarks.length;
        bookmarks.push(bookmark);

    }


}