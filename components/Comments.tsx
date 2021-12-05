import { Box, Flex, Image, Text, Divider } from "@chakra-ui/react";
import { useState } from "react";

import { Comment } from "data/images";

const avatarBaseUrl = "/profile/";

type Props = {
  comments: Comment[];
  borderRadius?: any;
};

const iconWidth = "15px";

const Footer = ({ comments, borderRadius = "" }: Props) => {
  return (
    <Box backgroundColor="lightpink">
      {comments.map((comment, index) => {
        const isLastComment = index + 1 === comments.length;
        return (
          <Box key={`${comment.avatarImage}-${index}`}>
            <Flex p={2}>
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
                p={3}
                flex={1}
                display="flex"
                alignItems="center"
                textAlign="left"
              >
                <Text fontSize={["0.9em", "1em"]}>{comment.commentEN}</Text>
              </Box>
            </Flex>
            {!isLastComment && <Divider />}
          </Box>
        );
      })}
    </Box>
  );
};

export default Footer;
