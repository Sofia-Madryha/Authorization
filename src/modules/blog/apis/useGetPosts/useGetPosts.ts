import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { requestGetPosts } from "./getPosts";

export const prefetchPosts = async (queryClient: any, page: number) => {
  await queryClient.prefetchQuery({
    queryKey: ["posts", page],
    queryFn: () => requestGetPosts(page)
  });
};

const useGetPosts = (currentPage: number, postsPerPage: number) => {
  const { data, ...rest } = useQuery<any>({
    queryKey: ["posts", currentPage, postsPerPage],
    queryFn: () => requestGetPosts(currentPage, postsPerPage),
    placeholderData: keepPreviousData
  });
  return { data, ...rest };
};

export default useGetPosts;
