/* eslint-disable no-param-reassign */
import {
  RxCollectionHookCallback,
  RxCollectionHookNoInstanceCallback,
} from "rxdb";
import { UserCollection, UserDocMethods, UserDocType } from "./types";

const preInsert: RxCollectionHookNoInstanceCallback<
  UserDocType,
  UserDocMethods
> = (toInsert) => {
  console.log("preInsert");
  toInsert.id = Math.random().toString();
  toInsert.createTime = new Date().toISOString();
  toInsert.updateTime = new Date().toISOString();
};

const preSave: RxCollectionHookCallback<UserDocType, UserDocMethods> = (
  data,
  doc
) => {
  console.log("preSave");
  data.updateTime = new Date().toISOString();
};

export function userMiddlewares(user: UserCollection) {
  try {
    user.preInsert(preInsert, false);
    user.preSave(preSave, false);
  } catch (e) {
    console.log(e);
  }
}
