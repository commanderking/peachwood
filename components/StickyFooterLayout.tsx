import { Box } from "@chakra-ui/react";
import Footer from "components/Footer";
import PhotoContent from "components/PhotoContent";

const StickyFooterLayout = () => {
  return (
    <Box display="flex" flexDirection="column" height="100vh">
      <Box overflow="scroll" flex={5} padding={20}>
        <PhotoContent />
      </Box>
      <Box backgroundColor="yellow" flex={1} padding={20}>
        Peach's and (maybe Woody's) Commentary Here
      </Box>
    </Box>
  );
};

export default StickyFooterLayout;
