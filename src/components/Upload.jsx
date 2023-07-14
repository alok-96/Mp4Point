import React from "react";
import { AiOutlineUpload } from "react-icons/ai";
import { Container, VStack, Stack, Input, Button } from "@chakra-ui/react";

const Upload = () => {
  return (
    <Container maxWidth={"container.xl"} h={"100vh"}>
      <VStack h={"full"} justifyContent={"center"} color={"teal"}>
        <AiOutlineUpload size={"10vmax"} />
        <form>
          <Stack direction={['column', 'row']}>
            <Input type={"file"} required  css={{
                '&::file-selector-button': {
                    border:'none',
                    height:'90%',
                    borderRadius:'5px',
                    cursor:'pointer',
                    paddingInline:'10px',
                    marginTop:'2px'
                }
            }} />
            <Button type="submit" colorScheme={"teal"}>
              Upload
            </Button>
          </Stack>
        </form>
      </VStack>
    </Container>
  );
};

export default Upload;
