import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';
import { Linkedin, Github, Video, MapPin } from 'lucide-react';

const Footer = () => {
  const { t } = useTranslation();
  const { lang } = useParams(); // Get current language to keep links consistent

  // Default to 'en' if lang is undefined (e.g. 404 page)
  const currentLang = lang || 'en';

  return (
    <footer className="bg-black text-white pt-16 pb-12 text-sm border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* 1. Brand Column */}
        <div className="space-y-4">
          <h2 className="text-2xl font-black tracking-tighter">NLM</h2>
          <p className="text-gray-400 leading-relaxed pr-4">
            {t('footer.desc', 'Multimedia Creator & VFX Artist. Building playable prototypes and visuals.')}
          </p>
          <div className="flex items-center gap-2 text-gray-300 font-medium pt-2">
            <MapPin className="text-blue-500 w-4 h-4" />
            <p>{t('footer.location', 'Barcelona, Spain')}</p>
          </div>
        </div>

        {/* 2. Services Column */}
        <div>
          <h3 className="font-bold mb-6 text-white tracking-widest uppercase text-xs">
            {t('footer.col_services', 'SERVICES')}
          </h3>
          <ul className="space-y-3 text-gray-400">
            <li className="hover:text-blue-400 transition cursor-default">{t('footer.serv_1', '2D & 3D animations')}</li>
            <li className="hover:text-blue-400 transition cursor-default">{t('footer.serv_2', 'Motion graphics & Identity')}</li>
            <li className="hover:text-blue-400 transition cursor-default">{t('footer.serv_3', 'Video post-production')}</li>
            <li className="hover:text-blue-400 transition cursor-default">{t('footer.serv_4', 'Unity & Unreal prototyping')}</li>
          </ul>
        </div>

        {/* 3. Navigation Column */}
        <div>
          <h3 className="font-bold mb-6 text-white tracking-widest uppercase text-xs">
            {t('footer.col_nav', 'NAVIGATION')}
          </h3>
          <ul className="space-y-3 text-gray-400">
            <li>
              <Link to={`/${currentLang}`} className="hover:text-blue-400 transition">
                {t('nav.home')}
              </Link>
            </li>
            <li>
              <Link to={`/${currentLang}/projects`} className="hover:text-blue-400 transition">
                {t('nav.projects')}
              </Link>
            </li>
            <li>
              <Link to={`/${currentLang}/services`} className="hover:text-blue-400 transition">
                {t('nav.services')}
              </Link>
            </li>
            <li>
              <Link to={`/${currentLang}/about`} className="hover:text-blue-400 transition">
                {t('nav.about')}
              </Link>
            </li>
          </ul>
        </div>

        {/* 4. Connect Column */}
        <div>
          <h3 className="font-bold mb-6 text-white tracking-widest uppercase text-xs">
            {t('footer.col_connect', 'CONNECT')}
          </h3>
          <div className="flex gap-4 mb-6">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="bg-gray-800 hover:bg-[#0077b5] p-2.5 rounded-lg transition text-white">
              <Linkedin size={20} />
            </a>
            <a href="https://behance.net" target="_blank" rel="noreferrer" className="bg-gray-800 hover:bg-[#1769ff] p-2.5 rounded-lg transition text-white">
              <Video size={20} /> {/* Behance proxy */}
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="bg-gray-800 hover:bg-[#333] p-2.5 rounded-lg transition text-white">
              <Github size={20} />
            </a>
          </div>
          <p className="text-xs text-gray-500">
            © 2025 Nerea Llugany. <br />
            {t('footer.rights', 'All rights reserved.')}
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;