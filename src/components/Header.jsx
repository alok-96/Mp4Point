import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  DrawerHeader,
  DrawerCloseButton,
  Button,
  useDisclosure,
  VStack,
  HStack,
  Image,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { BiMenuAltLeft } from "react-icons/bi";
import logo from "../assets/favicon.png";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        pos={"fixed"}
        top={"4"}
        left={"4"}
        borderRadius={"full"}
        colorScheme={"gray"}
        variant={"solid"}
        zIndex={"overlay"}
        onClick={onOpen}
      >
        <BiMenuAltLeft size={"20"} />
      </Button>
      <Drawer isOpen={isOpen} placement={"left"} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <HStack>
              <Image src={logo} />
              <p>Mp4Point</p>
            </HStack>
          </DrawerHeader>
          <DrawerBody>
            <VStack alignItems={"flex-start"} gap={"5"}>
              <Button onClick={onClose} variant={"unstyled"}>
                <Link to={"/"}>Home</Link>
              </Button>
              <Button onClick={onClose} variant={"unstyled"}>
                <HashLink to={"/#services"}>Services</HashLink>
              </Button>
              <Button onClick={onClose} variant={"unstyled"}>
                <Link to={"/videos"}>Videos</Link>
              </Button>
              <Button onClick={onClose} variant={"unstyled"}>
                <Link to={"/videos/?category=free"}>Free Videos</Link>
              </Button>
              <Button onClick={onClose} variant={"unstyled"}>
                <Link to={"/upload"}>Upload Video</Link>
              </Button>
            </VStack>
            <HStack pos={"absolute"} bottom={"10"}>
              <Button onClick={onClose} colorScheme={"teal"} variant={"solid"}>
                <Link to={"/login"}>Log In</Link>
              </Button>
              <Button
                onClick={onClose}
                colorScheme={"teal"}
                variant={"outline"}
              >
                <Link to={"/signup"}>Sign Up</Link>
              </Button>
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
