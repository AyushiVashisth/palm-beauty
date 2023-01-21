import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import React, { useEffect } from 'react'
import { useState } from 'react'
import {Box,Button,Flex,Image} from '@chakra-ui/react'

function OneProductSlinding() {

     let crauserData = [
       {
         image: "https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1674044098_paisa-vasool-elite-republic-l-1298x418.gif",
       },
       {
         image: "https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1674044096_skin-care-web.gif",
       },
       {
         image: "https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1674044100_makeup-web.gif",
       },
       {
         image: "https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1674044105_hair-care-web.gif",
       },
       {
        image:"https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1674044102_korean-web.gif"
       },
       
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
    width={"90%"}
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

export default OneProductSlinding

