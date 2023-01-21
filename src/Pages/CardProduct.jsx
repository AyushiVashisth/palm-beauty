import React, { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
// import {Link} from 'react-router-dom'
import { ChevronDownIcon } from "@chakra-ui/icons";
import Navbar from "../Components/Navbar";
import FirstOneSlindingProducts from "./HomeComponents/FirstOneSlindingProducts";
import { Scrollbars } from 'react-custom-scrollbars';

function CardProduct() {

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
    isOpen:isOpenProducts,
    onOpen:onOpenProducts,
    onClose:onCloseProducts,
  } = useDisclosure(); 
   const {
     isOpen: isOpenResources,
     onOpen: onOpenResources,
     onClose: onCloseResources,
   } = useDisclosure();  
   const {
     isOpen: isOpenFreeTools,
     onOpen: onOpenFreeTools,
     onClose:onCloseFreeTools,
   } = useDisclosure(); 
   const {
    isOpen: isOpenBenefits,
    onOpen: onOpenBenefits,
    onClose:onCloseBenefits,
  } = useDisclosure(); 
  const {
    isOpen: isOpenFilter,
    onOpen: onOpenFilter,
    onClose:onCloseFilter,
  } = useDisclosure();
  const {
    isOpen: isOpenSpeciality,
    onOpen: onOpenSpeciality,
    onClose:onCloseSpeciality,
  } = useDisclosure(); 
  const {
    isOpen: isOpenSort,
    onOpen: onOpenSort,
    onClose:onCloseSort,
  } = useDisclosure(); 

  
  return (
    <>    
    <Navbar/>
    <br/>
    <FirstOneSlindingProducts/>
    <Box border={"1px solid lighgray"} >
    
      <Flex 
        w={"full"} 
        direction={"row"} 
        justify={"space-around"}
        
      >
        <Box  fontWeight={"500"} pl={10} w={"full"}>
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
                  <MenuItem _hover={{ color: "purple.400" }}>Kajal</MenuItem>
                  <MenuItem _hover={{ color: "purple.400" }}>makeup Kits</MenuItem>
                  <MenuItem _hover={{ color: "purple.400" }}>Lipstick</MenuItem>
                  <MenuItem _hover={{ color: "purple.400" }}>Nail Polish</MenuItem>
                  <MenuItem _hover={{ color: "purple.400" }}>Eyeliner</MenuItem>
                  <MenuItem _hover={{ color: "purple.400" }}>Nail Polish Remover</MenuItem>
                  <MenuItem _hover={{ color: "purple.400" }}>Lip Balms & Treatment</MenuItem>
                  <MenuItem _hover={{ color: "purple.400" }}>Mascara</MenuItem>
                  <MenuItem _hover={{ color: "purple.400" }}>Foundation</MenuItem>
                  <MenuItem _hover={{ color: "purple.400" }}>Compact</MenuItem>
                  <MenuItem _hover={{ color: "purple.400" }}>Sharpener</MenuItem>
                  <MenuItem _hover={{ color: "purple.400" }}>Lip Crayon</MenuItem>
                  <MenuItem _hover={{ color: "purple.400" }}>Highlighters & Illuminators</MenuItem>
                  <MenuItem _hover={{ color: "purple.400" }}>Top and Base Coat</MenuItem>
                  <MenuItem _hover={{ color: "purple.400" }}>Hair Serum</MenuItem>
                  <MenuItem _hover={{ color: "purple.400" }}>Setting Sprays & Fixers</MenuItem>
                  <MenuItem _hover={{ color: "purple.400" }}>Hair Care Kits</MenuItem>
                  <MenuItem _hover={{ color: "purple.400" }}>Serums & Essentials</MenuItem>
                  <MenuItem _hover={{ color: "purple.400" }}>Concealer</MenuItem>
                  <MenuItem _hover={{ color: "purple.400" }}>Lip GLoss</MenuItem>
                  <MenuItem _hover={{ color: "purple.400" }}>Blush</MenuItem>
                  <MenuItem _hover={{ color: "purple.400" }}>Eyeshadow</MenuItem>
                  <MenuItem _hover={{ color: "purple.400" }}>Gifts and Value Sets</MenuItem>
                  <MenuItem _hover={{ color: "purple.400" }}>Primer</MenuItem>
                  <MenuItem _hover={{ color: "purple.400" }}>Eyebrow Enhancer</MenuItem>
                  <MenuItem _hover={{ color: "purple.400" }}>Sponges & Applicators</MenuItem>
                  <MenuItem _hover={{ color: "purple.400" }}>BB & CC cream</MenuItem>
                  <MenuItem _hover={{ color: "purple.400" }}>Skin Care Kits</MenuItem>
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
                <MenuItem _hover={{ color: "purple.400" }}>Moraze</MenuItem>
                <MenuItem _hover={{ color: "purple.400" }}>Aya</MenuItem>
                <MenuItem _hover={{ color: "purple.400" }}>Faces Canada</MenuItem>
                <MenuItem _hover={{ color: "purple.400" }}>Blue Heaven</MenuItem>
                <MenuItem _hover={{ color: "purple.400" }}>Seven seas</MenuItem>
                <MenuItem _hover={{ color: "purple.400" }}>Swiss Beauty</MenuItem>
                <MenuItem _hover={{ color: "purple.400" }}>Sugar</MenuItem>
                <MenuItem _hover={{ color: "purple.400" }}>Stay Quirky</MenuItem>
                <MenuItem _hover={{ color: "purple.400" }}>Fashion Colour</MenuItem>
                <MenuItem _hover={{ color: "purple.400" }}>Colorbar</MenuItem>
                <MenuItem _hover={{ color: "purple.400" }}>Plum</MenuItem>
                <MenuItem _hover={{ color: "purple.400" }}>Me-ON</MenuItem>
                <MenuItem _hover={{ color: "purple.400" }}>L'Oreal Paris</MenuItem>
                <MenuItem _hover={{ color: "purple.400" }}>Inatur</MenuItem>
                <MenuItem _hover={{ color: "purple.400" }}>Bella Voste</MenuItem>
                <MenuItem _hover={{ color: "purple.400" }}>Wet n Wild</MenuItem>
                <MenuItem _hover={{ color: "purple.400" }}>Magic Colour</MenuItem>
                <MenuItem _hover={{ color: "purple.400" }}>Estee Lauder</MenuItem>
                <MenuItem _hover={{ color: "purple.400" }}>Makeup Revolution</MenuItem>
                <MenuItem _hover={{ color: "purple.400" }}>Renee</MenuItem>
                <MenuItem _hover={{ color: "purple.400" }}>Elitty</MenuItem>
                <MenuItem _hover={{ color: "purple.400" }}>Lotus Herbals</MenuItem>
                <MenuItem _hover={{ color: "purple.400" }}>Clinique</MenuItem>
                <MenuItem _hover={{ color: "purple.400" }}>Revlon</MenuItem>
                <MenuItem _hover={{ color: "purple.400" }}>VLCC</MenuItem>
                <MenuItem _hover={{ color: "purple.400" }}>STREER WEAR @</MenuItem>
                <MenuItem _hover={{ color: "purple.400" }}>Coloressence</MenuItem>
                <MenuItem _hover={{ color: "purple.400" }}>Bonjour Paris</MenuItem>
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
                <MenuItem _hover={{ color: "purple.400" }}>Rs. 100 And Below</MenuItem>
                <MenuItem _hover={{ color: "purple.400" }}>Rs 100 - Rs. 200</MenuItem>
                <MenuItem _hover={{ color: "purple.400" }}>Rs 200 - Rs. 500</MenuItem>
                <MenuItem _hover={{ color: "purple.400" }}>Rs 500 - Rs. 1000</MenuItem>
                <MenuItem _hover={{ color: "purple.400" }}>Rs 1000 - Rs. 2000</MenuItem>
                <MenuItem _hover={{ color: "purple.400" }}>Rs 2000 - Rs. 3000</MenuItem>
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
                <MenuItem _hover={{ color: "purple.400" }}>Hydrating</MenuItem>
                <MenuItem _hover={{ color: "purple.400" }}>Moisturizers</MenuItem>
                <MenuItem _hover={{ color: "purple.400" }}>Nourishing</MenuItem>
                <MenuItem _hover={{ color: "purple.400" }}>Volumizing</MenuItem>
                <MenuItem _hover={{ color: "purple.400" }}>Smudgeproof</MenuItem>
                <MenuItem _hover={{ color: "purple.400" }}>Waterproof</MenuItem>
                <MenuItem _hover={{ color: "purple.400" }}>Tranfer Resistant</MenuItem>
                <MenuItem _hover={{ color: "purple.400" }}>Sweat Proof</MenuItem>
                <MenuItem _hover={{ color: "purple.400" }}>Non-Drying</MenuItem>
                <MenuItem _hover={{ color: "purple.400" }}>High Color Payoff</MenuItem>
                <MenuItem _hover={{ color: "purple.400" }}>Consistent Shade</MenuItem>
                <MenuItem _hover={{ color: "purple.400" }}>Easy Layering</MenuItem>
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
                <MenuItem _hover={{ color: "purple.400" }}>Hydrating</MenuItem>
                <MenuItem _hover={{ color: "purple.400" }}>Moisturizers</MenuItem>
                <MenuItem _hover={{ color: "purple.400" }}>Nourishing</MenuItem>
                <MenuItem _hover={{ color: "purple.400" }}>Volumizing</MenuItem>
                <MenuItem _hover={{ color: "purple.400" }}>Smudgeproof</MenuItem>
                <MenuItem _hover={{ color: "purple.400" }}>Waterproof</MenuItem>
                <MenuItem _hover={{ color: "purple.400" }}>Tranfer Resistant</MenuItem>
                <MenuItem _hover={{ color: "purple.400" }}>Sweat Proof</MenuItem>
                <MenuItem _hover={{ color: "purple.400" }}>Non-Drying</MenuItem>
                <MenuItem _hover={{ color: "purple.400" }}>High Color Payoff</MenuItem>
                <MenuItem _hover={{ color: "purple.400" }}>Consistent Shade</MenuItem>
                <MenuItem _hover={{ color: "purple.400" }}>Easy Layering</MenuItem>
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
                <MenuItem _hover={{ color: "purple.400" }}>Hydrating</MenuItem>
                <MenuItem _hover={{ color: "purple.400" }}>Moisturizers</MenuItem>
                <MenuItem _hover={{ color: "purple.400" }}>Nourishing</MenuItem>
                <MenuItem _hover={{ color: "purple.400" }}>Volumizing</MenuItem>
                <MenuItem _hover={{ color: "purple.400" }}>Smudgeproof</MenuItem>
                <MenuItem _hover={{ color: "purple.400" }}>Waterproof</MenuItem>
                <MenuItem _hover={{ color: "purple.400" }}>Tranfer Resistant</MenuItem>
                <MenuItem _hover={{ color: "purple.400" }}>Sweat Proof</MenuItem>
                <MenuItem _hover={{ color: "purple.400" }}>Non-Drying</MenuItem>
                <MenuItem _hover={{ color: "purple.400" }}>High Color Payoff</MenuItem>
                <MenuItem _hover={{ color: "purple.400" }}>Consistent Shade</MenuItem>
                <MenuItem _hover={{ color: "purple.400" }}>Easy Layering</MenuItem>
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
                <MenuList
                  onMouseEnter={onOpenSort}
                  onMouseLeave={onCloseSort}
                >
                <Scrollbars style={{ height: 100 }}>
                <MenuItem _hover={{ color: "purple.400" }}>Reference</MenuItem>
                <MenuItem _hover={{ color: "purple.400" }}>discount</MenuItem>
                <MenuItem _hover={{ color: "purple.400" }}>High Price</MenuItem>
                <MenuItem _hover={{ color: "purple.400" }}>Low Price</MenuItem>
                <MenuItem _hover={{ color: "purple.400" }}>Average Rating</MenuItem>
                </Scrollbars>
                </MenuList>
              </Menu>
          </Flex>
        </Box>
      </Flex>
      </Box>
</>
  );
}

export default CardProduct;