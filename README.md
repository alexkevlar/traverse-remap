# traverse-remap

Traverse and transform objects by visiting every node on a recursive walk.

## Available Scripts

In the project directory, you can run:

```
import {traverse} from "traverse-remap/lib";
var obj = [ 5, 6, -3, [ 7, 8, -2, 1 ], { f : 10, g : -13 } ];

let result = traverse(body, value => value > 5 ? 100 : 0);

console.dir(result);
```

Output:
```
[ 0, 100, 100, [ 100, 100, 100, 0 ], { f: 100, g: 100 } ]
```