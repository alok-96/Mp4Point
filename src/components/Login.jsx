import React from "react";
import {
  Container,
  VStack,
  Input,
  Heading,
  Button,
  Text,
  Avatar
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Login = () => {
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
          <Heading alignSelf={"center"}>Welcome Back :)</Heading>
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

          <Button variant={"link"} alignSelf={"flex-end"} colorScheme={"teal"}>
            <Link to={"/forgetpassword"}>Forget Password?</Link>
          </Button>
          <Button type={"submit"} colorScheme={"teal"}>
            Log In
          </Button>

          <Text alignSelf={"flex-end"}>
            Don't have an account?
            <Button variant={"link"} colorScheme={"teal"}>
              <Link to={"/signup"}> Register</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default Login;
