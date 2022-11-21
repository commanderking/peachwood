import { getImagesForYear, getIds } from "data/images";
import { GetStaticPaths, GetStaticProps } from "next";

import { Box, Heading, Text } from "@chakra-ui/react";
import { useState } from "react";
import Comments from "components/Comments";
import Photo from "components/Photo";
import Image from "next/image";
import LanguageRadioButtons from "components/LanguageRadioButtons";
import { YearlyData } from "data/images";

const YearlyImages = ({ yearlyData }: { yearlyData: YearlyData }) => {
  const [currentLanguage, setCurrentLanguage] = useState<"EN" | "CH">("EN");

  const { introComments, farewellComments, images, heading, headlinePhoto } =
    yearlyData;

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
              src={headlinePhoto}
              width={500}
              height={357}
              alt="Drawing of Dog and Cat"
            />
            <Box textAlign="center">
              <LanguageRadioButtons setCurrentLanguage={setCurrentLanguage} />
            </Box>
            {introComments && (
              <Box position="relative" mt={5}>
                <Comments
                  comments={introComments}
                  currentLanguage={currentLanguage}
                />
              </Box>
            )}
          </Box>
        </Box>
        <Box mt={10} mb={5}>
          <Heading>{heading}</Heading>
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
        {farewellComments && (
          <Box mb={20}>
            <Comments
              comments={farewellComments}
              currentLanguage={currentLanguage}
            />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export async function getStaticPaths() {
  const paths = getIds();

  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const yearlyData = getImagesForYear(params?.id as string);
  return {
    props: {
      yearlyData,
    },
  };
};

export default YearlyImages;
