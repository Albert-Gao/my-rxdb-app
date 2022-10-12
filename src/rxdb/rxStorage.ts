import { createRxDatabase } from "rxdb";
import { getRxStorageDexie } from "rxdb/plugins/dexie";
import { wrappedValidateAjvStorage } from "rxdb/plugins/validate-ajv";
import { TcAppRxDBCollections } from "./schema";

export const rxStorage = wrappedValidateAjvStorage({
  storage: getRxStorageDexie(),
});

// export const rxDBPromise = createRxDatabase<TcAppRxDBCollections>({
//   name: "tc-app",
//   storage: rxStorage,
// });

export const getDB = () =>
  createRxDatabase<TcAppRxDBCollections>({
    name: "tc-app1",
    storage: rxStorage,
  });
