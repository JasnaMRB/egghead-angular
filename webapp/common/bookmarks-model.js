angular.module('eggly.models.bookmarks', [])
    .service('BookmarksModel', BookmarksModel);

function BookmarksModel($http, $q) {
    var model = this,
        URLS = {
            FETCH: "data/bookmarks.json"
        },
        bookmarks;
    model.getBookmarks = getBookmarks;
    model.createBookmark = createBookmark;
    model.getBookmarkById = getBookmarkById;
    model.updateBookmark = updateBookmark;
    model.deleteBookmark = deleteBookmark;

    function extract(result) {
        return result.data;
    }
    function cacheBookmarks(result) {
        bookmarks = extract(result);
        return bookmarks;
    }
    function getBookmarks() {
        return (bookmarks) ? $q.when(bookmarks) : $http.get(URLS.FETCH).then(cacheBookmarks);
    }

    function createBookmark (bookmark) {
        bookmark.id = bookmarks.length;
        bookmarks.push(bookmark);
    }

    function updateBookmark(bookmark) {
        var index = _.findIndex(bookmarks, function(b) {
            return b.id === bookmark.id;
        });
        bookmarks[index] = bookmark;

    }

    function findBookmark(bookmarkId) {
        return _.find(bookmarks, function(bookmark) {
            return bookmark.id === parseInt(bookmarkId, 10);
        });
    }

    function getBookmarkById(bookmarkId) {
        var deferred = $q.defer();
        if (bookmarks) {
            deferred.resolve(findBookmark(bookmarkId));
        } else {
            getBookmarks().then(function() {
                deferred.resolve(findBookmark(bookmarkId));
            })
        }
        return deferred.promise;
    }

    function deleteBookmark(bookmark) {
        _.remove(bookmarks, function(b) {
            return b.id === parseInt(bookmark.id);
        });
    }


}