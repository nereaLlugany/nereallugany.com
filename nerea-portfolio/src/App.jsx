import { useEffect } from 'react';
import { Routes, Route, Navigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects'; // <--- 1. IMPORT THIS

// Wrapper to handle language detection from URL
const LanguageWrapper = () => {
  const { lang } = useParams();
  const { i18n } = useTranslation();
  
  const validLangs = ['en', 'es', 'ca', 'zh', 'ko'];

  useEffect(() => {
    if (validLangs.includes(lang)) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n]);

  if (!validLangs.includes(lang)) {
    return <Navigate to="/en" replace />;
  }

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* 2. UPDATE THIS ROUTE */}
          <Route path="/projects" element={<Projects />} />
          
          <Route path="/services" element={<div className="p-20 text-center">Services Page Placeholder</div>} />
          <Route path="/about" element={<div className="p-20 text-center">About Page Placeholder</div>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/en" replace />} />
      <Route path="/:lang/*" element={<LanguageWrapper />} />
    </Routes>
  );
}

export default App;