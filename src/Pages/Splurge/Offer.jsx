import { Box, Grid, GridItem, Image,Text } from '@chakra-ui/react';
import React from 'react';
import LiveProduct from '../HomeComponents/LiveProducts';
import OneProductSlinding from './OneProductSlinding';
import { offerOfTheDay } from './SplurgeConstants';

const Offer= () => (
  <Box>
  <br/>
  <br/>
  <br/>
      <Box width={"90%"} margin={"auto"}>

        {/*--------------One Product Slinging */}
        <OneProductSlinding/>

        {/*-------------- 8 reasons to join */}
        <Image src="https://media6.ppl-media.com/tr:w-1280,ar-649-955,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1648809023_benefits.png" />

        {/*-------------- Offer of the day */}
        <Image width={"98%"} src="https://media6.ppl-media.com/mediafiles/ecomm/promo/1650964753_offer-of-the-day.jpg" />

        <LiveProduct something={offerOfTheDay} />

        <Grid templateColumns={"repeat(4,1fr)"} gap={0}>
           <GridItem>
              <Image src="https://media6.ppl-media.com/tr:w-457,ar-120-173,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1674044360_salon-in-a-box-600x865.jpeg" />
            </GridItem>
            <GridItem>
              <Image src="https://media6.ppl-media.com/tr:w-457,ar-120-173,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1674044356_truthsome-600x865.jpeg" />
            </GridItem>
            <GridItem>
              <Image src="https://media6.ppl-media.com/tr:w-457,ar-120-173,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1674044358_streetwear-600x865.jpeg" />
            </GridItem>
        </Grid>

        {/*-------------- Featured Elite Brands --------- */}
        <Image width={"98%"} src="https://media6.ppl-media.com/tr:w-1280,ar-180-47,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1663576551_brand-grid_01.jpg" />

        <Grid templateColumns={"repeat(3,1fr)"} gap={0}>
           <GridItem>
              <Image width={"100%"} src="https://media6.ppl-media.com/tr:w-427,ar-15873-12500,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1663576552_brand-grid_02.jpg" />
            </GridItem>
            <GridItem>
              <Image width={"100%"} src="https://media6.ppl-media.com/tr:w-427,ar-15873-12500,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1663576552_brand-grid_03.jpg" />
            </GridItem>
            <GridItem>
              <Image width={"100%"} src="https://media6.ppl-media.com/tr:w-427,ar-15873-12500,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1663576552_brand-grid_04.jpg" />
            </GridItem>
            <GridItem>
              <Image width={"100%"} src="https://media6.ppl-media.com/tr:w-427,ar-6383-5000,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1663576553_brand-grid_05.jpg" />
            </GridItem>
            <GridItem>
              <Image width={"100%"} src="https://media6.ppl-media.com/tr:w-427,ar-6383-5000,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1663576553_brand-grid_06.jpg" />
            </GridItem>
            <GridItem>
              <Image width={"100%"} src="https://media6.ppl-media.com/tr:w-427,ar-6383-5000,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1663576553_brand-grid_07.jpg" />
            </GridItem>
            <GridItem>
              <Image width={"100%"} src="https://media6.ppl-media.com/tr:w-427,ar-15873-12500,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1663576554_brand-grid_08.jpg" />
            </GridItem>
            <GridItem>
              <Image width={"100%"} src="https://media6.ppl-media.com/tr:w-427,ar-15873-12500,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1663576554_brand-grid_09.jpg" />
            </GridItem>
            <GridItem>
              <Image width={"100%"} src="https://media6.ppl-media.com/tr:w-427,ar-15873-12500,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1663576554_brand-grid_10.jpg" />
            </GridItem>
            <GridItem>
              <Image width={"100%"} src="https://media6.ppl-media.com/tr:w-427,ar-6383-5000,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1663576555_brand-grid_11.jpg" />
            </GridItem>
            <GridItem>
              <Image width={"100%"} src="https://media6.ppl-media.com/tr:w-427,ar-6383-5000,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1663576555_brand-grid_12.jpg" />
            </GridItem>
            <GridItem>
              <Image width={"100%"} src="https://media6.ppl-media.com/tr:w-427,ar-6383-5000,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1663576555_brand-grid_13.jpg" />
            </GridItem>
            <GridItem>
              <Image width={"100%"} src="https://media6.ppl-media.com/tr:w-427,ar-15873-12500,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1663576556_brand-grid_14.jpg" />
            </GridItem>
            <GridItem>
              <Image width={"100%"} src="https://media6.ppl-media.com/tr:w-427,ar-15873-12500,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1663576556_brand-grid_15.jpg" />
            </GridItem>
            <GridItem>
              <Image width={"100%"} src="https://media6.ppl-media.com/tr:w-427,ar-15873-12500,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1663576556_brand-grid_16.jpg" />
            </GridItem>
            <GridItem>
              <Image width={"100%"} src="https://media6.ppl-media.com/tr:w-427,ar-15873-12500,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1663576557_brand-grid_17.jpg" />
            </GridItem>
            <GridItem>
              <Image width={"100%"} src="https://media6.ppl-media.com/tr:w-427,ar-15873-12500,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1663576557_brand-grid_18.jpg" />
            </GridItem>
            <GridItem>
              <Image width={"100%"} src="https://media6.ppl-media.com/tr:w-427,ar-15873-12500,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1663576557_brand-grid_19.jpg" />
            </GridItem>
        </Grid>

        {/*-------------- Our Super Savers*/}
        <Image src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1643892132_testimonials.jpg" />

        <Image src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1643605301_our-super-savers-testimonials-web.jpg" />

        {/*-------------- Most Loved */}
        <Image src="https://media6.ppl-media.com/mediafiles/ecomm/promo/1650967644_most-loved-by-elite.jpg" />

        
      </Box>
      

  </Box>
);

export default Offer;