## babel-6-export-generators-error-demo
Reproducing an error I found when exporting generators in Babel 6.

```bash
# log
Error: /Users/srph/Web/playground/js/babel-6-export-generators/generator.js: Expected type "Identifier" with option {}
    at Object.t.(anonymous function) [as assertIdentifier] (/Users/srph/Web/playground/js/babel-6-export-generators/node_modules/babel-types/lib/index.js:78:13)
    at PluginPass.exit (/Users/srph/Web/playground/js/babel-6-export-generators/node_modules/babel-plugin-transform-regenerator/lib/visit.js:92:9)
    at newFn (/Users/srph/Web/playground/js/babel-6-export-generators/node_modules/babel-traverse/lib/visitors.js:276:19)
    at NodePath._call (/Users/srph/Web/playground/js/babel-6-export-generators/node_modules/babel-traverse/lib/path/context.js:74:18)
    at NodePath.call (/Users/srph/Web/playground/js/babel-6-export-generators/node_modules/babel-traverse/lib/path/context.js:46:17)
    at NodePath.visit (/Users/srph/Web/playground/js/babel-6-export-generators/node_modules/babel-traverse/lib/path/context.js:116:8)
    at TraversalContext.visitQueue (/Users/srph/Web/playground/js/babel-6-export-generators/node_modules/babel-traverse/lib/context.js:153:16)
    at TraversalContext.visitSingle (/Users/srph/Web/playground/js/babel-6-export-generators/node_modules/babel-traverse/lib/context.js:113:19)
    at TraversalContext.visit (/Users/srph/Web/playground/js/babel-6-export-generators/node_modules/babel-traverse/lib/context.js:197:19)
    at Function.traverse.node (/Users/srph/Web/playground/js/babel-6-export-generators/node_modules/babel-traverse/lib/index.js:139:17)
```

### Running
```bash
npm install
node index
```

How did I assume that this was occuring only to `export default`? Open up `working.js` which `import`s the `module.exports` version of the generator.
```bash
node working.js
```

### Issue
Check [T6733](https://phabricator.babeljs.io/T6733).