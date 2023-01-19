import { Box, Image, Link, Text,Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import { bestSellers, flashSale, freeGift, republicDay, topSellingProducts,topSlidingImage } from "./Constants";
import FirstOneSlindingProducts from "./FirstOneSlindingProducts";
import FlashSaleProduct from "./FlashSaleProduct";
import LiveProduct from "./LiveProducts";
import ProductsCard from "./ProductsCard";
import SecondOneSlindingProducts from "./SecondOneSlindingProducts";


const AddProductLanding = () => {
  return (
    <Box>
      {/* // -------------------------------Poster Slinding Products -----------------------------// */}
      <FirstOneSlindingProducts />
      
      {/* // ------------------------------- Featured Products -----------------------------// */}

      <Box mt="2rem" fontFamily="Aqleema- Regular, sans-serif" width={"90%"} margin={"auto"}>
        <Box
          display="flex"
          justifyContent="space-between"
          px="2rem"
          mb="0.5rem"
        >
          <Text fontWeight={"700"} fontSize={"22px"} marginTop={"10px"}  >
            FEATURED
          </Text>
          {/*<Link href="http://localhost:3000/allProducts" target="_blank">*/}
            <Link
              color={"darkmagenta"}
              textDecor={"none"}
            >
              VIEW ALL
            </Link>
          {/*</Link>*/}
        </Box>
        <ProductsCard something={topSellingProducts} />
      </Box>
       
      {/* ------------------------------- Poster -----------------------------*/}
      <Box  >
        <Image src={"https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1674099518_mamaearth_web_thick-strip.gif"} marginBottom={"40px"} width={"90%"} margin={"auto"}/>
        
        <Image src={"https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1673939041_unmissable-deals_web_10.gif"} marginBottom={"30px"} width={"90%"} margin={"auto"}/>
      </Box>

      {/* ------------------------------- Live Products -----------------------------*/}

      <Box mt="2rem" fontFamily="Aqleema- Regular, sans-serif" width={"90%"}  margin={"auto"}>
      <LiveProduct something={topSlidingImage} />
      </Box>

     {/* // -------------------------------Poster Slinding Products -----------------------------// */}
     <SecondOneSlindingProducts />

      {/* // -------------------------------Poster Slinding Products -----------------------------// */}
      <Box width={"90%"} margin={"auto"}>
        <Grid templateColumns="repeat(2, 1fr)" gap={3}>
          <GridItem>
            <Image src={"https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1674056586_creme-blush3.gif?tr=f-gif"} />
          </GridItem>
          <GridItem>
            <Image src={"https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1673953608_lakme-720x350.jpeg"} />
          </GridItem>
          <GridItem>
            <Image src={"https://media6.ppl-media.com/tr:w-640,ar-20557-9993,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1674109520_pb-gif-celeb_rosehip.gif"} />
          </GridItem>
          <GridItem>
            <Image src={"https://media6.ppl-media.com/tr:w-640,ar-20557-9993,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1673953610_maybelline-720x350.jpeg"} />
          </GridItem>
          <GridItem>
            <Image src={"https://media6.ppl-media.com/tr:w-640,ar-20557-9993,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1674066285_mamaearth-720x350.jpeg"} />
          </GridItem>
          <GridItem>
            <Image src={"https://media6.ppl-media.com/tr:w-640,ar-20557-9993,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1673978889_faces-1.gif"} />
          </GridItem>
          <GridItem>
            <Image src={"https://media6.ppl-media.com/tr:w-640,ar-20557-9993,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1674106514_pb-gif-celeb-7-1.gif"} />
          </GridItem>
          <GridItem>
            <Image src={"https://media6.ppl-media.com/tr:w-640,ar-20557-9993,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1673953601_biotique-720x350.jpeg"} />
          </GridItem>
        </Grid>
      </Box>

      {/* ------------------------------- Flash Sale Products -----------------------------*/}

      <Box mt="2rem" fontFamily="Aqleema- Regular, sans-serif" width={"90%"} margin={"auto"} >
        <Box
          display="flex"
          justifyContent="space-between"
          px="2rem"
          mb="0.5rem"
          marginTop={"30px"}
        >
          <Text fontWeight={"700"} fontSize={"22px"} marginTop={"10px"}  >
            FEATURED
          </Text>
            <Link
              color={"darkmagenta"}
              textDecor={"none"}
            >
              VIEW ALL
            </Link>
        </Box>
        <FlashSaleProduct something={flashSale} />
      </Box>

      {/* // ------------------------------- Best Sellers Products -----------------------------// */}

      <Box mt="2rem" fontFamily="Aqleema- Regular, sans-serif" width={"90%"} margin={"auto"}>
        <Box
          display="flex"
          justifyContent="space-between"
          px="2rem"
          mb="0.5rem"
        >
          <Text fontWeight={"700"} fontSize={"22px"} marginTop={"10px"}>
            BEST SELLERS
          </Text>
            <Link
              color={"darkmagenta"}
              textDecor={"none"}
            >
              VIEW ALL
            </Link>
        </Box>
        <ProductsCard something={bestSellers} />
      </Box>

       
      {/* ------------------------------- Poster -----------------------------*/}
      <Box  >
        <Image src={"https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1674026919_reminder-elite-1280x100.gif"} marginBottom={"40px"} width={"90%"} margin={"auto"}/>
        
        <Box width={"90%"} margin={"auto"}>
        <Grid templateColumns="repeat(2, 1fr)" gap={0}>
          <GridItem>
            <Image src={"https://media6.ppl-media.com/tr:w-640,ar-320-229,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1674046022_slicebannerweb_01-1.gif"} />
          </GridItem>
          <GridItem>
            <Image src={"https://media6.ppl-media.com/tr:w-640,ar-320-229,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1674046021_slicebannerweb_02-1.gif"} />
          </GridItem>
        </Grid>
        </Box>
        <Image src={"https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1673939614_get-free-gifts-web.gif"} marginBottom={"40px"} width={"90%"} margin={"auto"}/>

        <LiveProduct something={freeGift} />

        <Image src={"https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1673939275_republic-day-special-looksapp.gif"} marginBottom={"40px"} width={"90%"} margin={"auto"}/>

        <LiveProduct something={republicDay} />

        <Image src={"https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1673945734_discover-all-product-web.gif"} marginBottom={"40px"} width={"90%"} margin={"auto"}/>

        <Image src={"https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1639028230_alert-strip-web.jpg"} marginBottom={"40px"} width={"90%"} margin={"auto"}/>

        <Image src={"https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1662556480_benefit-icons-strip-web.jpg"} marginBottom={"40px"} width={"90%"} margin={"auto"}/>

        
        
      </Box>
    </Box>  
  );
};

export default AddProductLanding;
