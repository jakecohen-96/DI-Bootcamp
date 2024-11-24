Jake, hello!

Let's do it step-by-step.

Let's imagine that I am trying to start you code and a server app. You pushed to the github node_modules (we will talk about that later) so we have everything to run your app after we fetched the repo. Ok, I will try to run it:

``` node
node server.js
```

We've got the error:

```
Error: Cannot find module 'express'
Require stack:
- /home/vyach/Sites/DI/DI-Bootcamp/week14/day2/exercise1/server.js
    at Module._resolveFilename (node:internal/modules/cjs/loader:1225:15)
    at Module._load (node:internal/modules/cjs/loader:1051:27)
    at Module.require (node:internal/modules/cjs/loader:1311:19)
    at require (node:internal/modules/helpers:179:18)
    at Object.<anonymous> (/home/vyach/Sites/DI/DI-Bootcamp/week14/day2/exercise1/server.js:1:17)
    at Module._compile (node:internal/modules/cjs/loader:1469:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1548:10)
    at Module.load (node:internal/modules/cjs/loader:1288:32)
    at Module._load (node:internal/modules/cjs/loader:1104:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:174:12) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/vyach/Sites/DI/DI-Bootcamp/week14/day2/exercise1/server.js'
  ]
  ...
  }
```

In general node is trying to say that it can't find the module express. But why, if we have it already installed? Maybe I shoud reinstall the dependencies to my version of OS? Ok, but first let's try just to move node_modules folder with package.json file and package-lock.json file to the server.js directory.

``` bash
cd blog-api
mv node_modules package-lock.json package.json ..
```

And let's try again

``` node
node server.js
```

And everything works! So the concept is pretty easy - you need to have modules folder in the root of your project, to give an access for all modules to the dependencies.

P.S. About the node_modules - it is a good practice to add it to .gitignore to prevent pushing it to the github. You don't need to add every single folder, it is more comfortable just to use the mask:

node_modules

or

/node_modules

It will prevent it from pushing in every directory. The way how to ignore it depends on the project, first option will exclude only root directory (and usually it is all that you need) and the second option will exclude all node_module directories in any folder.