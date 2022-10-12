import { RxJsonSchema } from "rxdb";
import { UserDocType } from "./types";

export const userSchema: RxJsonSchema<UserDocType> = {
  title: "user schema",
  description: "describes a user",
  type: "object",
  version: 0,

  // re-enable once not use dexie.js engine for the web since it does not support it
  keyCompression: false,

  primaryKey: "id",
  properties: {
    id: {
      type: "string",
      maxLength: 100,
    },
    birthday: {
      type: "string",
      default: null,
    },
    timezone: {
      type: "string",
      default: null,
    },
    createTime: {
      type: "string",
    },
    updateTime: {
      type: "string",
    },
  },
  required: ["id", "createTime", "updateTime"],
};
