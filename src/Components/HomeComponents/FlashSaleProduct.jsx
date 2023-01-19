import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const FlashSaleProduct = ({ something, prodVal = 5 }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: prodVal,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <Box bg="white" p="1rem">
      <Carousel
        swipeable={true}
        draggable={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="300ms"
        transitionDuration={300}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {something.map((e, i) => (
          <Box
            h={"100%"}
            p="0.5rem"
            key={i}
            textAlign="left"
            borderRadius="5px"
            ml={"1rem"}
            cursor="pointer"
            marginTop={"0px"}
          >
            <Image h={"354px"} w={"100%"} textAlign={"center"} justifyContent={"center"} src={e.img} />
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default FlashSaleProduct;
