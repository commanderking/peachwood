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

  const currentImage = images[currentStepIndex - 1];
  const canDisplayCommentary = Boolean(currentImage?.commentary?.length);

  return (
    <Box margin="auto" maxWidth={[500, 650]}>
      {debug && (
        <div style={{ position: "sticky", top: 0, border: "1px solid orchid" }}>
          I'm sticky. The current triggered step index is: {currentStepIndex}
        </div>
      )}
      <Box pl={5} pr={5}>
        <Scrollama offset={0.3} onStepEnter={onStepEnter}>
          <Step data={0}>
            <Box
              height="100vh"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Box>
                <Heading textAlign="center">
                  Welcome to PeachWood Estate!
                </Heading>
                <Text textAlign="center">
                  Home to Peach and Woody's Digital Content
                </Text>
              </Box>
            </Box>
          </Step>
          {images.map((image, index) => {
            return (
              <Step data={index + 1} key={image.src}>
                <Box mb={10}>
                  <Photo image={image} />
                </Box>
              </Step>
            );
          })}
        </Scrollama>
      </Box>

      {
        <Box flex={1} position="sticky" bottom="5px" ml="2.5%" width="95%">
          <Footer
            imageSrc={
              canDisplayCommentary
                ? `${avatarBaseUrl}${currentImage.commentary[0].avatarImage}`
                : `${avatarBaseUrl}peach_staring.png`
            }
            text={
              canDisplayCommentary
                ? currentImage.commentary[0]?.commentEN
                : "Hey there! Peach here!! I'll be your host. Scroll down to see more photos of Woody and me!"
            }
          />
        </Box>
      }
    </Box>
  );
};

export default Layout;
