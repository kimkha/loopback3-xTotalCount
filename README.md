# loopback3-xTotalCount
Add `X-Total-Count` header to all search requests for Loopback 3.0. It should be use on client that use [json-server](https://github.com/typicode/json-server), such as [admin-on-rest](https://github.com/marmelab/admin-on-rest)

## Install

### NPM

1. Add `"loopback3-xtotalcount": "latest"` to your `package.json` file.
2. Run `npm install` OR run `npm install loopback3-xtotalcount`
3. Set the module in your `component-config.json` (loopback server endpoint)

```json
  "loopback3-xtotalcount": {
    "pattern": [
      "*.find"
    ]
  }
```

### Yarn

We recommend to use `yarn` instead of `npm`:

1. `yarn add loopback3-xtotalcount`
2. Set the module in your `component-config.json`

```json
  "loopback3-xtotalcount": {
    "pattern": [
      "*.find"
    ]
  }
```

## Options

### `pattern`: Array of String

Method patterns that `X-Total-Count` header will be added.

Accepted patterns: See https://loopback.io/doc/en/lb3/Remote-hooks.html#wildcards.

Default value: `[ "*.find" ]`, which auto added to find method of all models.

## Example

Please check example here: [loopback-aor-boilerplate](https://github.com/kimkha/loopback-aor-boilerplate), you should clone it and change your model later.

## Known issues

### Cross-domain header

By default, loopback doesn't allow expose header over cross-domain. So, if you client site and your loopback server run on 2 different domain, the client won't receive `X-Total-Count` (see [here](https://github.com/kimkha/aor-loopback/issues/2)).

To fix it, open `middleware.json` and insert following line under `initial.cors.params`:

```
"exposedHeaders": "X-Total-Count"
```

## License
This module is licensed under the [MIT Licence](LICENSE).
