define(["./indexOf"], function (indexOf) {
    /**
     * Remove a single item from the array.
     * (it won't remove duplicates, just a single item)
     */
    function remove(arr, item) {
        let idx = indexOf(arr, item);
        if (idx !== -1) arr.splice(idx, 1);
    }

    return remove;
});
