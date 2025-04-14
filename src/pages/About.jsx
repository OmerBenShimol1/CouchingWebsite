import { Box, Heading, Text, VStack, Image, Container } from '@chakra-ui/react';
import aboutImage from '../assets/about.png';

export default function About() {
  return (
    <Container maxW="container.md" py={10} dir="rtl">
      <VStack spacing={6} align="start" px={{ base: 4, md: 8 }}>
        <Image src={aboutImage} alt="דנה גרינוולד" borderRadius="lg" boxShadow="lg" w={{ base: '100%', md: '80%' }} />

        <Heading as="h1" size={{ base: 'xl', md: '2xl' }} color="purple.700">
          קצת עליי
        </Heading>

        <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.700" lineHeight="1.8">
          שמי ד, מאמנת אישית המתמחה בליווי אנשים בתהליכי שינוי, צמיחה אישית והגשמת מטרות.
          אני מאמינה כי לכל אדם יש את היכולת ליצור שינוי משמעותי בחייו בעזרת כלים נכונים ותמיכה מתאימה.
        </Text>

        <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.700" lineHeight="1.8">
          במהלך השנים פיתחתי גישה ייחודית שמשלבת בין טכניקות אימון קלאסיות לבין כלים מעולמות הפסיכולוגיה החיובית והמודעות העצמית.
          אני מלווה אנשים במגוון תחומים - קריירה, מערכות יחסים, ביטחון עצמי ופיתוח אישי.
        </Text>

        <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.700" lineHeight="1.8">
          אשמח ללוות גם אותך במסע האישי שלך, ולעזור לך לממש את הפוטנציאל שטמון בך.
        </Text>
      </VStack>
    </Container>
  );
}
