import { Box, Heading, Text, Image } from "@chakra-ui/react";
import { useState } from "react";
import Footer from "components/Footer";
import Photo from "components/Photo";
import images from "data/images";
import { Scrollama, Step } from "react-scrollama";

const avatarBaseUrl = "/profile/";

const Layout = () => {
  const debug = false;

  const onStepEnter = ({ data }: { data: any }) => {
    setCurrentStepIndex(data);
  };
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  // Steps for images start at 2.
  const stepModifier = 2;

  const currentImage = images[currentStepIndex - stepModifier];
  const canDisplayCommentary = Boolean(currentImage?.commentary?.length);
  const displayIntroCommentary = currentStepIndex === 0;

  return (
    <Box margin="auto" maxWidth={[500, 650]}>
      {debug && (
        <div style={{ position: "sticky", top: 0, border: "1px solid orchid" }}>
          I'm sticky. The current triggered step index is: {currentStepIndex}
        </div>
      )}
      <Box pl={5} pr={5}>
        {canDisplayCommentary && (
          <Box flex={1} position="sticky" top="0">
            <Box position="absolute" width="100%">
              <Footer
                imageSrc={`${avatarBaseUrl}${currentImage.commentary[0].avatarImage}`}
                text={currentImage.commentary[0]?.commentEN}
              />
            </Box>
          </Box>
        )}
        <Scrollama offset={0.16} onStepEnter={onStepEnter}>
          <Step data={0}>
            <Box
              height="100vh"
              display="flex"
              justifyContent="center"
              alignItems="center"
              // Position relative for absolute position of sticky intro below
              position="relative"
            >
              <Box>
                <Heading textAlign="center">
                  Welcome to PeachWood Estate!
                </Heading>
                <Text textAlign="center">
                  Home to Peach and Woody's Digital Content
                </Text>
                {displayIntroCommentary && (
                  <Box position="absolute" bottom="20px">
                    <Footer
                      imageSrc={`${avatarBaseUrl}peach_staring.png`}
                      text={
                        "Hey there! Peach here!! I'll be your host. Scroll down to see more photos of Woody and me!"
                      }
                    />
                  </Box>
                )}
              </Box>
            </Box>
          </Step>
          <Step data={1}>
            <Box height="100px" mt={10}>
              <Heading>2021 Photos</Heading>
            </Box>
          </Step>
          {images.map((image, index) => {
            const matchedIndex = index + stepModifier;
            const isCurrentImage = matchedIndex === currentStepIndex;
            return (
              <Step data={matchedIndex} key={image.src}>
                <Box mb={10}>
                  <Photo
                    image={image}
                    border={
                      isCurrentImage ? "10px solid pink" : "10px solid white"
                    }
                  />
                </Box>
              </Step>
            );
          })}
        </Scrollama>
        <Box height={"50vh"}>
          Additional Information (or at least blank space to allow for last
          photo to be captured!)
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
