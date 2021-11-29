import { Box, Heading, Text } from "@chakra-ui/react";
import Footer from "components/Footer";
import PhotoContent from "components/PhotoContent";

const StickyFooterLayout = () => {
  // TODO: When viewport sees the photos, Peach will pop up and provide commentary
  const viewingPhotos = false;
  return (
    <Box margin="auto" maxWidth={500} flexDirection="column" height="100vh">
      <Box padding={20}>
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
          <Heading>2021 Photos</Heading>
          <PhotoContent />
        </Box>
      </Box>
      {viewingPhotos && (
        <Box flex={1} flexShrink={0} position="sticky" bottom="20px">
          <Footer />
        </Box>
      )}
    </Box>
  );
};

export default StickyFooterLayout;
