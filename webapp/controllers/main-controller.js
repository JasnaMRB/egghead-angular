angular
    .module('eggly')
    .controller('MainCtrl', MainCtrl);

function MainCtrl() {
    var mainVm = this;
    mainVm.setCurrentCategory = setCurrentCategory;
    mainVm.currentCategory = null;
    mainVm.isCurrentCategory = isCurrentCategory;
    mainVm.isCreating = false;
    mainVm.isEditing = false;
    mainVm.shouldShowCreating = shouldShowCreating;
    mainVm.shouldShowEditing = shouldShowEditing;
    mainVm.startCreating = startCreating;
    mainVm.startEditing = startEditing;
    mainVm.cancelCreating = cancelCreating;
    mainVm.cancelEditing = cancelEditing;
    mainVm.createBookmark = createBookmark;
    mainVm.resetCreateForm = resetCreateForm;
    mainVm.editedBookmark = null;
    mainVm.setEditedBookmark = setEditedBookmark;
    mainVm.updateBookmark = updateBookmark;
    mainVm.isSelectedBookmark = isSelectedBookmark;
    mainVm.deleteBookmark = deleteBookmark;

    mainVm.categories = [
        {"id": 0, "name": "Development"},
        {"id": 1, "name": "Design"},
        {"id": 2, "name": "Exercise"},
        {"id": 3, "name": "Humor"}
    ];
    mainVm.bookmarks = [
        {"id": 0, "title": "AngularJS", "url": "http://angularjs.org", "category": "Development" },
        {"id": 1, "title": "Egghead.io", "url": "http://egghead.io", "category": "Development" },
        {"id": 2, "title": "A List Apart", "url": "http://alistapart.com/", "category": "Design" },
        {"id": 3, "title": "One Page Love", "url": "http://onepagelove.com/", "category": "Design" },
        {"id": 4, "title": "MobilityWOD", "url": "http://www.mobilitywod.com/", "category": "Exercise" },
        {"id": 5, "title": "Robb Wolf", "url": "http://robbwolf.com/", "category": "Exercise" },
        {"id": 6, "title": "Senor Gif", "url": "http://memebase.cheezburger.com/senorgif", "category": "Humor" },
        {"id": 7, "title": "Wimp", "url": "http://wimp.com", "category": "Humor" },
        {"id": 8, "title": "Dump", "url": "http://dump.com", "category": "Humor" }
    ];

    function setCurrentCategory(category) {
        mainVm.currentCategory = category;
        cancelCreating();
        cancelEditing();
    }

    function isCurrentCategory(category) {
        return mainVm.currentCategory != null && category.name === mainVm.currentCategory.name;
    }

    /***
     * Creating and Editing States
     */
    function startCreating() {
        mainVm.isCreating = true;
        mainVm.isEditing = false;
    }

    function startEditing() {
        mainVm.isEditing = true;
        mainVm.isCreating = false;
    }

    function shouldShowCreating() {
        return mainVm.currentCategory && !mainVm.isEditing;
    }

    function shouldShowEditing() {
        return mainVm.isEditing && !mainVm.isCreating;
    }

    function cancelEditing() {
        mainVm.isEditing = false;
    }

    function cancelCreating() {
        mainVm.isCreating = false;
    }

    /***
     * CRUD
     */
    function createBookmark(bookmark) {
        bookmark.id = mainVm.bookmarks.length;
        mainVm.bookmarks.push(bookmark);
        resetCreateForm();
    }

    function resetCreateForm() {
        mainVm.newBookmark ={
            title: '',
            url: '',
            category: mainVm.currentCategory.name
        }
    }

    function setEditedBookmark(bookmark) {
        mainVm.editedBookmark = angular.copy(bookmark);
    }

    function updateBookmark(bookmark) {
        var index =_.findIndex(mainVm.bookmarks, function(b) {
            return b.id === bookmark.id;
        });
        mainVm.bookmarks[index] = bookmark;
        mainVm.editedBookmark = null;
        mainVm.isEditing = false;
    }

    function isSelectedBookmark(bookmarkId) {
        return mainVm.editedBookmark !== null && mainVm.editedBookmark.id === bookmarkId;
    }

    function deleteBookmark(bookmark) {
        var deleteConfirm = confirm("Are you sure want to delete this bookmark?");
        if (deleteConfirm) {
            _.remove(mainVm.bookmarks, function(b) {
                return b.id === bookmark.id;
            });
        }
    }

}