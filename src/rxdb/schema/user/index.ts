import { RxCollectionCreator } from "rxdb";
import { userSchema } from "./userSchema";
import { UserDocType } from "./types";
import { userCollectionMethods } from "./userCollectionMethods";
import { userDocMethods } from "./userDocMethods";

export const users: RxCollectionCreator<UserDocType> = {
  schema: userSchema,
  methods: userDocMethods,
  statics: userCollectionMethods,
};
