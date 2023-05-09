import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  useColorModeValue,
  Image,
  Grid,
  GridItem,
} from "@chakra-ui/react";

import "./footer.css";
const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <>
      <div class="para-cont">
        <div>
          <p>
            <span>
              <a href="#">Makeup:</a>
            </span>
          </p>
          <div>
            <p>
              <a href="#">Primer</a>/<a href="#">Lipstick</a>/
              <a href="#">Foundation</a>/<a href="#">Eyeshadow</a>/
              <a href="#">Eyeliner</a>/<a href="#">Kajal</a>/
              <a href="#">Concealer</a>/<a href="#">Nail Polish</a>/
              <a href="#">Compact</a>/<a href="#">Mascara</a>/
              <a href="#">Highlighters & illuminators</a>/
              <a href="#">Makeup Remover</a>/<a href="#">BB & CC Cream</a>/
              <a href="#">Lip Balm & Treatment</a>/
              <a href="#">Eyebrow Enhancer</a>
            </p>
          </div>
        </div>
        <div>
          <p>
            <span>
              <a href="#">Skin:</a>
            </span>
          </p>
          <div>
            <p>
              <a href="#">Face Pack Masks & Peels</a>/
              <a href="#">Serum & Facial Oils</a>/<a href="#"> Face wash</a>/
              <a href="#"> Facial Kits</a>/<a href="#">Face Cream</a>/
              <a href="#"> Moisturizers</a>/<a href="#"> Toner</a>/
              <a href="#">Essential & Carrier Oils</a>/
              <a href="#"> Sheet Masks</a>/<a href="#"> Scrubs & Exfoliators</a>
              /<a href="#"> Lip Balm & Care</a>/<a href="#"> Sunscreen</a>/
              <a href="#">Body Lotions & Moisturizers</a>
            </p>
          </div>
        </div>
        <div>
          <p>
            <span>
              <a href="#">Hair:</a>
            </span>
          </p>
          <div>
            <p>
              <a href="#"> Shampoo</a>/<a href="#"> Conditioner</a>/
              <a href="#">Hair Serum</a>/<a href="#"> Hair Oil</a>/
              <a href="#"> Hair Spa & Masque</a>/<a href="#">Hair Treatment</a>/
              <a href="#"> Baby Shampoo</a>/<a href="#"> Dry Shampoo</a>/
              <a href="#">Hair Spa Kits</a>/
              <a href="#"> Hair Nourishment Kit</a>/<a href="#"> Hair Color</a>/
              <a href="#"> Hair Nourishment Kit</a>/
              <a href="#">Hair Spray & Leave-in cream</a>/
              <a href="#"> Volumizing</a>
            </p>
          </div>
        </div>
        <div>
          <p>
            <span>
              <a href="#">Fragrance:</a>
            </span>
          </p>
          <div>
            <p>
              <a href="#"> Perfumes</a>/<a href="#"> Deodrants & Roll-ons</a>/
              <a href="#">Solid Perfumes</a>/<a href="#"> Aftershaves</a>/
              <a href="#"> Colognes</a>/
              <a href="#">Gift & Value sets for men</a>/
              <a href="#"> Gift & Value sets for men</a>/
              <a href="#">Gift & Value sets for women</a>
            </p>
          </div>
        </div>
        <div>
          <p>
            <span>
              <a href="#">Collections:</a>
            </span>
          </p>
          <div>
            <p>
              <a href="#"> Castor Oil</a>/<a href="#"> Pastel Nail Polish</a>/
              <a href="#">Lakme 9 to 5</a>/<a href="#"> Black Kajal</a>/
              <a href="#"> Sunscreen</a>
            </p>
          </div>
        </div>
        <div>
          <p>
            <span>
              <a href="#">Brands:</a>
            </span>
          </p>
          <div>
            <p>
              <a href="#"> Biotique</a>/<a href="#"> Wow</a>/
              <a href="#">Dermdoc</a>/<a href="#"> Himalaya</a>/
              <a href="#"> Darling Isabella</a>/<a href="#">Maybelline</a>/
              <a href="#"> Loreal</a>/<a href="#"> Good Vibes</a>/
              <a href="#">NY Bae</a>/<a href="#"> Stay Quirky</a>/
              <a href="#"> Aroma Magic</a>/<a href="#">Alps Goodness</a>/
              <a href="#"> Lotus</a>/<a href="#"> Purplle</a>/
              <a href="#">Sugar</a>/<a href="#"> Nivea</a>/
              <a href="#"> Lakme</a>
            </p>
          </div>
        </div>
        <div>
          <p>
            <span>
              <a href="#">Men:</a>
            </span>
          </p>
          <div>
            <p>
              <a href="#">Primer</a>/<a href="#">Lipstick</a>/
              <a href="#">Foundation</a>/<a href="#">Eyeshadow</a>/
              <a href="#">Eyeliner</a>/<a href="#">Kajal</a>/
              <a href="#">Concealer</a>/<a href="#">Nail Polish</a>/
              <a href="#">Compact</a>/<a href="#">Mascara</a>/
              <a href="#">Highlighters & illuminators</a>/
              <a href="#">Makeup Remover</a>/<a href="#">BB & CC Cream</a>/
              <a href="#">Lip Balm & Treatment</a>/
              <a href="#">Eyebrow Enhancer</a>/<a href="#">Loose Powder</a>/
              <a href="#">Blush</a>
            </p>
          </div>
        </div>
        <div>
          <p>
            <span>
              <a href="#">Accessories:</a>
            </span>
          </p>
          <div>
            <p>
              <a href="#">Primer</a>/<a href="#">Lipstick</a>/
              <a href="#">Foundation</a>/<a href="#">Eyeshadow</a>/
              <a href="#">Eyeliner</a>/<a href="#">Kajal</a>/
              <a href="#">Concealer</a>/<a href="#">Nail Polish</a>/
              <a href="#">Compact</a>/<a href="#">Mascara</a>/
              <a href="#">Highlighters & illuminators</a>/
              <a href="#">Makeup Remover</a>/<a href="#">BB & CC Cream</a>/
              <a href="#">Lip Balm & Treatment</a>/
              <a href="#">Eyebrow Enhancer</a>
            </p>
          </div>
        </div>
        <div>
          <p>
            <span>
              <a href="#">Electronics:</a>
            </span>
          </p>
          <div>
            <p>
              <a href="#">Primer</a>/<a href="#">Lipstick</a>/
              <a href="#">Foundation</a>/<a href="#">Eyeshadow</a>/
              <a href="#">Eyeliner</a>/<a href="#">Kajal</a>/
              <a href="#">Concealer</a>/<a href="#">Nail Polish</a>/
              <a href="#">Compact</a>/<a href="#">Mascara</a>/
              <a href="#">Highlighters & illuminators</a>/
              <a href="#">Makeup Remover</a>/<a href="#">BB & CC Cream</a>/
              <a href="#">Lip Balm & Treatment</a>/
              <a href="#">Eyebrow Enhancer</a>
            </p>
          </div>
        </div>
        <div>
          <p>
            <span>
              <a href="#">Wellness:</a>
            </span>
          </p>
          <div>
            <p>
              <a href="#">Primer</a>/<a href="#">Lipstick</a>/
              <a href="#">Foundation</a>/<a href="#">Eyeshadow</a>/
              <a href="#">Eyeliner</a>/<a href="#">Kajal</a>/
              <a href="#">Concealer</a>/<a href="#">Nail Polish</a>/
              <a href="#">Compact</a>/<a href="#">Mascara</a>/
              <a href="#">Highlighters & illuminators</a>/
              <a href="#">Makeup Remover</a>/<a href="#">BB & CC Cream</a>/
              <a href="#">Lip Balm & Treatment</a>/
              <a href="#">Eyebrow Enhancer</a>
            </p>
          </div>
        </div>
        <div>
          <p>
            <span>
              <a href="#">Wellness:</a>
            </span>
          </p>
          <div>
            <p>
              <a href="#">Primer</a>/<a href="#">Lipstick</a>/
              <a href="#">Foundation</a>/<a href="#">Eyeshadow</a>/
              <a href="#">Eyeliner</a>/<a href="#">Kajal</a>/
              <a href="#">Concealer</a>/<a href="#">Nail Polish</a>/
              <a href="#">Compact</a>/<a href="#">Mascara</a>/
              <a href="#">Highlighters & illuminators</a>/
              <a href="#">Makeup Remover</a>/<a href="#">BB & CC Cream</a>/
              <a href="#">Lip Balm & Treatment</a>/
              <a href="#">Eyebrow Enhancer</a>
            </p>
          </div>
        </div>
      </div>
      <Box bg={"#e9eced"} width={"90%"} margin={"auto"}>
        <Box
          bg={"#e9eced"}
          width={"90%"}
          margin={"auto"}
          color={useColorModeValue("gray.500", "gray.200")}
        >
          <Container as={Stack} maxW={"6xl"} py={10}>
            <SimpleGrid columns={{ base: 1, sm: 2, md: 5 }} spacing={8}>
              <Stack align={"flex-start"}>
                <ListHeader fontSize={"14px"}>PUPPLE</ListHeader>
                <Link href={"#"} fontSize={"12px"}>
                  About Us
                </Link>
                <Link href={"#"} fontSize={"12px"}>
                  Our Team
                </Link>
                <Link href={"#"} fontSize={"12px"}>
                  Careers
                </Link>
                <Link href={"#"} fontSize={"12px"}>
                  Press
                </Link>
                <Link href={"#"} fontSize={"12px"}>
                  Sitemap
                </Link>
              </Stack>

              <Stack align={"flex-start"}>
                <ListHeader fontSize={"14px"}>PURPLLE BUSINESS</ListHeader>
                <Link href={"#"} fontSize={"12px"}>
                  Swll on Purplle
                </Link>
              </Stack>

              <Stack align={"flex-start"}>
                <ListHeader fontSize={"14px"}>PLOLCY INFO</ListHeader>
                <Link href={"#"} fontSize={"12px"}>
                  Privacy Policy
                </Link>
                <Link href={"#"} fontSize={"12px"}>
                  Terms of Use
                </Link>
                <Link href={"#"} fontSize={"12px"}>
                  Return & Cancellation Policy
                </Link>
              </Stack>

              <Stack align={"flex-start"}>
                <ListHeader fontSize={"14px"}>NEED HELP?</ListHeader>
                <Link href={"#"} fontSize={"12px"}>
                  FAQ's
                </Link>
                <Link href={"#"} fontSize={"12px"}>
                  Contact Us
                </Link>
              </Stack>

              <Stack align={"flex-start"}>
                <ListHeader fontSize={"14px"}>Install App</ListHeader>
                <Box position={"relative"} right={"50px"} bottom={"20px"}>
                  <Image src="https://th.bing.com/th/id/OIP.s8pi6In-NeLFY5SQoWxTwAHaDi?w=289&h=167&c=7&r=0&o=5&dpr=1.3&pid=1.7" />
                </Box>
              </Stack>
            </SimpleGrid>
          </Container>
        </Box>
        <Box
          bg={"#e9eced"}
          width={"90%"}
          margin={"auto"}
          height={"80px"}
          display={"flex"}
          color={useColorModeValue("gray.500", "gray.200")}
        >
          <Box marginLeft={"40px"} display={"flex"} gap={"20px"}>
            <Box fontSize={"16px"} fontFamily={"sans-serif"}>
              PAYMENT
            </Box>
            <Grid templateColumns={"repeat(5,1fr)"}>
              <GridItem>
                <Image
                  width={"5900px"}
                  height={"30px"}
                  src="https://media6.ppl-media.com/mediafiles/ecomm/promo/1499177379_tt.jpg"
                />
              </GridItem>
            </Grid>
          </Box>
        </Box>
        <SmallWithSocial />
      </Box>
    </>
  );
}

function SmallWithSocial() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Text>© 2022 Chakra Templates. All rights reserved</Text>
      </Container>
    </Box>
  );
}
