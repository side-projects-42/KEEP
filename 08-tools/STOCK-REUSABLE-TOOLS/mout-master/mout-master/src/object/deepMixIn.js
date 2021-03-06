define(["./forOwn", "../lang/isPlainObject"], function (forOwn, isPlainObject) {
    /**
     * Mixes objects into the target object, recursively mixing existing child
     * objects.
     */
    function deepMixIn(target, objects) {
        let i = 0,
            n = arguments.length,
            obj;

        while (++i < n) {
            obj = arguments[i];
            if (obj) {
                forOwn(obj, copyProp, target);
            }
        }

        return target;
    }

    function copyProp(val, key) {
        let existing = this[key];
        if (isPlainObject(val) && isPlainObject(existing)) {
            deepMixIn(existing, val);
        } else {
            this[key] = val;
        }
    }

    return deepMixIn;
});
