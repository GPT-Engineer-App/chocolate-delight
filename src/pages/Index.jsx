import React from "react";
import { Box, Heading, Text, Image, Stack, SimpleGrid, Container, Button, Icon } from "@chakra-ui/react";
import { FaShoppingCart, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

const Index = () => {
  const products = [
    {
      name: "Dark Chocolate Truffles",
      description: "Rich, decadent dark chocolate truffles made with the finest cocoa.",
      image: "https://images.unsplash.com/photo-1493925410384-84f842e616fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkYXJrJTIwY2hvY29sYXRlJTIwdHJ1ZmZsZXN8ZW58MHx8fHwxNzEyNDMxMjA1fDA&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
      name: "Milk Chocolate Bars",
      description: "Creamy milk chocolate bars with a smooth, velvety texture.",
      image: "https://images.unsplash.com/photo-1553452118-621e1f860f43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtaWxrJTIwY2hvY29sYXRlJTIwYmFyc3xlbnwwfHx8fDE3MTI0MzEyMDV8MA&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
      name: "Assorted Chocolate Box",
      description: "A variety of our best-selling chocolates in a beautifully crafted box.",
      image: "https://images.unsplash.com/photo-1553452118-621e1f860f43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhc3NvcnRlZCUyMGNob2NvbGF0ZSUyMGJveHxlbnwwfHx8fDE3MTI0MzEyMDV8MA&ixlib=rb-4.0.3&q=80&w=1080",
    },
  ];

  return (
    <Box>
      <Box bg="brown.500" py={8} color="white">
        <Container maxW="container.lg">
          <Heading as="h1" size="2xl" mb={4}>
            Artisan Chocolates
          </Heading>
          <Text fontSize="xl">Handcrafted chocolates made with love and the finest ingredients.</Text>
        </Container>
      </Box>

      <Container maxW="container.lg" py={12}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          {products.map((product, index) => (
            <Box key={index} bg="white" p={6} borderRadius="lg" boxShadow="md">
              <Image src={product.image} alt={product.name} borderRadius="lg" mb={4} />
              <Heading as="h3" size="lg" mb={2}>
                {product.name}
              </Heading>
              <Text mb={4}>{product.description}</Text>
              <Button leftIcon={<FaShoppingCart />} colorScheme="brown">
                Add to Cart
              </Button>
            </Box>
          ))}
        </SimpleGrid>
      </Container>

      <Box bg="brown.500" py={8} color="white">
        <Container maxW="container.lg">
          <Stack direction={{ base: "column", md: "row" }} spacing={8} align="center">
            <Text>&copy; 2023 Artisan Chocolates. All rights reserved.</Text>
            <Stack direction="row" spacing={4}>
              <Icon as={FaInstagram} boxSize={6} />
              <Icon as={FaFacebook} boxSize={6} />
              <Icon as={FaTwitter} boxSize={6} />
            </Stack>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;
