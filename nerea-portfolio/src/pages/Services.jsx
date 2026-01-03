import { useTranslation } from 'react-i18next';
import CTASection from '../components/CTASection'; 
import { ArrowRight, User, MessageCircle, HeartHandshake } from 'lucide-react';

const Services = () => {
  const { t } = useTranslation();

  // Helper to safely get arrays from translations
  const getList = (key) => {
    const result = t(key, { returnObjects: true });
    return Array.isArray(result) ? result : [];
  };

  const services = [
    {
      id: 'graphic',
      img: '/nereallugany.com/assets/imgs/GraphicDesign.png', 
      title: t('services.graphic'),
      desc: t('services.graphic_desc'),
      list: getList('services.graphic_list'),
      btn: t('services.explore_design')
    },
    {
      id: 'motion',
      img: '/nereallugany.com/assets/imgs/MotionGraphics.png',
      title: t('services.motion'),
      desc: t('services.motion_desc'),
      list: getList('services.motion_list'),
      btn: t('services.view_motion')
    },
    {
      id: 'anim',
      img: '/nereallugany.com/assets/imgs/Animation.png',
      title: t('services.anim'),
      desc: t('services.anim_desc'),
      list: getList('services.anim_list'),
      btn: t('services.explore_anim')
    }
  ];

  // Updated Philosophies with specific colors for each card
  const philosophies = [
    {
      icon: <User className="w-8 h-8 text-blue-600" />, 
      colorClass: "bg-blue-50 text-blue-600", // Light blue bg for icon
      titleColor: "text-blue-700", // Darker blue for title
      title: t('services.phil_1_title'),
      desc: t('services.phil_1_desc')
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-teal-600" />,
      colorClass: "bg-teal-50 text-teal-600", // Light teal bg
      titleColor: "text-teal-700", // Darker teal for title
      title: t('services.phil_2_title'),
      desc: t('services.phil_2_desc')
    },
    {
      icon: <HeartHandshake className="w-8 h-8 text-purple-600" />,
      colorClass: "bg-purple-50 text-purple-600", // Light purple bg
      titleColor: "text-purple-700", // Darker purple for title
      title: t('services.phil_3_title'),
      desc: t('services.phil_3_desc')
    }
  ];

  return (
    <div className="bg-[#4B5563] min-h-screen py-10 px-4 md:px-8">
      
      {/* 1. HERO HEADER */}
      <div className="max-w-7xl mx-auto mb-10 text-center">
        <h1 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter drop-shadow-md">
          {t('services.page_title', 'SERVICES')}
        </h1>
      </div>

      {/* 2. SERVICES CARDS SECTION */}
      <section className="max-w-7xl mx-auto space-y-8 mb-20">
        {services.map((service, index) => (
          <div key={index} className="bg-white rounded-[2.5rem] shadow-xl p-8 md:p-16 flex flex-col md:flex-row items-center gap-12">
            
            {/* Image Column */}
            <div className="w-full md:w-1/2 flex justify-center">
              <img 
                src={service.img} 
                alt={service.title} 
                className="w-full max-w-sm object-contain drop-shadow-lg"
              />
            </div>

            {/* Content Column */}
            <div className="w-full md:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{service.title}</h2>
              <p className="text-gray-600 text-lg leading-relaxed">{service.desc}</p>
              
              {/* List Items with Horizontal Dividers */}
              <div className="flex flex-col border-t border-black/10 mt-6">
                {service.list.map((item, i) => (
                  <div key={i} className="py-3 border-b border-black/10 flex items-center">
                    <span className="text-xs md:text-sm font-bold text-gray-900 uppercase tracking-wider">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-6 pt-6">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold text-sm hover:bg-blue-700 transition shadow-lg shadow-blue-500/30">
                  {service.btn}
                </button>
                <button className="text-gray-500 font-bold text-xs flex items-center gap-1 hover:text-gray-900 transition">
                  {t('services.get_demo', 'Get demo')} <ArrowRight size={14} />
                </button>
              </div>
            </div>

          </div>
        ))}
      </section>

      {/* 3. PHILOSOPHY SECTION (UPDATED: COLORFUL CARDS) */}
      <section className="max-w-7xl mx-auto mb-16">
        <div className="text-center mb-12">
          <div className="inline-block border border-white/30 bg-white/10 backdrop-blur-md rounded-full px-4 py-1.5 mb-6">
             <span className="text-xs font-bold tracking-widest text-white uppercase">
                {t('services.phil_badge', 'MY PHILOSOPHY')}
             </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white drop-shadow-md">
            {t('services.phil_title', 'What to expect')}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {philosophies.map((phil, index) => (
            <div key={index} className="bg-white p-8 rounded-[2rem] shadow-xl flex flex-col items-start gap-4 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 relative overflow-hidden group">
              
              {/* Decorative top border line (optional polish) */}
              <div className={`absolute top-0 left-0 w-full h-2 ${phil.colorClass.split(' ')[0].replace('bg-', 'bg-')}`}></div>

              {/* Icon Container with specific color */}
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-2 ${phil.colorClass}`}>
                {phil.icon}
              </div>
              
              {/* Title with specific color */}
              <h3 className={`text-2xl font-bold ${phil.titleColor}`}>{phil.title}</h3>
              
              <p className="text-gray-600 text-base leading-relaxed">
                {phil.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. CTA SECTION */}
      <CTASection />

    </div>
  );
};

export default Services;