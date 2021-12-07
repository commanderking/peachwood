import { Box, Heading, Text } from "@chakra-ui/react";
import { useState } from "react";
import Comments from "components/Comments";
import Photo from "components/Photo";
import images from "data/images";
import Image from "next/image";
import LanguageRadioButtons from "components/LanguageRadioButtons";

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
          // Position relative for absolute position of sticky intro below
          position="relative"
        >
          <Box alignItem="center">
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
            />
            <Box textAlign="center">
              <LanguageRadioButtons setCurrentLanguage={setCurrentLanguage} />
            </Box>
            <Box position="relative" mt={5}>
              <Comments
                comments={[
                  {
                    commentator: "PEACH",
                    avatarImage: "peach_thinking.png",
                    EN: "Meowllo! Peach here!! I'll be your host. I'd love to share some updates with you! Scroll down to see more photos of Woody and me!",
                    CH: "喵嘍！ Peach 在此！！ 我是這網頁的主持人。 我想跟你分享今年的一些小消息! 想看到更多我跟 Woody 的照片， 請往下滑！",
                  },
                ]}
                currentLanguage={currentLanguage}
              />
            </Box>
          </Box>
        </Box>
        <Box height="100px" mt={10}>
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
        <Box height={"50vh"}>
          <Comments
            comments={[
              {
                commentator: "PEACH",
                avatarImage: "peach_thinking.png",
                EN: "Thanks for taking the time to catch up with us! Special thanks to Uncle Jeffrey for putting this site together for us. If you are seeing this, it means you hold a special place in our family's heart in some way. And so we wish you happy holidays, and a happy and healthy New Year! 🎉",
                CH: "感謝大家來跟我們回顧我們的2021年， 也非常感謝Jeffrey 叔叔為我們建立這網站。收到這卡片的人都是我們心中很重要的家人朋友。 希望大家過節快樂！ 新年快樂！",
              },
              {
                commentator: "PEACH",
                avatarImage: "woody_excited.png",
                EN: "Woof! Nice to meet you, and see you next year! 🎊",
                CH: "汪汪！ 很高興能夠見到你！ 明年見！",
              },
            ]}
            currentLanguage={currentLanguage}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
