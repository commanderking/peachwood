import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { useState } from "react";

import { Comment } from "data/images";
import { ArrowRightIcon, ArrowLeftIcon } from "@chakra-ui/icons";

const avatarBaseUrl = "/profile/";

type Props = {
  comments: Comment[];
  borderRadius?: any;
};

const iconWidth = "15px";

const Footer = ({ comments, borderRadius = "" }: Props) => {
  return (
    <Box backgroundColor="lightpink" padding={4} borderRadius={borderRadius}>
      {comments.map((comment, index) => {
        return (
          <Flex
            key={`${comment.avatarImage}-${index}`}
            mb={index + 1 === comments.length ? 0 : 5}
          >
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              minWidth="50px"
            >
              <Image
                width="50px"
                height="50px"
                style={{
                  borderRadius: "50px",
                }}
                src={`${avatarBaseUrl}${comment.avatarImage}`}
              />
            </Box>
            <Box
              ml={3}
              flex={1}
              display="flex"
              alignItems="center"
              textAlign="left"
            >
              <Text>{comment.commentEN}</Text>
            </Box>
          </Flex>
        );
      })}
    </Box>
  );
};

export default Footer;
