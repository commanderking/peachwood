import { Box, Heading, Text } from "@chakra-ui/react";
import { useState } from "react";
import Comments from "components/Comments";
import Photo from "components/Photo";
import images from "data/images";
import { Scrollama, Step } from "react-scrollama";

const Layout = () => {
  const debug = false;

  const onStepEnter = ({ data }: { data: any }) => {
    setCurrentStepIndex(data);
  };
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  // Steps for images start at 2.
  const stepModifier = 2;

  const currentImage = images[currentStepIndex - stepModifier];
  const canDisplayCommentary = Boolean(currentImage?.comments?.length);
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
              <Comments
                comments={currentImage.comments}
                imageId={currentImage.src}
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
                    <Comments
                      comments={[
                        {
                          commentator: "PEACH",
                          avatarImage: "peach_thinking.png",
                          commentEN:
                            "Meowllo! Peach here!! I'll be your host. It's been a good year and I'd love to share some updates with you! Scroll down to see more photos of Woody and me!",
                          commentCH: "",
                        },
                      ]}
                      imageId={"peach_intro"}
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
          <Comments
            comments={[
              {
                commentator: "PEACH",
                avatarImage: "peach_staring.png",
                commentEN:
                  "Thanks for taking the time to catch up with us! Special thanks to Uncle Jeffrey for putting this site together for us. If you are seeing this, it means you hold a special place in our family's heart in some way. And so we wish you happy holidays, and a happy and healthy New Year! 🎉",
                commentCH: "",
              },
            ]}
            imageId="peach_concusion_text"
          />
          <Comments
            comments={[
              {
                commentator: "PEACH",
                avatarImage: "woody_excited.png",
                commentEN: "Woof! Nice to meet you, and see you next year! 🎊",
                commentCH: "",
              },
            ]}
            imageId="peach_concusion_text"
          />
        </Box>
        Additional Information (or at least blank space to allow for last photo
        to be captured!)
      </Box>
    </Box>
  );
};

export default Layout;
