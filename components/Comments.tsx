import { Box, Flex, Image, Text, Divider } from "@chakra-ui/react";
import { Comment } from "data/images";
import { Language, languages } from "constants/languages";

const avatarBaseUrl = "/profile/";

type Props = {
  comments: Comment[];
  borderRadius?: any;
  currentLanguage?: Language;
};

const Footer = ({ comments, currentLanguage = languages.EN.value }: Props) => {
  return (
    <Box backgroundColor="lightpink">
      {comments.map((comment, index) => {
        const isLastComment = index + 1 === comments.length;
        return (
          <Box key={`${comment.avatarImage}-${index}`}>
            <Flex p={2} pt={[2, 4]} pb={[2, 4]}>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                minWidth="50px"
              >
                <Image
                  width="60px"
                  height="60px"
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
                <Text fontSize={["0.9em", "1em"]}>
                  {comment[currentLanguage]}
                </Text>
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
