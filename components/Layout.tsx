import { Box, Heading, Text } from "@chakra-ui/react";
import { useState } from "react";
import Footer from "components/Footer";
import PhotoContent from "components/PhotoContent";
import images from "data/images";

const Layout = () => {
  const debug = false;

  const onStepEnter = ({ data }: { data: any }) => {
    setCurrentStepIndex(data);
  };
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const currentImage = images[currentStepIndex - 1];
  const canDisplayCommentary = currentImage?.commentary?.length;

  return (
    <Box margin="auto" maxWidth={[500, 650]}>
      {debug && (
        <div style={{ position: "sticky", top: 0, border: "1px solid orchid" }}>
          I'm sticky. The current triggered step index is: {currentStepIndex}
        </div>
      )}
      <Box pl={5} pr={5}>
        <Box
          height="100vh"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Box>
            <Heading textAlign="center">Welcome to PeachWood Estate!</Heading>
            <Text textAlign="center">
              Home to Peach and Woody's Digital Content
            </Text>
          </Box>
        </Box>
        <Box>
          <PhotoContent
            onStepEnter={onStepEnter}
            currentStepIndex={currentStepIndex}
            images={images}
          />
        </Box>
      </Box>
      {canDisplayCommentary && (
        <Box flex={1} position="sticky" bottom="5px" ml="2.5%" width="95%">
          <Footer currentImage={currentImage} />
        </Box>
      )}
    </Box>
  );
};

export default Layout;
