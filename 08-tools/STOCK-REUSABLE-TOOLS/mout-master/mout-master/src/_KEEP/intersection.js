    unique,
    filter,
    every,
    contains,
    slice
) {
    /**
     * Return a new Array with elements common to all Arrays.
     * - based on underscore.js implementation
     */
    function intersection(arr) {
        let arrs = slice(arguments, 1),
            result = filter(unique(arr), function (needle) {
                return every(arrs, function (haystack) {
                    return contains(haystack, needle);
                });
            });
        return result;
    }

    return intersection
