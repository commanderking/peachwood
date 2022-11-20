import { Box, Heading, Text } from "@chakra-ui/react";
import { useState } from "react";
import Comments from "components/Comments";
import Photo from "components/Photo";
import images from "data/images";
import Image from "next/image";
import LanguageRadioButtons from "components/LanguageRadioButtons";
import { landingScreenComments, farewellComments } from "constants/comments";
const Layout = () => {
  const [currentLanguage, setCurrentLanguage] = useState<"EN" | "CH">("EN");

  return (
    <Box margin="auto" maxWidth={[500, 600]}>
      <Box pl={5} pr={5}>
        <Box
          height="100vh"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Box alignItems="center">
            <Heading fontSize="2xl" textAlign="center">
              Welcome to PeachWood Estate!
            </Heading>
            <Text textAlign="center">
              Home to Peach and Woody's Digital Content
            </Text>
            <Image
              src="/photos/peachwood_2021_card.jpeg"
              width={500}
              height={357}
              alt="Drawing of Dog and Cat"
            />
            <Box textAlign="center">
              <LanguageRadioButtons setCurrentLanguage={setCurrentLanguage} />
            </Box>
            <Box position="relative" mt={5}>
              <Comments
                comments={landingScreenComments}
                currentLanguage={currentLanguage}
              />
            </Box>
          </Box>
        </Box>
        <Box mt={10} mb={5}>
          <Heading>2021 Photos</Heading>
        </Box>
        {images.map((image, index) => {
          return (
            <Box mb={10} key={`${image.src}-${index}`}>
              <Box backgroundColor="lightpink" padding={2}>
                <Photo image={image} />
                <Comments
                  comments={image.comments}
                  currentLanguage={currentLanguage}
                />
              </Box>
            </Box>
          );
        })}
        <Box mb={20}>
          <Comments
            comments={farewellComments}
            currentLanguage={currentLanguage}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
