# rxdb addCollections err TypeError: Cannot read properties of null (reading 'hasOwnProperty')

## How to reproduce the bug

1. git clone
1. yarn
1. yarn start
1. open browser console
1. see the error message

## How to "fix" it

1. remove the following line

```javascript
// src/rxdb/rxdb.ts
addRxPlugin(RxDBDevModePlugin);
```

2. refresh the page, no errors
