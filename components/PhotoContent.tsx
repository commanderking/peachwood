import { Box, Image, Heading } from "@chakra-ui/react";
import { Scrollama, Step } from "react-scrollama";
import { Image as ImageType } from "data/images";
const photoBaseUrl = "/photos/";

type Props = {
  onStepEnter: any;
  images: ImageType[];
  currentStepIndex: number;
};

const PhotoContent = ({ onStepEnter, images }: Props) => {
  return (
    <Box>
      <Scrollama offset={0.3} onStepEnter={onStepEnter}>
        <Step data={0}>
          <Heading>2021 Photos</Heading>
        </Step>
        {images.map((image, index) => {
          return (
            <Step data={index + 1} key={image.src}>
              <Box mb={40}>
                <Image src={`${photoBaseUrl}${image.src}`} width="100%" />
              </Box>
            </Step>
          );
        })}
      </Scrollama>
    </Box>
  );
};

export default PhotoContent;
