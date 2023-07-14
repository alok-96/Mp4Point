import React from "react";
import {
  Container,
  VStack,
  Input,
  Heading,
  Button,
  Text,
  Avatar,
} from "@chakra-ui/react";

const ForgetPassword = () => {
  return (
    <Container maxW={"container.xl"} h={"100vh"} p={"16"}>
      <form>
        <VStack
          spacing={"8"}
          alignItems={"stretch"}
          w={["full", "96"]}
          m={"auto"}
        >
          <Avatar alignSelf={"center"} boxSize={["16", "32"]} />
          <Heading alignSelf={"center"}>Reset Password</Heading>
          <Text alignSelf={"center"}>
            Enter your Email to reset your password
          </Text>
          <Input
            required
            placeholder={"Email"}
            type={"email"}
            focusBorderColor={"teal"}
          />

          <Button type={"submit"} colorScheme={"teal"}>
            Reset Password
          </Button>
        </VStack>
      </form>
    </Container>
  );
};

export default ForgetPassword;
