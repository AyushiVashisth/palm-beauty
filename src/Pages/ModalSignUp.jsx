import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  ModalFooter,
} from "@chakra-ui/react";
import {
  Box,
  Stack,
  Heading,
  Text,
  Input,
  HStack,
  InputGroup,
} from "@chakra-ui/react";

import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

import { FormControl, FormLabel, InputRightElement } from "@chakra-ui/react";
import { useState } from "react";
import ModalLogin from "./ModalLogin";

export default function ModalSignIn() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [showPassword, setShowPassword] = useState(false);

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
        }}
        onClick={onOpen}
      >
        SignIn
      </Button>

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
                SignUp
              </Heading>
              <Text
                textAlign={"center"}
                color={"gray.500"}
                fontSize={{ base: "sm", sm: "md" }}
              >
                Hi new buddy, SignUp here to make you cool !
              </Text>
            </Stack>

            <Box color={"gray.800"} as={"form"} mt={10}>
              <Stack spacing={4}>
                <Box rounded={"lg"} color={"gray.700"} p={8}>
                  <Stack spacing={4}>
                    <HStack>
                      <Box>
                        <FormControl id="firstName" isRequired>
                          <FormLabel color={"gray.500"} fontSize={"lg"}>
                            First Name
                          </FormLabel>
                          <Input
                            focusBorderColor="lightcoral"
                            bg={"gray.100"}
                            type="text"
                          />
                        </FormControl>
                      </Box>
                      <Box>
                        <FormControl id="lastName">
                          <FormLabel color={"gray.500"} fontSize={"lg"}>
                            Last Name
                          </FormLabel>
                          <Input
                            focusBorderColor="lightcoral"
                            bg={"gray.100"}
                            type="text"
                          />
                        </FormControl>
                      </Box>
                    </HStack>
                    <FormControl id="email" isRequired>
                      <FormLabel color={"gray.500"} fontSize={"lg"}>
                        Email address
                      </FormLabel>
                      <Input
                        focusBorderColor="lightcoral"
                        bg={"gray.100"}
                        type="email"
                      />
                    </FormControl>
                    <FormControl id="password" isRequired>
                      <FormLabel color={"gray.500"} fontSize={"lg"}>
                        Password
                      </FormLabel>
                      <InputGroup>
                        <Input
                          focusBorderColor="lightcoral"
                          bg={"gray.100"}
                          type={showPassword ? "text" : "password"}
                        />
                        <InputRightElement h={"full"}>
                          <Button
                            variant={"ghost"}
                            onClick={() =>
                              setShowPassword((showPassword) => !showPassword)
                            }
                          >
                            {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                          </Button>
                        </InputRightElement>
                      </InputGroup>
                    </FormControl>
                    <Stack spacing={10} pt={2}>
                      <ModalLogin />
                    </Stack>
                    <HStack
                      justifyContent={"center"}
                      alignItems={"center"}
                      fontSize={"lg"}
                    >
                      <Text align={"center"}>Already a user?</Text>
                      <Text position={"relative"} bottom={"15px"}>
                        <ModalLogin />
                      </Text>
                    </HStack>
                  </Stack>
                </Box>
              </Stack>
            </Box>
          </Stack>
          <ModalCloseButton />
        </ModalContent>
      </Modal>
    </>
  );
}
