import { RxDatabase } from "rxdb";
import { users } from "./user";
import { UserCollection } from "./user/types";
import { userMiddlewares } from "./user/userMiddlewares";

export type TcAppRxDBCollections = {
  users: UserCollection;
};

export async function registerCollections(
  rxdb: RxDatabase<TcAppRxDBCollections>
) {
  await rxdb.addCollections({
    users,
  });
}

export function registerMiddlewares(rxdb: RxDatabase<TcAppRxDBCollections>) {
  userMiddlewares(rxdb.users);
}
