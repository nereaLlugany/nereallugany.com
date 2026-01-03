import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';
import CTASection from '../components/CTASection';
import LanguagesSection from '../components/LanguagesSection';
import SkillsSection from '../components/SkillsSection'; // Reuse from Home
import HobbiesSection from '../components/HobbiesSection'; // New Component

const About = () => {
  const { t } = useTranslation();
  const { lang } = useParams();

  // Helper for image paths
  const getPath = (path) => `/nereallugany.com/assets/imgs/${path}`;

  // Helper to safely get arrays from translations
  const getExperienceList = () => {
    const result = t('about.exp_list', { returnObjects: true });
    return Array.isArray(result) ? result : [];
  };

  const experiences = getExperienceList();

  return (
    <div className="bg-[#4B5563] min-h-screen py-10 px-4 md:px-8">
      
      {/* 1. HERO HEADER */}
      <div className="max-w-7xl mx-auto mb-10 text-center">
        <h1 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter drop-shadow-md">
          {t('about.page_title', 'ABOUT')}
        </h1>
      </div>

      {/* 2. INTRO CARD (Photo + Text) */}
      <section className="max-w-7xl mx-auto bg-white rounded-[2.5rem] shadow-xl p-8 md:p-12 mb-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start">
          
          {/* Photo Column */}
          <div className="w-full lg:w-1/3">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-gray-100 shadow-lg border-4 border-white">
              <img 
                src={getPath('profile.jpg')} 
                alt="Nerea Wenting" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>

          {/* Text Column */}
          <div className="w-full lg:w-2/3 space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              {t('about.hero_title')}
            </h2>
            <div className="text-gray-600 text-lg space-y-4 leading-relaxed">
              <p>{t('about.hero_p1')}</p>
              <p>{t('about.hero_p2')}</p>
            </div>
            <div className="flex gap-4 pt-4">
              <button className="bg-[#0066FF] text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-blue-700 transition shadow-lg">
                {t('about.btn_resume')}
              </button>
              <Link to={`/${lang}/projects`} className="bg-[#0066FF] text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-blue-700 transition shadow-lg">
                {t('about.btn_portfolio')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. EXPERIENCE SECTION ("Journey so far") */}
      <section className="max-w-7xl mx-auto bg-white rounded-[2.5rem] shadow-xl p-8 md:p-12 mb-10">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Title */}
          <div className="lg:col-span-4">
            <div className="inline-block border border-gray-800 rounded-full px-4 py-1.5 mb-6">
              <span className="text-xs font-bold tracking-widest text-gray-800 uppercase">
                {t('about.exp_badge')}
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-none">
              {t('about.exp_title')}
            </h2>
          </div>
          {/* List */}
          <div className="lg:col-span-8 space-y-0 mt-4 lg:mt-0">
            {experiences.map((exp, index) => (
              <div key={index} className="flex flex-col md:flex-row justify-between items-baseline py-5 border-b border-black/10 last:border-0">
                <div className="mb-1 md:mb-0">
                  <h3 className="font-bold text-lg text-gray-900">{exp.role}</h3>
                  {exp.company && <p className="text-sm text-gray-500 font-medium">{exp.company}</p>}
                </div>
                <span className="text-xs font-bold text-gray-400 uppercase text-right w-32 shrink-0">
                  {exp.date}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SKILLS SECTION (Added) */}
      <section className="max-w-7xl mx-auto bg-white rounded-[2.5rem] shadow-xl p-8 md:p-12 mb-10">
         <div className="mb-10">
            <div className="inline-block border border-gray-800 rounded-full px-4 py-1.5 mb-6">
                <span className="text-xs font-bold tracking-widest text-gray-800 uppercase">
                    {t('skills.section_pill')}
                </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                {t('skills.section_title')}
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl text-lg">
                {t('skills.section_desc')}
            </p>
        </div>
        <SkillsSection />
        <div className="mt-8 text-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold text-sm hover:bg-blue-700 transition">
                {t('skills.see_work_btn')}
            </button>
        </div>
      </section>

      {/* 5. LANGUAGES SECTION ("Unlocked Regions") */}
      <section className="max-w-7xl mx-auto bg-white rounded-[2.5rem] shadow-xl p-8 md:p-12 mb-10">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="w-full lg:w-1/4">
            <div className="inline-block border border-gray-800 rounded-full px-4 py-1.5 mb-6">
              <span className="text-xs font-bold tracking-widest text-gray-800 uppercase">
                {t('about.lang_badge')}
              </span>
            </div>
          </div>
          <div className="w-full lg:w-3/4 flex justify-center lg:justify-start">
             <LanguagesSection />
          </div>
        </div>
      </section>

      {/* 6. HOBBIES SECTION (New) */}
      <HobbiesSection />

      {/* 7. CTA SECTION */}
      <CTASection />

    </div>
  );
};

export default About;