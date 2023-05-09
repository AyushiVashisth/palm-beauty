import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faSmileBeam } from "@fortawesome/free-regular-svg-icons";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useDisclosure,
  Image,
  VStack,
  Grid,
  GridItem,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  InputGroup,
  InputLeftElement,
  Input,
} from "@chakra-ui/react";
import img from "../Images/palm.png";

import {
  HamburgerIcon,
  CloseIcon,
  Search2Icon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import React, { useContext, useEffect, useState } from "react";
import ModalSignUp from "../Pages/ModalSignUp";
import { SearchContext } from "../Context/SearchContext";
import ModalLogin from "../Pages/ModalLogin";

const initial = { search: "" };
export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  const [navColor, setnavColor] = useState("transparent");
  const listenScrollEvent = () => {
    window.scrollY > 15 ? setnavColor("#FFFFFF") : setnavColor("transparent");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  const {
    isOpen: isOpenProducts,
    onOpen: onOpenProducts,
    onClose: onCloseProducts,
  } = useDisclosure();

  const [input, setInput] = useState(initial);
  const { inputQuery } = useContext(SearchContext);

  const { value } = input.search;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
    inputQuery(input.search);
  };
  return (
    <Box w={"100%"} position={"fixed"} top={0} zIndex={1000} bg={"white"}>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"40px"}
        py={{ base: 2 }}
        px={{ base: 3 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        justify={"normal"}
        align={"center"}
        fontFamily="Aqleema- Regular, sans-serif"
        fontSize={"15px"}
        lineHeight={"20px"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex
          flex={{ base: "-10%" }}
          justify={{ base: "center", md: "left" }}
          ml={20}
          size={"sm"}
          border="0px solid black"
          spacing={2}
        >
          <Link href="/">
            <Image
              src={img}
              alt="asdfas"
              w="130px"
              h={"40px"}
              _hover={{
                cursor: "pointer",
              }}
            />
          </Link>
          <Flex display={{ base: "left", md: "flex" }} mt="5px">
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1 }}
          justify={"center"}
          direction={"row"}
          spacing={4}
          fontSize={"30px"}
        >
          <InputGroup w="35%" variant="filled" size={"md"} color={"gray.600"}>
            <Link href="/search">
              <InputLeftElement
                pl={5}
                pointerEvents="change"
                children={<Search2Icon color="gray.600" />}
              />
            </Link>
            <Input
              ml={2}
              px={9}
              type="text"
              name="search"
              value={value}
              onChange={handleChange}
              focusBorderColor="lightcoral"
              placeholder="Search here"
              color={"gray.600"}
              fontWeight={400}
            />
          </InputGroup>

          <FontAwesomeIcon icon={faSmileBeam} />
          <Box>
            <Menu isOpen={isOpenProducts}>
              <MenuButton
                transition="all 0.2s"
                _hover={{ color: "purple.400" }}
                fontWeight={"500"}
                aria-label="Courses"
                onMouseEnter={onOpenProducts}
                onMouseLeave={onCloseProducts}
              >
                <FontAwesomeIcon icon={faHeart} />
              </MenuButton>
              <MenuList
                direction={"row"}
                alignItems={"center"}
                marginLeft={"90px"}
                width={"30%"}
                fontSize={"16px"}
                onMouseEnter={onOpenProducts}
                onMouseLeave={onCloseProducts}
              >
                <ModalLogin />
                <MenuItem marginBottom={"10px"}>
                  New Customer?
                  <Link color={"red"} to="">
                    <ModalSignUp />
                  </Link>
                </MenuItem>
                <hr />
                <MenuItem _hover={{ color: "purple" }} marginTop={"10px"}>
                  Your Orders
                </MenuItem>
                <MenuItem _hover={{ color: "purple" }}>Your Account</MenuItem>
                <MenuItem _hover={{ color: "purple" }}>
                  Elite Mambership
                </MenuItem>
                <MenuItem _hover={{ color: "purple" }}>
                  Your Beauty Profile
                </MenuItem>
                <MenuItem _hover={{ color: "purple" }}>Your Wishlist</MenuItem>
                <MenuItem _hover={{ color: "purple" }}>Purplle Credit</MenuItem>
                <hr />
                <MenuItem _hover={{ color: "purple" }}>
                  Become a Seller?
                </MenuItem>
                <MenuItem>
                  <Link color={"red"}>Register Now</Link>
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
          <HamburgerIcon />
        </Stack>
      </Flex>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} ml={10} spacing={2}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={1}
                m={4}
                href={navItem.href}
                fontWeight={"700"}
                color={linkColor}
                _hover={{
                  color: "purple",
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={3}
                rounded={"xl"}
                minW={"300%"}
                fontSize={"14px"}
              >
                <Grid templateColumns="repeat(4, 1fr)" gap={3}>
                  {navItem.children.map((child) => (
                    <DesktopSubNav
                      _hover={{ color: "purple" }}
                      fontSize={"14px"}
                      key={child.label}
                      {...child}
                    />
                  ))}
                </Grid>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, subLabel }) => {
  return (
    <>
      <VStack>
        <GridItem>
          <Text transition={"all .3s ease"} fontWeight={500} p={4}>
            {label === "ELITE OFFERS" ? (
              <Link href="/offer">label</Link>
            ) : (
              label
            )}
          </Text>
          {subLabel.map((el) => (
            <Text fontSize={"sm"} key={el.id} m={3}>
              <Link rounded={"md"} _hover={{ color: "purple" }}>
                {el.key}
              </Link>
            </Text>
          ))}
        </GridItem>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"space-between"}
          align={"center"}
          flex={1 / 2}
        >
          <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </VStack>
    </>
  );
};

const NAV_ITEMS = [
  {
    label: "SHOP CATOGORIES",
    children: [
      {
        label: "FACE MAKEUP",
        subLabel: [
          { id: 1, key: "Primer" },
          { id: 2, key: "Conealer" },
          { id: 3, key: "BB & CC Creams" },
          { id: 4, key: "Foundation" },
          { id: 5, key: "Compact" },
          { id: 6, key: "Loose Powder" },
          { id: 7, key: "Blush" },
          { id: 8, key: "Highlighters & Illuminators" },
          { id: 9, key: "Bronzer" },
          { id: 10, key: "Contour" },
          { id: 11, key: "Setting Sprays & Fixers" },
          { id: 12, key: "Sindoor" },
          { id: 13, key: "Makeup Remover" },
        ],
        href: "#",
      },
      {
        label: "EYE MAKEUP",
        subLabel: [
          { id: 1, key: "Eyeliner" },
          { id: 2, key: "Under eye Concealers" },
          { id: 3, key: "Eyeshadow" },
          { id: 4, key: "Kajal" },
          { id: 5, key: "Mascara" },
          { id: 6, key: "Briefs" },
          { id: 7, key: "Trunks" },
          { id: 8, key: "Hipsters Trunks" },
          { id: 9, key: "Matte Nail Polish" },
          { id: 10, key: "Top And Base Coat" },
          { id: 11, key: "Nail Polish Remover" },
          { id: 12, key: "Manicure & Pedicure Kits" },
          { id: 13, key: "Gel Nail Polish" },
        ],
        href: "#",
      },
      {
        label: "BRUSHES & TOOLS",
        subLabel: [
          { id: 1, key: "Face Brushes" },
          { id: 2, key: "Eye Brushes" },
          { id: 3, key: "Lip Brushes" },
          { id: 4, key: "Bruush Sets" },
          { id: 5, key: "Sponges & Applicators" },
          { id: 6, key: "Tweezers" },
          { id: 7, key: "Eyelash Curlers" },
          { id: 8, key: "Mirrors" },
          { id: 9, key: "Makeup Brush Cleaner" },
          { id: 10, key: "Sharpener" },
        ],
        href: "#",
      },
      {
        label: "LIP MAKEUP",
        subLabel: [
          { id: 1, key: "Lipstick" },
          { id: 2, key: "Liquid Lipstick" },
          { id: 3, key: "Lip Crayon" },
          { id: 4, key: "Lip GLoss" },
          { id: 5, key: "Lip Stains & Tints" },
          { id: 6, key: "Lip Balms & Treatments" },
        ],
        href: "#",
      },
    ],
  },
  {
    label: "BRANDS",
    children: [],
  },

  {
    label: "OFFERS",
    children: [],
  },

  {
    label: "NEW",
    children: [],
  },

  {
    label: "SPLURGE",
    children: [],
  },

  {
    label: "MAGAXINE",
    children: [],
  },

  {
    label: "ELITE OFFERS",
    children: [],
    href: "/offer",
  },
];
