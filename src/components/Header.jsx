import { Link, useLocation } from 'react-router-dom';
import { Box, Flex, Text, HStack, IconButton, useDisclosure, VStack, Image, Collapse } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import logo from '../assets/logo.jpg';

export default function Header() {
  const { isOpen, onToggle } = useDisclosure();
  const location = useLocation();

  const navLinks = [
    { name: 'בית', path: '/' },
    { name: 'אודות', path: '/about' },
    { name: 'שירותים', path: '/services' },
    { name: 'צור קשר', path: '/contact' },
  ];

  return (
    <Box bgGradient="linear(to-r, blue.500, purple.600)" px={4} color="white" shadow="xl" position="sticky" top="0" zIndex="1000" dir="rtl">
      <Flex h={16} alignItems="center" justifyContent="space-between" px={{ base: 2, md: 4 }}>
        <Flex alignItems="center" gap={2}>
          <Link to="/">
            <Image src={logo} alt="DanaWS Logo" boxSize={{ base: '30px', md: '40px' }} borderRadius="full" cursor="pointer" />
          </Link>
          <Text fontSize={{ base: 'lg', md: '2xl' }} fontWeight="bold" _hover={{ transform: 'scale(1.05)' }} transition="0.3s">
            ד - אימון אישי
          </Text>
        </Flex>

        <IconButton
          size="md"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label="פתח תפריט"
          display={{ base: 'block', md: 'none' }}
          onClick={onToggle}
          variant="ghost"
          _hover={{ bg: 'purple.500' }}
        />

        <HStack as="nav" spacing={4} display={{ base: 'none', md: 'flex' }}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              style={{
                padding: '8px 16px',
                borderRadius: '8px',
                backgroundColor: location.pathname === link.path ? '#805AD5' : 'transparent',
                transition: '0.3s',
              }}
            >
              {link.name}
            </Link>
          ))}
        </HStack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <VStack bg="purple.600" p={4} display={{ md: 'none' }} spacing={4} align="stretch">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              style={{
                padding: '8px 16px',
                borderRadius: '8px',
                backgroundColor: location.pathname === link.path ? '#6B46C1' : 'transparent',
                transition: '0.3s',
                textAlign: 'center',
              }}
              onClick={onToggle}
            >
              {link.name}
            </Link>
          ))}
        </VStack>
      </Collapse>
    </Box>
  );
}
