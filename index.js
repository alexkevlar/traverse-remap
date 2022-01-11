"use strict";
/**
 * Traverse and remap objects by visiting every node on a recursive walk
 * @param x
 * @param remap
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.traverse = void 0;
function traverse(x, remap) {
    var o;
    if (Array.isArray(x)) {
        o = traverseArray(x, remap);
    }
    else if ((typeof x === 'object') && (x !== null)) {
        o = traverseObject(x, remap);
    }
    else {
        o = remap(x);
    }
    return o;
}
exports.traverse = traverse;
/**
 *
 * @param arr
 * @param remap
 */
function traverseArray(arr, remap) {
    return arr.map(function (x) { return traverse(x, remap); });
}
/**
 *
 * @param obj
 * @param remap
 */
function traverseObject(obj, remap) {
    var o = {};
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            o[key] = traverse(obj[key], remap);
        }
    }
    return o;
}
