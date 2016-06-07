# ping-module
A sample module ping/pong

## Installing

To install and add the dependency to the package.json, run the following command:

```
npm install bap-node-microframework-ping-module --save
```
## Using

To activate the ping module, write the following code in app/app.ts:

```javascript
// app/app.ts
...

import { PingPlugin } from 'bap-node-microframework-ping-module';

...

import { Kernel } from "./kernel";
var kernel = new Kernel();
var App = new Application(<ApplicationOptions>{
    ...
}, <KernelInterface>kernel);

...

App.registerPlugin(PingPlugin, {});

...

App.start();

...
```

Now, if you go to http://localhost:3000/ping, you will get:

```json
{"ping": "pong"}
```
