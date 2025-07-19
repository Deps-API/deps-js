
# @depsapi/deps-js

> Isomorphic TypeScript client for the Deps API.

The `@depsapi/deps-js` package is a lightweight and powerful client for interacting with the Deps API in any JavaScript environment.

## Features

- **Isomorphic**: Works seamlessly in Node.js, Deno, and modern browsers.
- **Typed**: Fully typed with TypeScript for a better developer experience.
- **Lightweight**: Built with `ofetch` for a small bundle size.
- **Promise-based**: Modern asynchronous API using Promises.
- **Modular**: API methods are grouped into logical modules.

## Usage

<table>
<tbody valign=top align=left>
<tr><th>
Node.js
</th><td>

Install with <code>pnpm install @depsapi/deps-js</code>. We recommend using Node.js v20 (LTS).

```js
import { DepsClient } from "@depsapi/deps-js";
```

</td></tr>
<tr><th>
Browsers
</th><td width=100%>
Load <code>@depsapi/deps-js</code> directly from <a href="https://esm.sh">esm.sh</a>
        
```html
<script type="module">
import { DepsClient } from "https://esm.sh/@depsapi/deps-js";
</script>
```

</td></tr>
<tr><th>
Deno
</th><td width=100%>
Load <code>@depsapi/deps-js</code> directly from <a href="https://esm.sh">esm.sh</a>
        
```ts
import { DepsClient } from "https://esm.sh/@depsapi/deps-js?dts";
```

</td></tr>
</tbody>
</table>

## `DepsClient` API Client

The `DepsClient` is the main entry point for interacting with the Deps API.

**Example**: Get the API status.

```js
const client = new DepsClient({ apiKey: 'YOUR_API_KEY' });

const status = await client.status.get();
console.log(status);
```

### Constructor options

<table>
  <thead align=left>
    <tr>
      <th>
        name
      </th>
      <th>
        type
      </th>
      <th width=100%>
        description
      </th>
    </tr>
  </thead>
  <tbody align=left valign=top>
    <tr>
      <th>
        <code>apiKey</code>
      </th>
      <td>
        <code>string</code>
      </td>
      <td>
        Your Deps API key. This is a required parameter.
      </td>
    </tr>
    <tr>
      <th>
        <code>baseUrl</code>
      </th>
      <td>
        <code>string</code>
      </td>
      <td>
        The base URL of the Deps API. Defaults to <code>https://api.depscian.tech</code>.
      </td>
    </tr>
  </tbody>
</table>

### API Modules

The client provides access to the API through a set of modules:

- `client.admins`
- `client.families`
- `client.fractions`
- `client.ghetto`
- `client.leadership`
- `client.map`
- `client.online`
- `client.player`
- `client.sobes`
- `client.status`

**Example**: Get the online players on a server.

```js
const online = await client.online.get({ serverId: '1' });
console.log(online);
```

### Error Handling

API errors are thrown as instances of `DepsApiError` or `ValidationError`.

```js
import { DepsClient, DepsApiError, ValidationError } from '@depsapi/deps-js';

const client = new DepsClient({ apiKey: 'YOUR_API_KEY' });

try {
  const player = await client.player.find({ serverId: '1', nickname: 'NonExistentPlayer' });
} catch (error) {
  if (error instanceof ValidationError) {
    console.error('Validation Error:', error.data);
  } else if (error instanceof DepsApiError) {
    console.error('API Error:', error.message);
  } else {
    console.error('An unknown error occurred:', error);
  }
}
```

## LICENSE

[MIT](LICENSE) 