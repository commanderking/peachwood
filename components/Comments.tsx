import { Box, Flex, Image, Text, Divider, Link } from "@chakra-ui/react";
import { Comment } from "data/images";
import { Language, languages } from "constants/languages";
import { ReactNode } from "react";

const avatarBaseUrl = "/profile/";

type Props = {
  comments: Comment[];
  borderRadius?: any;
  currentLanguage?: Language;
};

const CommentWithLinks = ({
  comment,
  currentLanguage,
}: {
  comment: Comment;
  currentLanguage: Language;
}) => {
  let text: ReactNode = comment[currentLanguage];

  if (comment.links) {
    const commentText = comment[currentLanguage];
    let linkIndex = 0; // To keep track of the current link in the list

    // Use a regular expression to find placeholders of the form <>...</>
    text = commentText.split(/(<>.*?<\/>)/g).map((segment, index) => {
      const match = segment.match(/^<>(.*?)<\/>$/);

      if (match && linkIndex < comment.links!.length) {
        const link = comment.links![linkIndex++]; // Get the current link and increment the index
        const linkText = match[1]; // Extract the text inside the placeholder

        // Return the anchor tag as a React element
        return (
          <Link key={index} href={link} target="_blank" textDecor="underline">
            {linkText}
          </Link>
        );
      }

      return <span key={index}>{segment}</span>;
    });
  }

  return <Text fontSize={["0.9em", "1em"]}>{text}</Text>;
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
                <CommentWithLinks
                  comment={comment}
                  currentLanguage={currentLanguage}
                />
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
