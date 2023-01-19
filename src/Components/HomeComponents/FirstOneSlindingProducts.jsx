import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import React, { useEffect } from 'react'
import { useState } from 'react'
import {Box,Button,Flex,Image} from '@chakra-ui/react'

function FirstOneSlindingProducts() {

     let crauserData = [
       {
         image: "https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1673943131_republic-day-header-web-1.gif",
       },
       {
         image: "https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1674109513_rose-hip_web_category-1.gif",
       },
       {
         image: "https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1673969538_lakme_mega-beauty-haul-2596x836-1.jpeg",
       },
       {
         image: "https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1674047074_1298x418-5.gif",
       },
       {
        image:"https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1673969537_mcaffeine_moisturize-2596x836-1.jpeg"
       },
       {
        image:"https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1673978743_face_compact_web_hp.jpg"
       },
       {
        image:"https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1673969539_k-beauty-web-new-1.gif"
       },
       {
        image:"https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1673969899_wands-of-hair-straightening_webhp-1.jpg"
       }
     ];   
    const [imageState, setImageState] = useState(0);
    const [imageSrc, setImageSrc] = useState(crauserData[imageState].image);
    const [crauserDesignation, setCrauserDesignation] = useState(
      crauserData[imageState].designation
    );

    const rightClick = () =>{
      
      if (imageState == crauserData.length-1) {
        setImageState(0);
      }else{
         setImageState(imageState + 1);
      }
     
    }
    const leftClick = ()=> {
      if (imageState == 0) {
        setImageState(crauserData.length - 1);
      }else{
          setImageState(imageState - 1);
      }
    }

   useEffect(() => {
     const id = setInterval(() => {
       console.log(imageState);
       if (imageState == crauserData.length - 1) {
         setImageState(0);
       } else {
         setImageState(imageState + 1);
       }
     }, 1000);
     return () => {
       clearInterval(id);
     };
   }, [{imageState}]);

    useEffect(()=>{
          setImageSrc(crauserData[imageState].image);
          setCrauserDesignation(crauserData[imageState].designation);
    },[{imageState}])

  console.log(imageState)
  return (
    <Box id="container_Client" pt={5}
    width={"85%"}
    margin={"auto"}>
      <Box
        id="main_Client"
        bgPosition={"center"}
        bgRepeat={"no-repeat"}
      >
        <Image id="crauser-img" src={imageSrc} m={"auto"} />
        <Flex mb={5}>
          <Button id="left-btn" onClick={leftClick} bg={"transparent"} >
            <ChevronLeftIcon boxSize={10} marginBottom={"490px"} marginRight={"600px"}/>
          </Button>
          <Button id="right-btn" onClick={rightClick} bg={"transparent"}>
            <ChevronRightIcon boxSize={10} marginBottom={"490px"} marginLeft={"700px"}/>
          </Button>
        </Flex>
      </Box>
    </Box>
  );
}

export default FirstOneSlindingProducts

