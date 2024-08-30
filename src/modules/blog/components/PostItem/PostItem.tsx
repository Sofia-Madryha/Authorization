import { Text, VStack } from "@chakra-ui/react";
import { PostItemProps } from "./PostItem.types";

const PostItem = ({ post }: PostItemProps) => {
  return (
    <VStack
      maxW={"550px"}
      maxH={"500px"}
      bg={"white"}
      padding={"30px"}
      textAlign={"center"}
    >
      <Text textStyle={"h3"}>{post.title}</Text>
      <Text textStyle={"p"} color={"rgba(0,0,0, 0.7)"}>
        {post.body}
      </Text>
    </VStack>
  );
};

export default PostItem;
