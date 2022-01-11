/**
 * Traverse and remap objects by visiting every node on a recursive walk
 * @param x
 * @param remap
 */

export function traverse(x: {}, remap: (x: any) => []) {
    let o;
    if (Array.isArray(x)) {
        o = traverseArray(x, remap)
    } else if ((typeof x === 'object') && (x !== null)) {
        o = traverseObject(x, remap)
    } else {
        o = remap(x);
    }
    return o;
}


/**
 *
 * @param arr
 * @param remap
 */

function traverseArray(arr: any|[], remap: (x: any) => []):[] {
    return arr.map((x:any):[] => traverse(x, remap))
}


/**
 *
 * @param obj
 * @param remap
 */

function traverseObject(obj: any|{}, remap: (x: any) => []) {
    let o:any|{} = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            o[key] = traverse(obj[key], remap)
        }
    }
    return o;
}