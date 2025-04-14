import { Heading, Text, Container } from '@chakra-ui/react';

export default function AccessibilityStatement() {
  return (
    <Container maxW="container.md" py={10} dir="rtl">
      <Heading as="h1" size="xl" color="purple.700" mb={4}>
        הצהרת נגישות
      </Heading>
      <Text fontSize="md" color="gray.700" lineHeight="1.8">
        אתר זה מחויב להנגשת התוכן לכלל המשתמשים, כולל אנשים עם מוגבלות.
        האתר עומד בדרישות תקנות שוויון זכויות לאנשים עם מוגבלות,
        ומשתדל לספק חוויית שימוש נוחה לכולם.
      </Text>
    </Container>
  );
}
