import { useState } from 'react';
import {
  Box,
  Heading,
  Text,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  FormErrorMessage,
  Container,
  useToast,
} from '@chakra-ui/react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const toast = useToast();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'יש להזין שם מלא';
    if (!formData.email) {
      newErrors.email = 'יש להזין אימייל';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'אימייל לא תקין';
    }
    if (!formData.message) newErrors.message = 'יש להזין הודעה';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      emailjs
        .send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_PUBLIC_KEY')
        .then(() => {
          toast({
            title: 'ההודעה נשלחה בהצלחה!',
            status: 'success',
            duration: 3000,
            isClosable: true,
          });
          setFormData({ name: '', email: '', message: '' });
        })
        .catch((error) => {
          console.error('EmailJS Error:', error);
          toast({
            title: 'אירעה שגיאה בשליחת ההודעה.',
            status: 'error',
            duration: 4000,
            isClosable: true,
          });
        });
    }
  };

  return (
    <Container maxW="container.sm" py={10} dir="rtl">
      <VStack spacing={6} align="start">
        <Heading as="h1" size={{ base: 'xl', md: '2xl' }} color="purple.700">
          צור קשר
        </Heading>

        <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600">
          רוצה לשמוע עוד או לקבוע פגישה? מלא/י את הטופס ואחזור אליך בהקדם!
        </Text>

        <Box as="form" w="100%" bg="gray.50" p={6} borderRadius="md" boxShadow="lg" onSubmit={handleSubmit}>
          <FormControl id="name" isInvalid={errors.name} mb={4}>
            <FormLabel>שם מלא</FormLabel>
            <Input type="text" value={formData.name} onChange={handleChange} placeholder="הכנס/י את שמך" />
            {errors.name && <FormErrorMessage>{errors.name}</FormErrorMessage>}
          </FormControl>

          <FormControl id="email" isInvalid={errors.email} mb={4}>
            <FormLabel>אימייל</FormLabel>
            <Input type="email" value={formData.email} onChange={handleChange} placeholder="הכנס/י כתובת אימייל" />
            {errors.email && <FormErrorMessage>{errors.email}</FormErrorMessage>}
          </FormControl>

          <FormControl id="message" isInvalid={errors.message} mb={4}>
            <FormLabel>הודעה</FormLabel>
            <Textarea value={formData.message} onChange={handleChange} placeholder="כתוב/י את ההודעה שלך כאן" rows={5} />
            {errors.message && <FormErrorMessage>{errors.message}</FormErrorMessage>}
          </FormControl>

          <Button colorScheme="purple" size={{ base: 'md', md: 'lg' }} w="100%" type="submit">
            שלח/י הודעה
          </Button>
        </Box>
      </VStack>
    </Container>
  );
}
