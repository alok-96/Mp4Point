import React from "react";
import logo from "../assets/favicon.png";

import {
  AiFillCodepenCircle,
  AiFillFacebook,
  AiFillInstagram,
  AiFillGithub,
  AiFillTwitterCircle,
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
      <VStack alignItems={["center", "center", "start"]} px={"4"} flex={"50%"}>
        <HStack>
          <Image src={logo} w={["40px", "50px"]} />
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
        <AiFillCodepenCircle size={"30"} />
        <AiFillFacebook size={"30"} />
        <AiFillTwitterCircle size={"30"} />
        <AiFillInstagram size={"30"} />
        <AiFillGithub size={"30"} />
      </HStack>
    </Stack>
  );
};

export default Footer;
