import { Comment } from "../comment/Comment";
import { User } from "../user/User";

export type Post = {
  comments?: Array<Comment>;
  content: string | null;
  createdAt: Date;
  id: string;
  title: string | null;
  updatedAt: Date;
  user?: User | null;
};
