import { Box, Image, Link, Text,Grid, GridItem, Flex } from "@chakra-ui/react";
import React from "react";
import { bestPriceOnTheInternet, bestSellers, flashSale, freeGift, republicDay, topSellingProducts,topSlidingImage } from "./Constants";
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

       
      {/* ------------------------------- Reminder -----------------------------*/}
      <Box  >

        <Image src={"https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1674026919_reminder-elite-1280x100.gif"} marginBottom={"40px"} width={"90%"} margin={"auto"}/>


        {/* ------------------------10 Poster -----------------------------*/}

        
        <Box width={"90%"} margin={"auto"}>
        <Grid templateColumns="repeat(2, 1fr)" gap={0}>
          <GridItem>
            <Image src={"https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1674035353_m-a-c-1.jpeg"} />
          </GridItem>
          <GridItem>
            <Image src={"https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1674112186_pb-gif-celeb-2.gif?tr=f-gif"} />
          </GridItem>
          <GridItem>
            <Image src={"https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1674106765_schwarzkopf-professional.jpeg"} />
          </GridItem>
          <GridItem>
            <Image src={"https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1674042630_orange-bg-model-sku.png"} />
          </GridItem>
          <GridItem>
            <Image src={"https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1673961015_loreal-720x350.jpeg"} />
          </GridItem>
          <GridItem>
            <Image src={"https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1673953609_lotus-herbal-720x350.jpeg"} />
          </GridItem>
          <GridItem>
            <Image src={"https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1674141655_mcaffeine-720x350.jpeg"} />
          </GridItem>
          <GridItem>
            <Image src={"https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1674028919_blush.gif?tr=f-gif"} />
          </GridItem>
          <GridItem>
            <Image src={"https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1673953606_kaja.gif?tr=f-gif"} />
          </GridItem>
          <GridItem>
            <Image src={"https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1674028922_pu-gif-celeb-50.gif?tr=f-gif"} />
          </GridItem>
        </Grid>
        </Box>

        {/* // ------------------------------- Best Prices on The Internet -----------------------------// */}

        <Box mt="2rem" fontFamily="Aqleema- Regular, sans-serif" width={"90%"} margin={"auto"}>
          <Box
            display="flex"
            justifyContent="space-between"
            px="2rem"
            mb="0.5rem"
          >
            <Text fontWeight={"700"} fontSize={"22px"} marginTop={"10px"}>
              BEST PRICES ON THE INTERNET
            </Text>
              <Link
                color={"darkmagenta"}
                textDecor={"none"}
              >
                VIEW ALL
              </Link>
          </Box>
          <ProductsCard something={bestPriceOnTheInternet} />
        </Box>

        {/* // ------------------------------- Republic Day Special Looks -----------------------------// */}

        <Image src={"https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1673939275_republic-day-special-looksapp.gif"} marginBottom={"40px"} width={"90%"} margin={"auto"}/>

        <LiveProduct something={republicDay} />

        {/* // ------------------------------- Everday Essentials to Bag! All Products on Purplle!-----------------------------// */}

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

          {/* // ------------------------------- Get a Free Gift -----------------------------// */}
        
        <Image src={"https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1673939614_get-free-gifts-web.gif"} marginBottom={"40px"} width={"90%"} margin={"auto"}/>

        <LiveProduct something={freeGift} />

         {/* // ------------------------------- Budget Buy for you -----------------------------// */}    

        <Box width={"90%"} margin={"auto"}>
        <Image src={"https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1673943895_budget-buy-for-you-web_17_17.gif"} marginBottom={"40px"} width={"90%"} margin={"auto"}/>
        <Grid templateColumns="repeat(4, 1fr)" gap={0}>
          <GridItem>
            <Image src={"https://media6.ppl-media.com/tr:w-320,ar-1-2,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1674043771_web_01-1.gif"} />
          </GridItem>
          <GridItem>
            <Image src={"https://media6.ppl-media.com/tr:w-320,ar-1-2,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1674043770_web_02-1.gif"} />
          </GridItem>
          <GridItem>
            <Image src={"https://media6.ppl-media.com/tr:w-320,ar-1-2,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1674043768_web_03-1.gif"} />
          </GridItem>
          <GridItem>
            <Image src={"https://media6.ppl-media.com/tr:w-320,ar-1-2,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1674043767_web_04-1.gif"} />
          </GridItem>
        </Grid>
        </Box>

        <Image src={"https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1620711142_elite-web.png"} marginBottom={"40px"} width={"90%"} margin={"auto"}/>
        
      {  /* ----------------------Beggest Brand --------*/}
      
        <Image src={"https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1674019675_biggest-brands-on-offer-web.gif"} marginBottom={"40px"} width={"90%"} margin={"auto"}/>
      <Box width={"90%"} margin={"auto"}>
        <Grid templateColumns="repeat(4, 1fr)" gap={0}>
          <GridItem>
            <Image src={"https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1674019641_daily-life-forever-52.jpeg"} />
          </GridItem>
          <GridItem>
            <Image src={"https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1673963412_nivea-jan-600x865.jpeg"} />
          </GridItem>
          <GridItem>
            <Image src={"https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1673963417_lacto-calamine-jan-600x865.jpeg"} />
          </GridItem>
          <GridItem>
            <Image src={"https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1673963416_tresemme-jan-600x865.jpeg"} />
          </GridItem>
          <GridItem>
            <Image src={"https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1673963415_insight-jan-600x865.jpeg"} />
          </GridItem>
          <GridItem>
            <Image src={"https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1673963414_vlcc-jan-600x865.jpeg"} />
          </GridItem>
          <GridItem>
            <Image src={"https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1673963419_livon-jan-600x865.jpeg"} />
          </GridItem>
          <GridItem>
            <Image src={"https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1673963409_nature-s-essence-jan-600x865.jpeg"} />
          </GridItem>
          <GridItem>
            <Image src={"https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1673963421_aqualogica-jan-600x865.jpeg"} />
          </GridItem>
          <GridItem>
            <Image src={"https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1673963413_bajaj-jan-600x865.jpeg"} />
          </GridItem>
          <GridItem>
            <Image src={"https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1673963420_pilgrim-jan-600x865.jpeg"} />
          </GridItem>
          <GridItem>
            <Image src={"https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1673963411_dove-jan-600x865.jpeg"} />
          </GridItem>
          <GridItem>
            <Image src={"https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1674119671_pilgrim-jan.png"} />
          </GridItem>
          <GridItem>
            <Image src={"https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1673963410_joy-jan-600x865.jpeg"} />
          </GridItem>
          <GridItem>
            <Image src={"https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1673963418_revlon-jan-600x865.jpeg"} />
          </GridItem>
          <GridItem>
            <Image src={"https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1673963411_street-wear-jan-600x865.jpeg"} />
          </GridItem>
        </Grid>
      </Box>
        
      {  /* ----------------------Discover all product on purple --------*/}

      <Image src={"https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1673945734_discover-all-product-web.gif"} marginBottom={"40px"} width={"90%"} margin={"auto"}/>

        <Image src={"https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1639028230_alert-strip-web.jpg"} marginBottom={"40px"} width={"90%"} margin={"auto"}/>

        <Image src={"https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1662556480_benefit-icons-strip-web.jpg"} marginBottom={"40px"} width={"90%"} margin={"auto"}/>

        </Box>

        {  /* ----------------------Spotlight Vedio--------*/}
        <Box width={"100%"} height={"400px"} margin={"auto"} bg={"#e9eced"}>
        <Text fontWeight={"500"} color={"grey"} fontSize={"30px"} marginTop={"10px"} textAlign={"left"} marginLeft={"100px"}>
        Spotlight
      </Text>
        
        
        <Grid templateColumns="repeat(1, 1fr)" templateRows="600px" width={"60%"} margin={"auto"}>
          <GridItem>
           
            <Box marginTop={"30px"} >
              <iframe width={"100%"} height={"300px"} src="https://www.youtube.com/embed/NrI9d0XiP7M" title="youTube video" allowFullScreen></iframe>
            </Box>
          </GridItem>
        </Grid>
        </Box> 
               
      
  </Box>
  );
};

export default AddProductLanding;
