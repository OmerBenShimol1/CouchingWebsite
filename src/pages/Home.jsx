import { Heading, Text, VStack, Button, Image, Container } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/hero.jpg';

export default function Home() {
  return (
    <Container maxW="container.md" py={10} dir="rtl">
      <VStack spacing={6} align="center" px={{ base: 4, md: 8 }}>
        <Image src={heroImage} alt="ד" borderRadius="lg" boxShadow="lg" w={{ base: '100%', md: '80%' }} />

        <Heading as="h1" size={{ base: 'xl', md: '2xl' }} color="purple.700">
          ברוכים הבאים לאתר של ד
        </Heading>

        <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600" textAlign="center">
          ד - מאמנת אישית שתלווה אותך במסע שלך להצלחה, שינוי והתפתחות אישית.
        </Text>

        <Link to="/contact">
          <Button colorScheme="purple" size={{ base: 'md', md: 'lg' }} w={{ base: '100%', md: 'auto' }}>
            צרו קשר עכשיו
          </Button>
        </Link>
      </VStack>
    </Container>
  );
}
