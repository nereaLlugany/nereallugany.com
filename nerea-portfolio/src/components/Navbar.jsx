import { useState, useRef, useEffect } from 'react';
import { Link, useParams, useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ChevronDown, Menu, X } from 'lucide-react';

import flagEn from '../assets/flags/en.svg';
import flagEs from '../assets/flags/es.svg';
import flagCa from '../assets/flags/ca.svg';
import flagZh from '../assets/flags/zh.svg';
import flagKo from '../assets/flags/ko.svg';

const Navbar = () => {
  const { t } = useTranslation();
  const { lang } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const dropdownRef = useRef(null);

  const languages = [
    { code: 'en', flag: flagEn, label: 'English' },
    { code: 'es', flag: flagEs, label: 'Español' },
    { code: 'ca', flag: flagCa, label: 'Català' },
    { code: 'zh', flag: flagZh, label: '中文' },
    { code: 'ko', flag: flagKo, label: '한국어' }
  ];

  const currentLang = languages.find(l => l.code === lang) || languages[0];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const handleLangChange = (code) => {
    const currentPath = location.pathname;
    let newPath = currentPath;
    if (currentPath.match(/^\/[a-z]{2}(\/|$)/)) {
        newPath = currentPath.replace(/^\/[a-z]{2}/, `/${code}`);
    } else {
        newPath = `/${code}${currentPath}`;
    }
    navigate(newPath);
    setIsDropdownOpen(false);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-[#333333] text-white h-16 sticky top-0 z-50 shadow-md">
      {/* Changed: Removed 'justify-between', added 'items-center' */}
      <div className="max-w-7xl mx-auto px-4 h-full flex items-center">
        
        {/* --- LOGO --- */}
        {/* Added mr-8 or mr-12 to create space between Logo and Links */}
        <Link 
          to={`/${lang}`} 
          className="flex items-center gap-2 font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 hover:opacity-80 transition z-50 mr-12"
        >
           <span>NLM</span>
        </Link>

        {/* --- DESKTOP LINKS --- */}
        {/* These will now sit right next to the logo because 'justify-between' is gone */}
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
          <Link to={`/${lang}`} className="hover:text-white transition">{t('nav.home')}</Link>
          <Link to={`/${lang}/projects`} className="hover:text-white transition">{t('nav.projects')}</Link>
          <Link to={`/${lang}/services`} className="hover:text-white transition">{t('nav.services')}</Link>
          <Link to={`/${lang}/about`} className="hover:text-white transition">{t('nav.about')}</Link>
        </div>

        {/* --- RIGHT SIDE (Language & Mobile Toggle) --- */}
        {/* Added 'ml-auto' to push this group to the far right */}
        <div className="ml-auto flex items-center gap-4 md:gap-6">
          
          {/* Language Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-2 text-sm font-medium hover:text-gray-300 transition focus:outline-none"
            >
              <img 
                src={currentLang.flag} 
                alt={currentLang.label} 
                className="w-5 h-5 rounded-full object-cover" 
              />
              <span className="hidden md:inline">{currentLang.label}</span>
              <ChevronDown size={14} className={`transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute top-full right-0 mt-3 w-40 bg-[#2b2b2b] border border-gray-700 rounded-lg shadow-xl overflow-hidden py-1 z-50">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => handleLangChange(l.code)}
                    className={`w-full text-left px-4 py-2.5 text-sm flex items-center gap-3 hover:bg-[#3d3d3d] transition
                      ${currentLang.code === l.code ? 'text-blue-400 font-bold bg-[#333]' : 'text-gray-300'}
                    `}
                  >
                    <img src={l.flag} alt={l.label} className="w-5 h-5 rounded-full object-cover" />
                    <span>{l.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
          
          {/* Desktop Contact Button */}
          <button className="hidden md:block bg-[#0066FF] hover:bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold transition shadow-lg shadow-blue-500/20">
            {t('nav.contact')}
          </button>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-300 hover:text-white focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* --- MOBILE MENU OVERLAY --- */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-[#333333] border-t border-gray-700 shadow-2xl py-6 px-6 flex flex-col gap-4">
          <Link to={`/${lang}`} className="text-lg font-medium text-gray-300 hover:text-white py-2 border-b border-gray-700">
            {t('nav.home')}
          </Link>
          <Link to={`/${lang}/projects`} className="text-lg font-medium text-gray-300 hover:text-white py-2 border-b border-gray-700">
            {t('nav.projects')}
          </Link>
          <Link to={`/${lang}/services`} className="text-lg font-medium text-gray-300 hover:text-white py-2 border-b border-gray-700">
            {t('nav.services')}
          </Link>
          <Link to={`/${lang}/about`} className="text-lg font-medium text-gray-300 hover:text-white py-2 border-b border-gray-700">
            {t('nav.about')}
          </Link>
          
          <button className="bg-[#0066FF] text-white py-3 rounded-lg font-bold mt-4 shadow-lg shadow-blue-500/20">
            {t('nav.contact')}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;