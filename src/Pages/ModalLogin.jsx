

import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, useDisclosure, ModalFooter, useToast } from "@chakra-ui/react"
import {
    Box,
    Flex,
    Stack,
    Heading,
    Text,
    Container,
    Input,
    SimpleGrid,
    Image,
    useColorModeValue,
    HStack,
    InputGroup,
    InputLeftAddon,
    Wrap,
    WrapItem
  } from "@chakra-ui/react";
  import {EmailIcon}from "@chakra-ui/icons";
  import { Link } from "react-router-dom";
import ModalSignIn from "./ModalSignUp";
  

export default function ModalLogin() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    
    const toast = useToast()
    const positions = [
      'top'
    ]
  
    return (
      <>
        <Button  
        w={"full"}
        fontFamily={"heading"}
        mt={8}
        mx={"center"}
        justifyContent={"center"}
        alignItems={"center"}
        bgGradient="linear(to-r, red.400,blue.400)"
        color={"white"}
        fontSize={"xl"}
        _hover={{
          bgGradient: "linear(to-r, red.400,blue.400)",
          boxShadow: "xl",
        }} 
        onClick={onOpen}
        >Login</Button>
  
        <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
          <Stack
          rounded={"xl"}
          p={{ base: 4, sm: 6, md: 8 }}
          spacing={{ base: 8 }}
          maxW={{ lg: "lg" }}
        >
          <Stack spacing={4}>
            <Heading
              textAlign={"center"}
              color={"gray.800"}
              lineHeight={1.1}
              fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
            >
              Login{" "}
              <Text as={"span"} bgColor="lightcoral" bgClip="text">
                /
              </Text>{" "}
              SignUp
            </Heading>
            <Text color={"gray.500"} fontSize={{ base: "sm", sm: "md" }}>
              for Latest trends, exciting offers and everything to Be-Cool!
            </Text>
          </Stack>
          <Box as={"form"} mt={10}>
            <Stack spacing={4}>
              <InputGroup
                bg={"gray.100"}
                border={0}
                borderRadius={7}
                fontSize={"xl"}
                color={"gray.500"}
                _placeholder={{
                  color: "gray.500",
                }}
              >
                <InputLeftAddon border={0} fontSize={"xl"} children="+91" />
                <Input
                  type="number"
                  border={0}
                  fontSize={"xl"}
                  placeholder="Enter Phone Number"
                />
              </InputGroup>
              <Wrap w={"100%"}>
              {positions.map((position, i) => (
                <WrapItem key={i} w={"100%"} >
                  <Button
                  w={"90%"}
                  fontFamily={"heading"}
                  mt={8}
                  mx={"center"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  bgGradient="linear(to-r, red.400,blue.400)"
                  color={"white"}
                  fontSize={"xl"}
                  _hover={{
                    bgGradient: "linear(to-r, red.400,blue.400)"
                  }} 
                    onClick={() =>
                      toast({
                        title: `Login Successful`,
                        position: position,
                        isClosable: true,
                      })
                    }
                  >
                   Login
                  </Button>
                </WrapItem>
              ))}
            </Wrap>
              <Flex
                align={"center"}
                _before={{
                  borderRadius: 5,
                  content: '""',
                  borderBottom: "3px solid",
                  borderColor: useColorModeValue("lightcoral"),
                  flexGrow: 1,
                  mr: 8,
                  my: 10,
                }}
                _after={{
                  borderRadius: 5,
                  content: '""',
                  borderBottom: "3px solid",
                  borderColor: useColorModeValue("lightcoral"),
                  flexGrow: 1,
                  my: 10,
                  ml: 8,
                }}
              >
                <Heading size={"md"} color={"gray"}>
                  OR
                </Heading>
              </Flex>
              <Button

                  fontSize={"xl"}
                  leftIcon={<EmailIcon />} 
                  w={"full"}
                  color={"gray.500"}
                  colorScheme="gray"
                >
                    
                  CONTINUE    TO    SIGN-UP
                </Button>
              <HStack>
                <Button
                  fontSize={"xl"}
                  w={"full"}
                  color={"gray.500"}
                  colorScheme="gray"
                  leftIcon={
                    <Image
                      w={4}
                      src="https://images.bewakoof.com/web/group-3-2x-1558356035.png"
                      alt="google icon"
                    ></Image>
                  }
                >
                  Google
                </Button>
                <Button
                  fontSize={"xl"}
                  w={"full"}
                  color={"gray.500"}
                  colorScheme="gray"
                  leftIcon={
                    <Image
                      w={4}
                      src="https://images.bewakoof.com/web/bi-facebook2x-1620886445.png"
                      alt="google icon"
                    ></Image>
                  }
                >
                  Facebook
                </Button>
              </HStack>
            </Stack>
          </Box>
          form
        </Stack>
            <ModalCloseButton />
          </ModalContent>
        </Modal>
      </>
    )
  }