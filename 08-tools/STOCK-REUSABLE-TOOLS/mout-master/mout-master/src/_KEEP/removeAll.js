/*Remove all instances of an item from array.
 */
function removeAll(arr, item) {
    let idx = indexOf(arr, item);
    while (idx !== -1) {
        arr.splice(idx, 1);
        idx = indexOf(arr, item, idx);
    }
}

return removeAll;
