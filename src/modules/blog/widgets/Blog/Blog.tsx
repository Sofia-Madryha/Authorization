import { Stack, VStack } from "@chakra-ui/react";
import { useGetPosts } from "../../apis";
import { PostItem } from "../../components";
import { useEffect, useState } from "react";
import { PaginationComponent } from "@/ui";
import { useQueryClient } from "@tanstack/react-query";
import { prefetchPosts } from "../../apis/useGetPosts/useGetPosts";

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;
  const totalItems = 100;

  const { data: posts } = useGetPosts(currentPage, postsPerPage);
  const queryClient = useQueryClient();

  useEffect(() => {
    const nextPage = currentPage + 1;
    prefetchPosts(queryClient, nextPage);
  }, [currentPage]);

  return (
    <VStack spacing={"20px"}>
      {" "}
      <Stack
        flexWrap={"wrap"}
        flexDirection={"row"}
        justifyContent={"space-between"}
        rowGap={"50px"}
      >
        {posts?.map((post: any) => (
          <PostItem key={post.id} post={post}></PostItem>
        ))}
      </Stack>
      <PaginationComponent
        totalItems={totalItems}
        pageSize={postsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </VStack>
  );
};

export default Blog;
