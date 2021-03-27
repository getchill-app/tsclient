# tsclient

## Install

```shell
yarn add @getchill.app/tsclient
```

## Usage

```typescript
import {Credentials, rpcService, RPCService, certPath, RPCError} from '@getchill.app/tsclient'

export const creds: Credentials = new Credentials(certPath('Chill'))
export const rpc: RPCService = rpcService('localhost:49405', creds)

// Authenticate with service
const auth = await rpc.authUnlock({
  secret: 'mypassword',
  type: AuthType.PASSWORD_AUTH,
  client: 'myapp',
})
// Set auth token from unlock on the service auth
creds.token = auth.authToken

// Search
const keys = await rpc.keys({})
console.log('Keys:', keys)
```

## Publishing

```shell
npm login
npm publish --access public
```
