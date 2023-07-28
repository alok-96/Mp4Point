import React from "react";
import logo from "../assets/favicon.png";

import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillLinkedin
} from "react-icons/ai";
import { HStack, Stack, VStack, Image, Text, Heading } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Stack
      direction={["column", "column", "row"]}
      color={"#222222"}
      bgColor={"#c8c8c8"}
      paddingBottom={"1"}
    >
      <VStack alignItems={["center", "center", "start"]} p={"4"} flex={"50%"}>
        <HStack>
          <Image src={logo} w={"30px"} />
          <Heading fontSize={["md", "xl"]} color={""}>
            Mp4Point
          </Heading>
        </HStack>
        <Text>Copyright &copy; 2023 , All Rights Reserved.</Text>
      </VStack>
      <HStack
        px={"4"}
        flex={"50%"}
        justifyContent={["center", "center", "flex-end"]}
        gap={"30px"}
      >
        <a
          href="https://www.linkedin.com/in/alok-dwivedi-4347801b8/"
          target="blank"
          rel="noopener noreferrer"
        >
          <AiFillLinkedin size={"30"} color={"gray"} />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100070380284005"
          target="blank"
          rel="noopener noreferrer"
        >
          <AiFillFacebook size={"30"} color={"gray"} />
        </a>
        <a
          href="https://twitter.com/alokdwivedi99"
          target="blank"
          rel="noopener noreferrer"
        >
          <AiFillTwitterCircle size={"30"} color={"gray"} />
        </a>
        <a
          href="https://www.instagram.com/_its_alok_07_/"
          target="blank"
          rel="noopener noreferrer"
        >
          <AiFillInstagram size={"30"} color={"gray"} />
        </a>
        <a
          href="https://github.com/alok-96"
          target="blank"
          rel="noopener noreferrer"
        >
          <AiFillGithub
            size={"30"}
            color={"gray"}
          />
        </a>
      </HStack>
    </Stack>
  );
};

export default Footer;
