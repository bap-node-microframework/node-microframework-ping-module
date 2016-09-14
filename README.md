# ping-module
A sample module ping/pong

## Installing

To install and add the dependency to the package.json, run the following command:

```
npm install bap-node-microframework-ping-module --save
```
## Using

To activate the ping module, write the following code in app/kernel.ts:

```javascript
// app/kernel.ts
...
import { PingModule } from "bap-node-microframework-ping-module";
...

export class Kernel extends KernelInterface {

    boot(app, io: SocketIO.Server) {
        ...
        new PingModule(app, io);
        ...
    }
}
...
```

Now, if you go to http://localhost:3000/ping, you will get:

```json
{"ping": "pong"}
```
