import React, { useState, useEffect, useContext } from "react";
import {
  Box,
  Flex,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItemOption,
  Button,
  useDisclosure,
  Text,
} from "@chakra-ui/react";
// import {Link} from 'react-router-dom'
import { ChevronDownIcon } from "@chakra-ui/icons";
import Navbar from "../Components/Navbar";
import FirstOneSlindingProducts from "./HomeComponents/FirstOneSlindingProducts";
import { Scrollbars } from "react-custom-scrollbars";
import Pagination from "./Pagination";
import { SearchContext } from "../Context/SearchContext";

const categories = [
  { id: 1, category: "Kajal" },
  { id: 2, category: "makeup Kits" },
  { id: 3, category: "Lipstick" },
  { id: 4, category: "Nail Polish" },
  { id: 5, category: "Eyeliner" },
  { id: 6, category: "Nail Polish Remover" },
  { id: 7, category: "Lip Balms & Treatment" },
  { id: 8, category: "Foundation" },
  { id: 9, category: "Compact" },
  { id: 10, category: "Sharpener" },
  { id: 11, category: "Lip Crayon" },
  { id: 12, category: "Highlighters & Illuminators" },
  { id: 13, category: "Top and Base Coat" },
  { id: 14, category: "Hair Serum" },
  { id: 15, category: "Setting Sprays & Fixers" },
  { id: 16, category: "Hair Care Kits" },
  { id: 17, category: "Serums & Essentials" },
  { id: 18, category: "Concealer" },
  { id: 19, category: "Lip GLoss" },
  { id: 20, category: "Blush" },
  { id: 21, category: "Eyeshadow" },
  { id: 22, category: "Gifts and Value Sets" },
  { id: 23, category: "Primer" },
  { id: 24, category: "Eyebrow Enhancer" },
  { id: 25, category: "Sponges & Applicators" },
  { id: 26, category: "BB & CC cream" },
];
const Brands = [
  { id: 1, Brands: "Moraze" },
  { id: 2, Brands: "Aya" },
  { id: 3, Brands: "Faces Canada" },
  { id: 4, Brands: "Blue Heaven" },
  { id: 5, Brands: "Seven seas" },
  { id: 6, Brands: "Swiss Beauty" },
  { id: 7, Brands: "Sugar" },
  { id: 8, Brands: "Stay Quirky" },
  { id: 9, Brands: "Fashion Colour" },
  { id: 10, Brands: "Colorbar" },
  { id: 11, Brands: "Me-ON" },
  { id: 12, Brands: "L'Oreal Paris" },
  { id: 13, Brands: "Inatur" },
  { id: 14, Brands: "Bella Voste" },
  { id: 15, Brands: "Wet n Wild" },
  { id: 16, Brands: "Magic Colour" },
  { id: 17, Brands: "Estee Lauder" },
  { id: 18, Brands: "Makeup Revolution" },
  { id: 19, Brands: "Renee" },
  { id: 20, Brands: "Elitty" },
  { id: 21, Brands: "Lotus Herbals" },
  { id: 22, Brands: "Clinique" },
  { id: 23, Brands: "Revlon" },
  { id: 24, Brands: "VLCC" },
  { id: 25, Brands: "STREER WEAR @" },
  { id: 26, Brands: "Coloressence" },
];
const url = `https://purplle-beauty-api.onrender.com/Allproduct`;
function CardProduct() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { query } = useContext(SearchContext);
  const [priceSorting, setPriceSorting] = useState("asc");
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  const getData = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(res);
      return {
        totalCount: +res.headers.get(`X-Total-Count`),
        data,
      };
    } catch (err) {
      console.log(err);
    }
  };
  const fetchData = async (query, page, priceSorting) => {
    setLoading(true);
    try {
      const res = await getData(
        `${url}?q=${query}&_sort=discountPrice,rating&_order=${priceSorting}&_page=${page}&_limit=16`
      );
      const { totalCount, data } = res;
      setTotalPage(totalCount);
      setData(data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };
  console.log(totalPage, data);
  useEffect(() => {
    setLoading(true);
    const id = setTimeout(() => {
      fetchData(query, page, priceSorting);
    }, 100);
    const cleanUp = () => {
      clearTimeout(id);
    };
    return cleanUp;
  }, [query, page, priceSorting]);

  const handlePage = (x) => {
    setPage(page + x);
  };

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
  const {
    isOpen: isOpenResources,
    onOpen: onOpenResources,
    onClose: onCloseResources,
  } = useDisclosure();
  const {
    isOpen: isOpenFreeTools,
    onOpen: onOpenFreeTools,
    onClose: onCloseFreeTools,
  } = useDisclosure();
  const {
    isOpen: isOpenBenefits,
    onOpen: onOpenBenefits,
    onClose: onCloseBenefits,
  } = useDisclosure();
  const {
    isOpen: isOpenFilter,
    onOpen: onOpenFilter,
    onClose: onCloseFilter,
  } = useDisclosure();
  const {
    isOpen: isOpenSpeciality,
    onOpen: onOpenSpeciality,
    onClose: onCloseSpeciality,
  } = useDisclosure();
  const {
    isOpen: isOpenSort,
    onOpen: onOpenSort,
    onClose: onCloseSort,
  } = useDisclosure();

  useEffect(() => {}, [priceSorting]);

  function handlesort() {
    setData(data.sort((a, b) => a.price - b.price));
    // setPriceSorting(!priceSorting)
  }

  function handlesortdec() {
    setData(data.sort((a, b) => b.price - a.price));
    console.log(data);
    // setPriceSorting(!priceSorting)
  }

  return (
    <>
      <Navbar />
      <br />
      <FirstOneSlindingProducts />
      <Box border={"1px solid lighgray"}>
        <Flex w={"full"} direction={"row"} justify={"space-around"}>
          <Box fontWeight={"500"} pl={10} w={"full"}>
            <Flex
              direction={"row"}
              alignItems={"center"}
              mt={2}
              border={"1px solid gray"}
              width={"86%"}
              margin={"auto"}
              height={"60px"}
              gap={"20px"}
            >
              <Menu isOpen={isOpenProducts}>
                <MenuButton
                  transition="all 0.2s"
                  _hover={{ color: "purple.400" }}
                  fontWeight={"500"}
                  aria-label="Courses"
                  onMouseEnter={onOpenProducts}
                  onMouseLeave={onCloseProducts}
                  borderRight={"1px solid grey"}
                  height={"15px"}
                  p={"20px"}
                >
                  Categories 1 Selected <ChevronDownIcon />
                </MenuButton>

                <MenuList
                  onMouseEnter={onOpenProducts}
                  onMouseLeave={onCloseProducts}
                >
                  <Scrollbars style={{ height: 300 }}>
                    {categories.map((el) => (
                      <MenuItemOption
                        key={el.id}
                        _hover={{ color: "purple.400" }}
                      >
                        {el.category}
                      </MenuItemOption>
                    ))}
                  </Scrollbars>
                </MenuList>
              </Menu>

              <Menu isOpen={isOpenResources}>
                <MenuButton
                  transition="all 0.2s"
                  _hover={{ color: "purple.400" }}
                  fontWeight={"500"}
                  aria-label="Courses"
                  onMouseEnter={onOpenResources}
                  onMouseLeave={onCloseResources}
                  borderRight={"1px solid grey"}
                  height={"15px"}
                  p={"20px"}
                >
                  Brands
                  <ChevronDownIcon />
                </MenuButton>
                <MenuList
                  onMouseEnter={onOpenResources}
                  onMouseLeave={onCloseResources}
                >
                  <Scrollbars style={{ height: 300 }}>
                    {Brands.map((el) => (
                      <MenuItemOption
                        key={el.id}
                        _hover={{ color: "purple.400" }}
                      >
                        {el.Brands}
                      </MenuItemOption>
                    ))}
                  </Scrollbars>
                </MenuList>
              </Menu>
              <Menu isOpen={isOpenFreeTools}>
                <MenuButton
                  transition="all 0.2s"
                  _hover={{ color: "purple.400" }}
                  fontWeight={"500"}
                  aria-label="Courses"
                  onMouseEnter={onOpenFreeTools}
                  onMouseLeave={onCloseFreeTools}
                  borderRight={"1px solid grey"}
                  height={"15px"}
                  p={"20px"}
                >
                  Price Range
                  <ChevronDownIcon />
                </MenuButton>
                <MenuList
                  onMouseEnter={onOpenFreeTools}
                  onMouseLeave={onCloseFreeTools}
                >
                  <Scrollbars style={{ height: 100 }}>
                    <MenuItemOption _hover={{ color: "purple.400" }}>
                      Rs. 100 And Below
                    </MenuItemOption>
                    <MenuItemOption _hover={{ color: "purple.400" }}>
                      Rs 100 - Rs. 200
                    </MenuItemOption>
                    <MenuItemOption _hover={{ color: "purple.400" }}>
                      Rs 200 - Rs. 500
                    </MenuItemOption>
                    <MenuItemOption _hover={{ color: "purple.400" }}>
                      Rs 500 - Rs. 1000
                    </MenuItemOption>
                    <MenuItemOption _hover={{ color: "purple.400" }}>
                      Rs 1000 - Rs. 2000
                    </MenuItemOption>
                    <MenuItemOption _hover={{ color: "purple.400" }}>
                      Rs 2000 - Rs. 3000
                    </MenuItemOption>
                  </Scrollbars>
                </MenuList>
              </Menu>
              <Menu isOpen={isOpenBenefits}>
                <MenuButton
                  transition="all 0.2s"
                  _hover={{ color: "purple.400" }}
                  fontWeight={"500"}
                  aria-label="Courses"
                  onMouseEnter={onOpenBenefits}
                  onMouseLeave={onCloseBenefits}
                  borderRight={"1px solid grey"}
                  height={"15px"}
                  p={"20px"}
                >
                  Benefits
                  <ChevronDownIcon />
                </MenuButton>
                <MenuList
                  onMouseEnter={onOpenBenefits}
                  onMouseLeave={onCloseBenefits}
                >
                  <Scrollbars style={{ height: 100 }}>
                    <MenuItemOption _hover={{ color: "purple.400" }}>
                      Hydrating
                    </MenuItemOption>
                    <MenuItemOption _hover={{ color: "purple.400" }}>
                      Moisturizers
                    </MenuItemOption>
                    <MenuItemOption _hover={{ color: "purple.400" }}>
                      Nourishing
                    </MenuItemOption>
                    <MenuItemOption _hover={{ color: "purple.400" }}>
                      Volumizing
                    </MenuItemOption>
                    <MenuItemOption _hover={{ color: "purple.400" }}>
                      Smudgeproof
                    </MenuItemOption>
                    <MenuItemOption _hover={{ color: "purple.400" }}>
                      Waterproof
                    </MenuItemOption>
                    <MenuItemOption _hover={{ color: "purple.400" }}>
                      Tranfer Resistant
                    </MenuItemOption>
                    <MenuItemOption _hover={{ color: "purple.400" }}>
                      Sweat Proof
                    </MenuItemOption>
                    <MenuItemOption _hover={{ color: "purple.400" }}>
                      Non-Drying
                    </MenuItemOption>
                    <MenuItemOption _hover={{ color: "purple.400" }}>
                      High Color Payoff
                    </MenuItemOption>
                    <MenuItemOption _hover={{ color: "purple.400" }}>
                      Consistent Shade
                    </MenuItemOption>
                    <MenuItemOption _hover={{ color: "purple.400" }}>
                      Easy Layering
                    </MenuItemOption>
                  </Scrollbars>
                </MenuList>
              </Menu>
              <Menu isOpen={isOpenSpeciality}>
                <MenuButton
                  transition="all 0.2s"
                  _hover={{ color: "purple.400" }}
                  fontWeight={"500"}
                  aria-label="Courses"
                  onMouseEnter={onOpenSpeciality}
                  onMouseLeave={onCloseSpeciality}
                  borderRight={"1px solid grey"}
                  height={"15px"}
                  p={"20px"}
                >
                  Speciality
                  <ChevronDownIcon />
                </MenuButton>
                <MenuList
                  onMouseEnter={onOpenSpeciality}
                  onMouseLeave={onCloseSpeciality}
                >
                  <Scrollbars style={{ height: 100 }}>
                    <MenuItemOption _hover={{ color: "purple.400" }}>
                      Hydrating
                    </MenuItemOption>
                    <MenuItemOption _hover={{ color: "purple.400" }}>
                      Moisturizers
                    </MenuItemOption>
                    <MenuItemOption _hover={{ color: "purple.400" }}>
                      Nourishing
                    </MenuItemOption>
                    <MenuItemOption _hover={{ color: "purple.400" }}>
                      Volumizing
                    </MenuItemOption>
                    <MenuItemOption _hover={{ color: "purple.400" }}>
                      Smudgeproof
                    </MenuItemOption>
                    <MenuItemOption _hover={{ color: "purple.400" }}>
                      Waterproof
                    </MenuItemOption>
                    <MenuItemOption _hover={{ color: "purple.400" }}>
                      Tranfer Resistant
                    </MenuItemOption>
                    <MenuItemOption _hover={{ color: "purple.400" }}>
                      Sweat Proof
                    </MenuItemOption>
                    <MenuItemOption _hover={{ color: "purple.400" }}>
                      Non-Drying
                    </MenuItemOption>
                    <MenuItemOption _hover={{ color: "purple.400" }}>
                      High Color Payoff
                    </MenuItemOption>
                    <MenuItemOption _hover={{ color: "purple.400" }}>
                      Consistent Shade
                    </MenuItemOption>
                    <MenuItemOption _hover={{ color: "purple.400" }}>
                      Easy Layering
                    </MenuItemOption>
                  </Scrollbars>
                </MenuList>
              </Menu>
              <Menu isOpen={isOpenFilter}>
                <MenuButton
                  transition="all 0.2s"
                  _hover={{ color: "purple.400" }}
                  fontWeight={"500"}
                  aria-label="Courses"
                  onMouseEnter={onOpenFilter}
                  onMouseLeave={onCloseFilter}
                  borderRight={"1px solid grey"}
                  height={"15px"}
                  p={"20px"}
                >
                  More filter options
                  <ChevronDownIcon />
                </MenuButton>
                <MenuList
                  onMouseEnter={onOpenFilter}
                  onMouseLeave={onCloseFilter}
                >
                  <Scrollbars style={{ height: 100 }}>
                    <MenuItemOption _hover={{ color: "purple.400" }}>
                      Hydrating
                    </MenuItemOption>
                    <MenuItemOption _hover={{ color: "purple.400" }}>
                      Moisturizers
                    </MenuItemOption>
                    <MenuItemOption _hover={{ color: "purple.400" }}>
                      Nourishing
                    </MenuItemOption>
                    <MenuItemOption _hover={{ color: "purple.400" }}>
                      Volumizing
                    </MenuItemOption>
                    <MenuItemOption _hover={{ color: "purple.400" }}>
                      Smudgeproof
                    </MenuItemOption>
                    <MenuItemOption _hover={{ color: "purple.400" }}>
                      Waterproof
                    </MenuItemOption>
                    <MenuItemOption _hover={{ color: "purple.400" }}>
                      Tranfer Resistant
                    </MenuItemOption>
                    <MenuItemOption _hover={{ color: "purple.400" }}>
                      Sweat Proof
                    </MenuItemOption>
                    <MenuItemOption _hover={{ color: "purple.400" }}>
                      Non-Drying
                    </MenuItemOption>
                    <MenuItemOption _hover={{ color: "purple.400" }}>
                      High Color Payoff
                    </MenuItemOption>
                    <MenuItemOption _hover={{ color: "purple.400" }}>
                      Consistent Shade
                    </MenuItemOption>
                    <MenuItemOption _hover={{ color: "purple.400" }}>
                      Easy Layering
                    </MenuItemOption>
                  </Scrollbars>
                </MenuList>
              </Menu>
              <Menu isOpen={isOpenSort}>
                <MenuButton
                  transition="all 0.2s"
                  _hover={{ color: "purple.400" }}
                  fontWeight={"500"}
                  aria-label="Courses"
                  onMouseEnter={onOpenSort}
                  onMouseLeave={onCloseSort}
                  height={"15px"}
                  p={"20px"}
                >
                  More filter options
                  <ChevronDownIcon />
                </MenuButton>
                <MenuList onMouseEnter={onOpenSort} onMouseLeave={onCloseSort}>
                  <Scrollbars style={{ height: 100 }}>
                    <MenuItemOption
                      onClick={handlesortdec}
                      _hover={{
                        color: "purple.400",
                        backgroundColor: "lightcoral",
                      }}
                      value="desc"
                    >
                      High Price
                    </MenuItemOption>
                    <MenuItemOption
                      onClick={handlesort}
                      _hover={{
                        color: "purple.400",
                        backgroundColor: "lightcoral",
                      }}
                      value={"asc"}
                    >
                      Low Price
                    </MenuItemOption>
                    <MenuItemOption _hover={{ color: "purple.400" }}>
                      Average Rating
                    </MenuItemOption>
                    <MenuItemOption _hover={{ color: "purple.400" }}>
                      Reference
                    </MenuItemOption>
                    <MenuItemOption _hover={{ color: "purple.400" }}>
                      discount
                    </MenuItemOption>
                  </Scrollbars>
                </MenuList>
              </Menu>
            </Flex>
          </Box>
        </Flex>
      </Box>

      <Box
        bg="white"
        p="1rem"
        id="main_Client"
        bgPosition={"center"}
        bgRepeat={"no-repeat"}
        border={"0px solid red"}
        maxH={"140vh"}
      >
        <Box
          display={"grid"}
          gridTemplateColumns={"repeat(4,1fr)"}
          gridTemplateRows={"repeat(20,350px)"}
          gap={"20px"}
          width={"90%"}
          margin={"auto"}
          border={"0px solid grey"}
          maxH={"95vh"}
        >
          {data.map((e, i) => (
            <Box
              // h={"100%"}
              p="0.5rem"
              key={i}
              textAlign="left"
              borderRadius="5px"
              ml={"1rem"}
              cursor="pointer"
              marginTop={"0px"}
            >
              <Box position={"relative"}>
                <Image
                  width={"90%"}
                  height={"200px"}
                  textAlign={"center"}
                  justifyContent={"center"}
                  src={e.image}
                />
                <Box
                  className="overlay overlay-bottom"
                  position={"absolute"}
                  transition={"all 0.3s ease"}
                  opacity={0}
                  background-color={"red"}
                  color={"white"}
                  height={0}
                  bottom={0}
                  left={0}
                  _hover={{ height: "23%", opacity: "1" }}
                  width={"100%"}
                >
                  <Box
                    className="text"
                    color={"black"}
                    display={"flex"}
                    background-color={"blue"}
                    margin-left={"1rem"}
                    top={"1rem"}
                    gap={"35px"}
                    position={"absolute"}
                    translate={"translate(-50%, -50%)"}
                  >
                    <Box
                      className="wishlist"
                      padding={"5px 4rem"}
                      background-color={"blue"}
                      color={"black"}
                      border={"0.5px solid grey"}
                      cursor={"pointer"}
                      font-size={"12px"}
                    >
                      Add Card
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box>
                <Text fontSize={"15px"}>{e.name}</Text>
                <Text fontSize={"13px"}>{e.qty}</Text>
                <Text>
                  MRP{" "}
                  <span style={{ textDecoration: "line-through" }}>
                    ₹{e.strikePrice}
                  </span>
                  <span style={{ color: "green", marginLeft: "1rem" }}>
                    {e.discount}
                  </span>
                </Text>
                <Text fontWeight={"600"}>₹ {e.price}</Text>
              </Box>
            </Box>
          ))}
        </Box>
        <Pagination page={page} handlePage={handlePage} totalPage={totalPage} />
      </Box>
    </>
  );
}

export default CardProduct;
