import instance from "@/modules/blog/shared/libs/instance";
import { GetPostsRequest } from "./posts.types";

export const requestGetPosts = async (
  pageNumber: number,
  postsPerPage?: number
) => {
  return await instance.get<GetPostsRequest>(
    `posts?_limit=${postsPerPage}&_page=${pageNumber}`
  );
};
