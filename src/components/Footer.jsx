import { Box, Flex, Text, Link, IconButton, HStack, VStack } from '@chakra-ui/react';
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom';

export default function Footer() {
  return (
    <Box 
      bg="blue.300" 
      color="white" 
      py={2} 
      px={4} 
      dir="rtl"
      position="fixed" 
      bottom="0" 
      left="0" 
      width="100%" 
      zIndex="1000"
    >
      <Flex direction={{ base: 'column', md: 'row' }} justify="space-between" align="center" maxW="1200px" mx="auto">
        
        {/* Contact info */}
        <VStack spacing={1} align="start" mb={{ base: 2, md: 0 }}> {}
          <Text fontWeight="bold" fontSize="sm">צור קשר:</Text> {}
          <Text fontSize="sm">אימייל: <Link href="mailto:gmail.com" color="teal.900">@dws.com</Link></Text>
          <Text fontSize="sm">טלפון: <Link href="tel:+97252" color="teal.900">+972</Link></Text>
          <Text fontSize="sm">כתובת: תל אביב, ישראל</Text>
        </VStack>

        {/* Social networks */}
        <HStack spacing={3}> {}
          <IconButton
            as={Link}
            href="https://www.facebook.com"
            target="_blank"
            icon={<FaFacebook size={28} />}  
            colorScheme="facebook"
            aria-label="Facebook"
            variant="ghost"
          />
          <IconButton
            as={Link}
            href="https://www.instagram.com"
            target="_blank"
            icon={<FaInstagram size={28} />}  
            colorScheme="pink"
            aria-label="Instagram"
            variant="ghost"
          />
          <IconButton
            as={Link}
            href="https://www.linkedin.com"
            target="_blank"
            icon={<FaLinkedin size={28} />} 
            colorScheme="linkedin"
            aria-label="LinkedIn"
            variant="ghost"
          />
          <IconButton
            as={Link}
            href="https://wa.me/972501234567"
            target="_blank"
            icon={<FaWhatsapp size={28} />}  
            colorScheme="whatsapp"
            aria-label="WhatsApp"
            variant="ghost"
          />
        </HStack>
      </Flex>

      {/* זכויות יוצרים */}
      <Text textAlign="center" mt={2} fontSize="xs" color="gray.300">
        © {new Date().getFullYear()} כל הזכויות שמורות ל-ד
      </Text>
    </Box>
  );
}
