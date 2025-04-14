import { Box, Heading, Text, VStack, SimpleGrid, Icon, Container } from '@chakra-ui/react';
import { FaRegLightbulb, FaHandsHelping, FaChartLine } from 'react-icons/fa';

export default function Services() {
  const services = [
    {
      title: 'אימון אישי ממוקד תוצאות',
      description: 'ליווי אישי בתהליכים ממוקדי מטרה לשיפור יכולות, קבלת החלטות והגשמת מטרות אישיות ומקצועיות.',
      icon: FaRegLightbulb,
    },
    {
      title: 'ליווי בתהליכי שינוי',
      description: 'תמיכה והכוונה בתהליכים של שינוי משמעותי בחיים - קריירה, מערכות יחסים ועוד.',
      icon: FaHandsHelping,
    },
    {
      title: 'פיתוח ביטחון עצמי',
      description: 'עבודה על חיזוק הביטחון העצמי ופיתוח כלים לשיפור דימוי עצמי והערכה עצמית.',
      icon: FaChartLine,
    },
  ];

  return (
    <Container maxW="container.md" py={10} dir="rtl">
      <VStack spacing={6} align="start" px={{ base: 4, md: 8 }}>
        <Heading as="h1" size={{ base: 'xl', md: '2xl' }} color="blue.600">
          השירותים שלי
        </Heading>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} w="100%">
          {services.map((service, index) => (
            <Box
              key={index}
              p={4}
              boxShadow="lg"
              borderRadius="md"
              bg="gray.50"
              _hover={{ bg: 'purple.50', transform: 'scale(1.02)' }}
              transition="0.3s"
            >
              <Icon as={service.icon} w={10} h={10} color="purple.600" mb={4} />
              <Heading as="h3" size={{ base: 'md', md: 'lg' }} mb={2} color="purple.700">
                {service.title}
              </Heading>
              <Text fontSize={{ base: 'sm', md: 'md' }} color="gray.700" lineHeight="1.8">
                {service.description}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
}
