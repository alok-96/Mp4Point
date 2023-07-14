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
import { Link } from "react-router-dom";

const Signup = () => {
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
          <Heading alignSelf={"center"}>Create Account</Heading>
          <Input
            required
            placeholder={"Name"}
            type={"text"}
            focusBorderColor={"teal"}
          />
          <Input
            required
            placeholder={"Email"}
            type={"email"}
            focusBorderColor={"teal"}
          />
          <Input
            required
            placeholder={"Password"}
            type={"password"}
            focusBorderColor={"teal"}
          />

          <Button type={"submit"} colorScheme={"teal"}>
            Sign Up
          </Button>

          <Text alignSelf={"flex-end"}>
            Already have an account?
            <Button variant={"link"} colorScheme={"teal"}>
              <Link to={"/login"}> Log In </Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default Signup;
