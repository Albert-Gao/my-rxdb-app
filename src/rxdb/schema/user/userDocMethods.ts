import { UserDocMethods, UserDocument } from "./types";

export const userDocMethods: UserDocMethods = {
  scream(this: UserDocument, what: string) {
    return `${this.id} screams: ${what.toUpperCase()}`;
  },
};
