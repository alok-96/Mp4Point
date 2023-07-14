import { Box } from "@chakra-ui/react";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Image, Heading, Container, Stack, Text } from "@chakra-ui/react";
import img1 from "../assets/asset1.jpg";
import img2 from "../assets/asset2.jpg";
import img3 from "../assets/asset3.jpg";
import img4 from "../assets/asset4.jpg";
import img5 from "../assets/asset5.jpg";
import img6 from "../assets/asset6.png";

const HeadingStyles = {
  pos: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)",
  textTransform: "uppercase",
  p: ["0", "2", "4"],
  size: ["md", "xl", "4xl"],
};

const Home = () => {
  return (
    <div>
      <MyCarousel />
      <Container minH={"80vh"} maxW={"container.xl"} py={"5"} id="services">
        <Heading m={"auto"} py={"2"} textAlign={"center"}>
          Services
        </Heading>
        <Stack direction={["column", "column", "row"]} alignItems={"center"}>
          <Image src={img6} h={["40", "500"]}></Image>
          <Text
            px={["4", "16"]}
            textAlign={"center"}
            letterSpacing={2}
            fontSize={"18"}
          >
            Our video sharing service provides a dynamic platform for users to
            effortlessly upload, discover, and share their videos with the
            world. With our intuitive interface, uploading your videos is a
            breeze, allowing you to showcase your creativity, knowledge, or
            memorable moments in a matter of clicks. We prioritize high-quality
            video playback, ensuring that your content looks stunning on any
            device, from desktops to smartphones. Our robust video management
            system allows you to organize and categorize your videos, making it
            easy for viewers to find and enjoy your content. Join our video
            sharing community today and unlock the potential to connect,
            inspire, and entertain people worldwide.
          </Text>
        </Stack>
      </Container>
    </div>
  );
};

const MyCarousel = () => (
  <Carousel
    autoPlay
    infiniteLoop
    interval={2000}
    showStatus={false}
    showArrows={false}
    showThumbs={false}
  >
    <Box w={"full"} h={['40vh', '50vh', '80vh', '90vh', '100vh']} >
      <Image src={img1} />
      <Heading bgColor={"blackAlpha.600"} color={"white"} {...HeadingStyles}>
        Future is gaming
      </Heading>
    </Box>
    <Box w={"full"} h={['40vh', '50vh', '80vh', '90vh', '100vh']} >
      <Image src={img2} />
      <Heading bgColor={"whiteAlpha.500"} color={"black"} {...HeadingStyles}>
        Unstoppable Moves
      </Heading>
    </Box>
    <Box w={"full"} h={['40vh', '50vh', '80vh', '90vh', '100vh']} >
      <Image src={img3} />
      <Heading bgColor={"whiteAlpha.600"} color={"black"} {...HeadingStyles}>
        Focus And Win
      </Heading>
    </Box>
    <Box w={"full"} h={['40vh', '50vh', '80vh', '90vh', '100vh']} >
      <Image src={img4} />
      <Heading bgColor={"blackAlpha.600"} color={"white"} {...HeadingStyles}>
        Happiness is Homemade
      </Heading>
    </Box>
    <Box w={"full"} h={['40vh', '50vh', '80vh', '90vh', '100vh']} >
      <Image src={img5} />
      <Heading bgColor={"whiteAlpha.500"} color={"black"} {...HeadingStyles}>
        Tech For Future
      </Heading>
    </Box>
  </Carousel>
);

export default Home;
