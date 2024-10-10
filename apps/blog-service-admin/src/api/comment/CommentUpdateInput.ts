import { PostWhereUniqueInput } from "../post/PostWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CommentUpdateInput = {
  post?: PostWhereUniqueInput | null;
  text?: string | null;
  user?: UserWhereUniqueInput | null;
};
