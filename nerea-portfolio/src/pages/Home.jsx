import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom'; // Import Link & useParams
import { ArrowRight, Github, Linkedin } from 'lucide-react';
import { projectsList } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import ProcessSection from '../components/ProcessSection';
import SkillsSection from '../components/SkillsSection';
import PortraitFrame from '../components/PortraitFrame';
import CTASection from '../components/CTASection'; // Import the new CTA

const Home = () => {
  const { t } = useTranslation();
  const { lang } = useParams(); // Get language for links

  // Sorting Logic: Newest date first
  const sortedProjects = [...projectsList].sort((a, b) => new Date(b.date) - new Date(a.date));
  // Take the top 4
  const recentProjects = sortedProjects.slice(0, 4);

  return (
    <div className="bg-[#4B5563] min-h-screen py-10 px-4 md:px-8 space-y-10">

      {/* =========================================
          1. HERO SECTION
         ========================================= */}
      <section className="max-w-7xl mx-auto bg-white rounded-[2.5rem] shadow-2xl overflow-hidden p-8 md:p-16 relative">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">

          <div className="flex-1 space-y-8">
            <div className="inline-block border border-gray-800 rounded-full px-4 py-1.5">
              <span className="text-[10px] md:text-xs font-bold tracking-widest text-gray-800 uppercase">
                {t('hero.role', 'MULTIMEDIA CREATOR - DESIGN, ANIMATIONS & GAME ART')}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-gray-900 leading-[1.1]">
              {t('hero.title_start', "Hi! I'm")} <span className="font-black">{t('hero.name', "Nerea")}</span>, {t('hero.title_end', "I design bold visuals and animations.")}
            </h1>

            <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
              {t('hero.desc', "I build playable prototypes for Unity and Unreal, and design high-quality 3D & 2D animations, motion graphics, game assets, graphic design and realtime VFX for games, apps, websites and campaigns.")}
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link 
                to={`/${lang}/projects`}
                className="bg-[#0099ff] hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-bold transition shadow-lg shadow-blue-500/30"
              >
                {t('hero.btn_projects', "View Projects")}
              </Link>
              <button className="bg-gradient-to-r from-red-500 to-pink-500 hover:opacity-90 text-white px-8 py-3 rounded-lg font-bold transition shadow-lg shadow-pink-500/30">
                {t('hero.btn_reel', "Watch Reel")}
              </button>
              <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:opacity-90 text-white px-8 py-3 rounded-lg font-bold transition shadow-lg shadow-indigo-500/30">
                {t('hero.btn_cv', "Download CV")}
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full max-w-md lg:w-[450px] flex justify-center">
             <PortraitFrame imageSrc="#" />
          </div>

        </div>
      </section>

      {/* =========================================
          3. SERVICES SECTION
         ========================================= */}
      <section className="max-w-7xl mx-auto bg-white rounded-[2.5rem] shadow-2xl p-8 md:p-16">
        <div className="mb-12">
          <div className="inline-block border border-gray-800 rounded-full px-4 py-1.5 mb-6">
            <span className="text-xs font-bold tracking-widest text-gray-800 uppercase">
              {t('services.pill', 'WHAT I OFFER')}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            {t('services.heading', 'Design. Express. Animate. Create.')}
          </h2>
          <p className="text-gray-600 max-w-3xl text-lg">
            {t('services.subheading', 'I transform ideas into brand-first visual systems, dynamic motion graphics, and high-quality 2D & 3D animations that perform across every platform.')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">

          {/* Card 1: Graphic Design */}
          <div className="bg-gradient-to-b from-sky-300 to-teal-200 rounded-3xl p-8 flex flex-col justify-between text-white min-h-[450px]">
            <div className="flex flex-col items-center">
              <img
                src="/src/assets/imgs/GraphicDesign.png"
                alt="Graphic Design"
                className="w-full h-48 object-contain mb-6 filter drop-shadow-lg"
              />
              <h3 className="text-3xl font-bold mb-3 text-center">{t('services.graphic', 'Graphic Design')}</h3>
              <p className="text-white/95 text-base leading-relaxed font-medium text-center">
                {t('services.graphic_desc', 'Brand systems and campaign visuals designed to convert across web, ads, print and physical merchandise.')}
              </p>
            </div>
            <button className="bg-[#007bff] hover:bg-blue-600 py-3 px-6 rounded-lg self-center text-sm font-bold mt-6 flex items-center gap-2 transition shadow-md">
              {t('services.learn_more', 'Learn more')} <ArrowRight size={14} />
            </button>
          </div>

          {/* Card 2: Motion Graphics */}
          <div className="bg-gradient-to-b from-blue-300 to-purple-300 rounded-3xl p-8 flex flex-col justify-between text-white min-h-[450px]">
            <div className="flex flex-col items-center">
              <img
                src="/src/assets/imgs/MotionGraphics.png"
                alt="Motion Graphics"
                className="w-full h-48 object-contain mb-6 filter drop-shadow-lg"
              />
              <h3 className="text-3xl font-bold mb-3 text-center">{t('services.motion', 'Motion Graphics')}</h3>
              <p className="text-white/95 text-base leading-relaxed font-medium text-center">
                {t('services.motion_desc', 'Cinematic trailers and micro-motion tailored for performance, from hero videos to 6s social cutdowns.')}
              </p>
            </div>
            <button className="bg-[#007bff] hover:bg-blue-600 py-3 px-6 rounded-lg self-center text-sm font-bold mt-6 flex items-center gap-2 transition shadow-md">
              {t('services.learn_more', 'Learn more')} <ArrowRight size={14} />
            </button>
          </div>

          {/* Card 3: Animation */}
          <div className="bg-gradient-to-b from-pink-300 to-orange-200 rounded-3xl p-8 flex flex-col justify-between text-white min-h-[450px]">
            <div className="flex flex-col items-center">
              <img
                src="/src/assets/imgs/Animation.png"
                alt="Animation"
                className="w-full h-48 object-contain mb-6 filter drop-shadow-lg"
              />
              <h3 className="text-3xl font-bold mb-3 text-center">{t('services.anim', '2D & 3D Animation')}</h3>
              <p className="text-white/95 text-base leading-relaxed font-medium text-center">
                {t('services.anim_desc', 'From stylized 2D motion to production 3D characters and game-ready asset pipelines for Unity and Unreal.')}
              </p>
            </div>
            <button className="bg-[#007bff] hover:bg-blue-600 py-3 px-6 rounded-lg self-center text-sm font-bold mt-6 flex items-center gap-2 transition shadow-md">
              {t('services.learn_more', 'Learn more')} <ArrowRight size={14} />
            </button>
          </div>

        </div>

        <div className="mt-12 flex flex-col md:flex-row items-center justify-between border-t border-gray-100 pt-8">
          <p className="font-bold text-gray-800 mb-4 md:mb-0">
            {t('services.cta_text', 'Curious how your idea could look in motion or design?')}
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-bold text-sm">
            {t('services.cta_btn', 'Request a brief call')}
          </button>
        </div>
      </section>

      {/* =========================================
          4. PROCESS SECTION
         ========================================= */}
      <section className="max-w-7xl mx-auto bg-white rounded-[2.5rem] shadow-2xl p-8 md:p-16">
        <ProcessSection />
      </section>

      {/* =========================================
          5. SKILLS & TOOLS SECTION
         ========================================= */}
      <section className="max-w-7xl mx-auto bg-white rounded-[2.5rem] shadow-2xl p-8 md:p-16">
        <div className="mb-10">
          <div className="inline-block border border-gray-800 rounded-full px-4 py-1.5 mb-6">
            <span className="text-xs font-bold tracking-widest text-gray-800 uppercase">
              {t('skills.section_pill', 'SKILLS & TOOLS')}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900">
            {t('skills.section_title', 'What I can build')}
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl text-lg">
            {t('skills.section_desc', 'I have capabilities in front-end and back-end webpages and apps, production 2D/3D animations, motion graphics, and engine ready game assets.')}
          </p>
        </div>

        <SkillsSection />

        <div className="mt-8 text-center">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold text-sm hover:bg-blue-700 transition">
            {t('skills.see_work_btn', 'See my work and designs')}
          </button>
        </div>
      </section>

      {/* =========================================
          6. PORTFOLIO GRID SECTION (Using Sorted Projects)
         ========================================= */}
      <section className="max-w-7xl mx-auto bg-white rounded-[2.5rem] shadow-2xl p-8 md:p-16">

        <div className="mb-10">
          <div className="inline-block border border-gray-800 rounded-full px-4 py-1.5 mb-6">
            <span className="text-xs font-bold tracking-widest text-gray-800 uppercase">
              {t('portfolio.pill', 'BEST WORK SO FAR')}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900">
            {t('portfolio.title', 'Multimedia portfolio: games, apps & post-production')}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {recentProjects.map((project) => (
            <div key={project.id} className="h-full">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link 
            to={`/${lang}/projects`}
            className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold text-sm hover:bg-blue-700 transition inline-block"
          >
            {t('portfolio.browse_all', 'Browse all work')}
          </Link>
        </div>
      </section>

      {/* =========================================
          2. ABOUT ME SECTION
         ========================================= */}
      <section className="max-w-7xl mx-auto bg-white rounded-[2.5rem] shadow-2xl p-8 md:p-16">
        <div className="mb-8">
          <div className="inline-block border border-gray-800 rounded-full px-4 py-1.5 mb-6">
            <span className="text-xs font-bold tracking-widest text-gray-800 uppercase">
              {t('about.pill', 'ABOUT ME')}
            </span>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Profile Image Column */}
          <div className="w-full lg:w-1/3">
            <div className="rounded-2xl overflow-hidden aspect-[3/4] bg-gray-100 border-4 border-white shadow-lg">
              <img src="/your-about-photo.jpg" alt="About Nerea" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Content Column */}
          <div className="w-full lg:w-2/3 space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              {t('about.heading', 'I create 3D & 2D animations, motion-driven visuals and engine-ready game assets.')}
            </h2>

            <div className="text-gray-600 text-base space-y-4 leading-relaxed">
              <p>
                {t('about.p1', 'I am Nerea Wenting Llugany Montoya. I specialize in 3D and 2D animation, motion graphics and graphic design, and I develop game assets ready for Unity & Unreal.')}
              </p>
              <p>
                {t('about.p2', 'My focus is on craft and integration, polished animation loops, VFX-ready elements and asset packages that plug directly into game engines or production pipelines.')}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-bold text-sm hover:bg-blue-700 transition">
                {t('about.btn_story', 'Read my full story')}
              </button>
              <button className="bg-[#0099ff] text-white px-6 py-2.5 rounded-lg font-bold text-sm hover:bg-blue-600 transition">
                {t('about.btn_unity', 'View Unity project')}
              </button>
              <button className="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-bold text-sm hover:bg-blue-700 transition">
                {t('about.btn_email', 'Email me →')}
              </button>
            </div>

            {/* Footer Info */}
            <div className="pt-6 border-t border-gray-100 text-[11px] md:text-xs text-gray-500 font-medium space-y-1.5">
              <p><span className="text-gray-900 font-bold">Availability:</span> {t('about.avail', 'freelance and junior roles.')}</p>
              <p><span className="text-gray-900 font-bold">Deliverables:</span> FBX · GLTF · PSD · AI · AEP · MP4 · Sprite sheets.</p>
              <p><span className="text-gray-900 font-bold">Languages:</span> Spanish · Catalan · English · French · Chinese</p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4 text-gray-800 pt-2">
              <span className="font-black text-lg cursor-pointer hover:text-blue-600">Bē</span>
              <Github className="w-5 h-5 cursor-pointer hover:text-blue-600" />
              <Linkedin className="w-5 h-5 cursor-pointer hover:text-blue-600" />
              <span className="font-bold text-lg cursor-pointer hover:text-blue-600">v</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          7. BOTTOM CTA SECTION (NEW COMPONENT)
         ========================================= */}
      <CTASection />

    </div>
  );
};

export default Home;