import { Post } from "../post/Post";
import { User } from "../user/User";

export type Comment = {
  createdAt: Date;
  id: string;
  post?: Post | null;
  text: string | null;
  updatedAt: Date;
  user?: User | null;
};
