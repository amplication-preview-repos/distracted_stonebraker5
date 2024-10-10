import { CommentUpdateManyWithoutPostsInput } from "./CommentUpdateManyWithoutPostsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PostUpdateInput = {
  comments?: CommentUpdateManyWithoutPostsInput;
  content?: string | null;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
