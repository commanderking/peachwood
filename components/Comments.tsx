import { Box, Flex, Image, WrapItem } from "@chakra-ui/react";
import { useState } from "react";

import { Comment } from "data/images";
import { ArrowRightIcon, ArrowLeftIcon } from "@chakra-ui/icons";

const avatarBaseUrl = "/profile/";

type Props = {
  comments: Comment[];
  imageId: string;
};

const iconWidth = "15px";

const Footer = ({ comments, imageId }: Props) => {
  const [currentCommentIndexByImage, setCurrentCommentIndexByImage] = useState<{
    [key: string]: number;
  }>({});

  const currentCommentIndex = currentCommentIndexByImage[imageId] || 0;
  const currentComment = comments[currentCommentIndex];
  const hasNextPhoto = currentCommentIndex + 1 < comments.length;
  const hasPreviousPhoto = currentCommentIndex > 0;

  return (
    <Flex backgroundColor="lightpink" padding={"15px 5px"} borderRadius={10}>
      <Box display="flex" alignItems="center" w={"20px"}>
        {/* Should probably be IconButton, but need to override styling in that case - should figure this out for accessibility */}
        {hasPreviousPhoto && (
          <ArrowLeftIcon
            role="button"
            w={iconWidth}
            onClick={() => {
              setCurrentCommentIndexByImage({
                ...currentCommentIndexByImage,
                [imageId]: currentCommentIndex - 1,
              });
            }}
          />
        )}
      </Box>
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
          src={`${avatarBaseUrl}${currentComment.avatarImage}`}
        />
      </Box>
      <Box ml={3} flex={1} display="flex" alignItems="center" textAlign="left">
        {currentComment.commentEN}
      </Box>

      <Box display="flex" alignItems="center" w={"20px"} textAlign="right">
        {/* Should probably be IconButton, but need to override styling in that case - should figure this out for accessibility */}
        {hasNextPhoto && (
          <ArrowRightIcon
            role="button"
            w={iconWidth}
            onClick={() => {
              setCurrentCommentIndexByImage({
                ...currentCommentIndexByImage,
                [imageId]: currentCommentIndex + 1,
              });
            }}
          />
        )}
      </Box>
    </Flex>
  );
};

export default Footer;
