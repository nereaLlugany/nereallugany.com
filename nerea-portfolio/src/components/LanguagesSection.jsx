import { useTranslation } from 'react-i18next';

const LanguagesSection = () => {
  const { t } = useTranslation();

  // Helper to get the correct path including repo name
  const getFlagPath = (code) => `/nereallugany.com/assets/flags/${code}.svg`;

  return (
    <>
      <style>{`
        /* Main Container - GRID Layout */
        #language-container {
          display: grid;
          grid-template-columns: repeat(3, auto); 
          gap: 20px;
          justify-content: center;
          padding: 20px 0;
          font-family: 'Inter', sans-serif;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          #language-container { grid-template-columns: repeat(2, auto); }
        }
        @media (max-width: 640px) {
          #language-container { grid-template-columns: repeat(1, auto); }
        }

        /* --- CARD DESIGN --- */
        .lang-card {
          background-color: #2a2a2e !important; 
          border: 1px solid #3e3e46 !important;
          border-radius: 16px;
          padding: 20px;
          width: 160px;
          text-align: center;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15); 
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          z-index: 1;
        }

        .lang-card:hover {
          transform: translateY(-5px) scale(1.02);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          border-color: #6C63FF !important;
        }

        /* Flag Image Styles */
        .lang-flag-img {
          width: 48px;
          height: 36px;
          object-fit: cover; /* Ensures aspect ratio is clean */
          border-radius: 4px; /* Slight rounding for flag look */
          margin-bottom: 15px;
          display: inline-block;
          box-shadow: 0 2px 5px rgba(0,0,0,0.2);
        }

        /* Text Styles */
        .lang-name {
          display: block;
          font-weight: 700;
          color: #ffffff !important;
          margin-bottom: 5px;
          letter-spacing: 0.5px;
          font-size: 1rem;
        }

        .lang-level-text {
          font-size: 0.70rem;
          color: #b0b0b0 !important;
          margin-bottom: 12px;
          display: block;
          text-transform: uppercase;
          min-height: 2.4em;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Progress Bar */
        .progress-bg {
          background: #444444 !important; 
          height: 6px;
          width: 100%;
          border-radius: 10px;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          border-radius: 10px;
          background: linear-gradient(90deg, #00C6FF, #6C63FF) !important; 
        }

        /* Animation */
        @keyframes loadBar {
          from { width: 0%; }
          to { width: var(--target-width); }
        }

        .animate-bar {
          width: 0%; 
          animation: loadBar 1.5s ease-out forwards;
          animation-delay: 0.3s; 
        }
      `}</style>

      <div id="language-container">

        {/* Spanish */}
        <div className="lang-card">
          <img src={getFlagPath('es')} alt="Spanish Flag" className="lang-flag-img" />
          <span className="lang-name">{t('languages.es')}</span>
          <span className="lang-level-text">{t('languages.native')}</span>
          <div className="progress-bg">
            <div className="progress-fill animate-bar" style={{ '--target-width': '100%' }}></div>
          </div>
        </div>

        {/* Catalan */}
        <div className="lang-card">
          <img src={getFlagPath('ca')} alt="Catalan Flag" className="lang-flag-img" />
          <span className="lang-name">{t('languages.ca')}</span>
          <span className="lang-level-text">{t('languages.native')}</span>
          <div className="progress-bg">
            <div className="progress-fill animate-bar" style={{ '--target-width': '100%' }}></div>
          </div>
        </div>

        {/* English */}
        <div className="lang-card">
          <img src={getFlagPath('en')} alt="English Flag" className="lang-flag-img" />
          <span className="lang-name">{t('languages.en')}</span>
          <span className="lang-level-text">{t('languages.en_level')}</span>
          <div className="progress-bg">
            <div className="progress-fill animate-bar" style={{ '--target-width': '92%' }}></div>
          </div>
        </div>

        {/* French */}
        <div className="lang-card">
          <img src="/nereallugany.com/assets/flags/fr.svg" alt="French Flag" className="lang-flag-img" />
          <span className="lang-name">{t('languages.fr')}</span>
          <span className="lang-level-text">{t('languages.fr_level')}</span>
          <div className="progress-bg">
            <div className="progress-fill animate-bar" style={{ '--target-width': '75%' }}></div>
          </div>
        </div>

        {/* Chinese */}
        <div className="lang-card">
          <img src={getFlagPath('zh')} alt="Chinese Flag" className="lang-flag-img" />
          <span className="lang-name">{t('languages.zh')}</span>
          <span className="lang-level-text">HSK 4</span>
          <div className="progress-bg">
            <div className="progress-fill animate-bar" style={{ '--target-width': '60%' }}></div>
          </div>
        </div>

        {/* Korean */}
        <div className="lang-card">
          <img src={getFlagPath('ko')} alt="Korean Flag" className="lang-flag-img" />
          <span className="lang-name">{t('languages.ko')}</span>
          <span className="lang-level-text">TOPIK II</span>
          <div className="progress-bg">
            <div className="progress-fill animate-bar" style={{ '--target-width': '45%' }}></div>
          </div>
        </div>

      </div>
    </>
  );
};

export default LanguagesSection;