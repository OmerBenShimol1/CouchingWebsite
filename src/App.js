import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import AccessibilityMenu from './components/AccessibilityMenu';
import AccessibilityStatement from './pages/AccessibilityStatement';
import Footer from './components/Footer';



function App() {
  return (
    <Router>
      <div dir="rtl">

      <Header />
      <AccessibilityMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/accessibility" element={<AccessibilityStatement />} />
      </Routes>
      <Footer /> {}
      </div>
    </Router>
  );
}

export default App;
