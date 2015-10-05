## babel-export-exports

I was referring to:

```es6
export default exports;
```

### What about it?
I had little understanding about `module.exports` and es6 `exports/imports`. And so, I wrote the code above. In an attempt to be able to do all export syntaxes:

```es6
import yolo from 'yolo';
import { swag } from 'yolo';
import * as yolo from 'yolo';
```

But TIL, the destructure operator works for default exported objects.

```
// this works
import { swag } from 'yolo';

// for
export default {
  swag: 'swaggity swag'
}
```