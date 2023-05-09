import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import React, { useEffect } from "react";
import { useState } from "react";
import { Box, Button, Flex, Image } from "@chakra-ui/react";

function SecondOneSlindingProducts() {
  let crauserData = [
    {
      image:
        "https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1674054467_loreal-group_webstrip-12-1.jpg",
    },
    {
      image:
        "https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1674130576_1280-x-272-1.jpg",
    },
    {
      image:
        "https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1667649361_exclusive-web.gif",
    },
    {
      image:
        "https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1674032016_web.gif",
    },
    {
      image:
        "https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1674056836_body-shop-flat-20-web.jpg",
    },
  ];
  const [imageState, setImageState] = useState(0);
  const [imageSrc, setImageSrc] = useState(crauserData[imageState].image);
  const [crauserDesignation, setCrauserDesignation] = useState(
    crauserData[imageState].designation
  );

  const rightClick = () => {
    if (imageState == crauserData.length - 1) {
      setImageState(0);
    } else {
      setImageState(imageState + 1);
    }
  };
  const leftClick = () => {
    if (imageState == 0) {
      setImageState(crauserData.length - 1);
    } else {
      setImageState(imageState - 1);
    }
  };

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
  }, [{ imageState }]);

  useEffect(() => {
    setImageSrc(crauserData[imageState].image);

    setCrauserDesignation(crauserData[imageState].designation);
  }, [{ imageState }]);

  console.log(imageState);
  return (
    <Box id="container_Client" pt={5}>
      <Box id="main_Client" bgPosition={"center"} bgRepeat={"no-repeat"}>
        <Image id="crauser-img" src={imageSrc} m={"auto"} width={"90%"} />
        <Flex mb={5}>
          <Button id="left-btn" onClick={leftClick} bg={"transparent"}>
            <ChevronLeftIcon
              boxSize={10}
              marginBottom={"320px"}
              marginLeft={"50px"}
            />
          </Button>
          <Button id="right-btn" onClick={rightClick} bg={"transparent"}>
            <ChevronRightIcon
              boxSize={10}
              marginBottom={"320px"}
              marginLeft={"120px"}
            />
          </Button>
        </Flex>
      </Box>
    </Box>
  );
}

export default SecondOneSlindingProducts;
