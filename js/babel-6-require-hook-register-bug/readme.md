## babel-6-require-hook-register-bug
The Babel documentation states:
> All subsequent files required by node with the extensions .es6, .es, .jsx and .js will be transformed by Babel. The polyfill is also automatically required.

However, my generators aren't working without *requiring* the polyfill myself. Am I wrong about something?

```bash
ReferenceError: regeneratorRuntime is not defined
    at Object.<anonymous> (generator.js:1:37)
    at Module._compile (module.js:425:26)
    at loader (/Users/srph/Web/playground/js/babel-6-require-hook-register-bug/node_modules/babel-register/lib/node.js:127:5)
    at Object.require.extensions.(anonymous function) [as .js] (/Users/srph/Web/playground/js/babel-6-require-hook-register-bug/node_modules/babel-register/lib/node.js:137:7)
    at Module.load (module.js:356:32)
    at Function.Module._load (module.js:311:12)
    at Module.require (module.js:366:17)
    at require (module.js:385:17)
    at Object.<anonymous> (/Users/srph/Web/playground/js/babel-6-require-hook-register-bug/index.js:2:1)
    at Module._compile (module.js:425:26)
```

### Running
```bash
npm install
node index
```