import { UserCollection, UserCollectionMethods } from "./types";

export const userCollectionMethods: UserCollectionMethods = {
  // async countAll(this: UserCollection) {
  //   const allDocs = await this.find().exec();
  //   return allDocs.length;
  // },
  async create(this: UserCollection, user) {
    await this.insert(user as any);
  },
};
