# loopback3-xTotalCount
Add `X-Total-Count` header to all search requests for Loopback 3.0. It should be use on client that use [json-server](https://github.com/typicode/json-server), such as [admin-on-rest](https://github.com/marmelab/admin-on-rest)

## Install
1. Add `"loopback3-xTotalCount": "latest"` to your `package.json` file.
2. Run `npm install` OR run `npm install loopback3-xTotalCount`
3. Set the module in your server.js (loopback server endpoint)

```ecmascript 6
require('loopback3-xTotalCount')(app);
```

We recommend to use `yarn` instead of `npm`:

1. `yarn add loopback3-xTotalCount`
2. Set the module in your server.js

```ecmascript 6
require('loopback3-xTotalCount')(app);
```
Thanks

## License
This module is licensed under the [MIT Licence](LICENSE).