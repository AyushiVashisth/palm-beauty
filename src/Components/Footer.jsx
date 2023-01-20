import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  VisuallyHidden,
  chakra,
  useColorModeValue,
  Image,
  Grid,
  Heading,
  GridItem,
} from '@chakra-ui/react';



const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <Box  bg={"#e9eced"} width={"90%"}
    margin={"auto"}>
    <Box
    bg={"#e9eced"}
    width={"90%"}
    margin={"auto"}
      color={useColorModeValue('gray.500', 'gray.200')}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 5 }} spacing={8}>
          <Stack align={'flex-start'}>
            <ListHeader fontSize={"14px"}>PUPPLE</ListHeader>
            <Link href={'#'} fontSize={"12px"}>About Us</Link>
            <Link href={'#'} fontSize={"12px"}>Our Team</Link>
            <Link href={'#'} fontSize={"12px"}>Careers</Link>
            <Link href={'#'} fontSize={"12px"}>Press</Link>
            <Link href={"#"} fontSize={"12px"}>Sitemap</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader fontSize={"14px"}>PURPLLE BUSINESS</ListHeader>
            <Link href={'#'} fontSize={"12px"}>Swll on Purplle</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader fontSize={"14px"}>PLOLCY INFO</ListHeader>
            <Link href={'#'} fontSize={"12px"}>Privacy Policy</Link>
            <Link href={'#'} fontSize={"12px"}>Terms of Use</Link>
            <Link href={'#'} fontSize={"12px"}>Return & Cancellation Policy</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader fontSize={"14px"}>NEED HELP?</ListHeader>
            <Link href={'#'} fontSize={"12px"}>FAQ's</Link>
            <Link href={'#'} fontSize={"12px"}>Contact Us</Link>
          </Stack>

          <Stack align={'flex-start'}>
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
      color={useColorModeValue('gray.500', 'gray.200')}>
      <Box marginLeft={"40px"} display={"flex"} gap={"20px"} >
            <Box fontSize={"16px"} fontFamily={"sans-serif"}>PAYMENT</Box>
            <Grid templateColumns={"repeat(5,1fr)" }>
              <GridItem>
                <Image width={"5900px"} height={"30px"} src="https://media6.ppl-media.com/mediafiles/ecomm/promo/1499177379_tt.jpg"/>
              </GridItem>
            </Grid>
      </Box>      
    </Box>
    <SmallWithSocial/>
    
    </Box>
    
  );
}
  
function SmallWithSocial() {
    return (
      <Box
        bg={useColorModeValue('gray.50', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}>
          <Text>© 2022 Chakra Templates. All rights reserved</Text>
        </Container>
      </Box>
    );
  }