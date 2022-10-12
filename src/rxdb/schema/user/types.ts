import { RxCollection, RxDocument } from "rxdb";

export interface UserDocType {
  id: string;
  birthday?: string;
  timezone?: string;
  createTime: string;
  updateTime: string;
}

export type UserDocMethods = {
  scream: (v: string) => string;
};

export type UserCollectionMethods = {
  create: (user: Pick<UserDocType, "birthday" | "timezone">) => Promise<void>;
};

export type UserDocument = RxDocument<UserDocType, UserDocMethods>;

export type UserCollection = RxCollection<
  UserDocType,
  UserDocMethods,
  UserCollectionMethods
>;
