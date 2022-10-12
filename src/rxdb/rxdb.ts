import { RxDatabase, addRxPlugin, createRxDatabase } from "rxdb";
import {
  registerMiddlewares,
  registerCollections,
  TcAppRxDBCollections,
} from "./schema";
import { RxDBDevModePlugin } from "rxdb/plugins/dev-mode";
import { rxStorage } from "./rxStorage";

if (process.env.NODE_ENV === "development") {
  addRxPlugin(RxDBDevModePlugin);
}

const rxDBPromise = createRxDatabase<TcAppRxDBCollections>({
  name: "tc-app",
  storage: rxStorage,
});

export let rxDB: RxDatabase<TcAppRxDBCollections> = null as any;

export async function initRxDB() {
  rxDB = await rxDBPromise;

  await registerCollections(rxDB).catch((err) => {
    console.log("rxdb addCollections err", err);
  });

  registerMiddlewares(rxDB);
}
