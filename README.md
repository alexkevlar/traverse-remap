# traverse-remap

Traverse and transform objects by visiting every node on a recursive walk.

## Available Scripts

In the project directory, you can run:

```javascript
import {traverse} from "traverse-remap";
var obj = [ 5, 6, -3, [ 7, 8, -2, 1 ], { f : 10, g : -13 } ];

let result = traverse(obj, value => value > 5 ? 100 : 0);

console.dir(result);
```

Output:
```javascript
[ 0, 100, 100, [ 100, 100, 100, 0 ], { f: 100, g: 100 } ]
```