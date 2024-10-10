import { SortOrder } from "../../util/SortOrder";

export type CommentOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  postId?: SortOrder;
  text?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
