import { useState, useEffect } from 'react';
import { Box, Button, VStack, IconButton, Link } from '@chakra-ui/react';
import { FaWheelchair } from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom';

export default function AccessibilityMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState({
    fontSize: 16,
    grayscale: false,
    highContrast: false,
    invertedColors: false,
    lightBackground: false,
    darkBackground: false,
    readableFont: false,
  });

  useEffect(() => {
    const body = document.body;

    // שינוי גודל טקסט לכל האלמנטים
    document.querySelectorAll('p, h1, h2, h3, a, button, label, input, textarea, div, span').forEach(el => {
      el.style.fontSize = `${settings.fontSize}px`;
    });

    // טיפול בגווני אפור
    body.style.filter = settings.grayscale ? 'grayscale(100%)' : 'none';

    // ניגודיות גבוהה
    if (settings.highContrast) {
      body.style.backgroundColor = '#000';
      body.style.color = '#FFD700'; // טקסט בצבע זהב לניגודיות גבוהה
    } 
    // ניגודיות הפוכה
    else if (settings.invertedColors) {
      body.style.filter += ' invert(100%)';
    } 
    // רקע בהיר
    else if (settings.lightBackground) {
      body.style.backgroundColor = '#f9f9f9';
      body.style.color = '#000';
    } 
    // רקע כהה
    else if (settings.darkBackground) {
      body.style.backgroundColor = '#222';
      body.style.color = '#fff';
    } 
    // ברירת מחדל
    else {
      body.style.backgroundColor = 'white';
      body.style.color = 'black';
    }

    // פונט קריא
    body.style.fontFamily = settings.readableFont ? 'Arial, sans-serif' : 'inherit';

  }, [settings]);

  const resetSettings = () => {
    setSettings({
      fontSize: 16,
      grayscale: false,
      highContrast: false,
      invertedColors: false,
      lightBackground: false,
      darkBackground: false,
      readableFont: false,
    });
  };

  return (
    <Box position="fixed" bottom="20px" left="20px" zIndex="2000">
      <IconButton
        icon={<FaWheelchair />}
        onClick={() => setIsOpen(!isOpen)}
        colorScheme="purple"
        aria-label="תפריט נגישות"
        size="lg"
        isRound
      />

      {isOpen && (
        <VStack
          bg="white"
          border="1px solid gray"
          borderRadius="md"
          p={4}
          mt={2}
          boxShadow="lg"
          spacing={3}
          align="stretch"
        >
          <Button onClick={() => setSettings((prev) => ({ ...prev, fontSize: prev.fontSize + 2 }))}>
            הגדל טקסט
          </Button>
          <Button onClick={() => setSettings((prev) => ({ ...prev, fontSize: prev.fontSize > 12 ? prev.fontSize - 2 : prev.fontSize }))}>
            הקטן טקסט
          </Button>
          <Button onClick={() => setSettings((prev) => ({ ...prev, grayscale: !prev.grayscale }))}>
            {settings.grayscale ? 'ביטול גווני אפור' : 'הפעלת גווני אפור'}
          </Button>
          <Button onClick={() => setSettings((prev) => ({ ...prev, highContrast: !prev.highContrast }))}>
            {settings.highContrast ? 'ביטול ניגודיות גבוהה' : 'הפעלת ניגודיות גבוהה'}
          </Button>
          <Button onClick={() => setSettings((prev) => ({ ...prev, invertedColors: !prev.invertedColors }))}>
            {settings.invertedColors ? 'ביטול ניגודיות הפוכה' : 'הפעלת ניגודיות הפוכה'}
          </Button>
          <Button onClick={() => setSettings((prev) => ({ ...prev, lightBackground: !prev.lightBackground, darkBackground: false }))}>
            {settings.lightBackground ? 'ביטול רקע בהיר' : 'הפעלת רקע בהיר'}
          </Button>
          <Button onClick={() => setSettings((prev) => ({ ...prev, darkBackground: !prev.darkBackground, lightBackground: false }))}>
            {settings.darkBackground ? 'ביטול רקע כהה' : 'הפעלת רקע כהה'}
          </Button>
          <Button onClick={() => setSettings((prev) => ({ ...prev, readableFont: !prev.readableFont }))}>
            {settings.readableFont ? 'ביטול פונט קריא' : 'הפעלת פונט קריא'}
          </Button>

          <Button colorScheme="red" onClick={resetSettings}>
            איפוס הגדרות
          </Button>

          <Link as={RouterLink} to="/accessibility" color="blue.500" textAlign="center">
            הצהרת נגישות
          </Link>
        </VStack>
      )}
    </Box>
  );
}
