import React, { useState } from "react";
import { Stack, VStack, Heading, Text, Button } from "@chakra-ui/react";
import video1 from "../videos/video1.mp4";
import video2 from "../videos/video2.mp4";
import video3 from "../videos/video3.mp4";
import video4 from "../videos/video4.mp4";
import video5 from "../videos/video5.mp4";
import video6 from "../videos/video6.mp4";
import video7 from "../videos/video7.mp4";
import video8 from "../videos/video8.mp4";
import video9 from "../videos/video9.mp4";
import video10 from "../videos/video10.mp4";

const Videos = () => {
  const videosList = [
    video1,
    video2,
    video3,
    video4,
    video5,
    video6,
    video7,
    video8,
    video9,
    video10,
  ];
  const [VideoSrc, SetVideoSrc] = useState(videosList[0]);
  return (
    <Stack direction={["column", "row"]} h={"100vh"} p={"4"}>
      <VStack w={"full"}>
        <video
          controls
          autoPlay
          controlsList="nodownload"
          style={{
            width: "100%",
            borderRadius: "20px",
          }}
          src={VideoSrc}
        ></video>
        <VStack overflowY={"auto"}>
          <Heading p={"4"}>Sample Video </Heading>
          <Text textAlign={['center', 'start']}>
            The awe-inspiring wonders of technology as this captivating
            video showcases groundbreaking advancements in AI, VR, autonomous
            vehicles, and biotechnology, revolutionizing industries and
            propelling us into a future of endless possibilities.
          </Text>
        </VStack>
      </VStack>
      <VStack w={["full", "xl"]} overflowY={"auto"}>
        {videosList.map((item, index) => (
          <Button
            variant={"outline"}
            marginX={"8"}
            marginY={"2"}
            alignSelf={'stretch'}
            paddingY={'4'}
            onClick={() => SetVideoSrc(item)}
          >
            Video {index + 1}
          </Button>
        ))}
      </VStack>
    </Stack>
  );
};

export default Videos;
