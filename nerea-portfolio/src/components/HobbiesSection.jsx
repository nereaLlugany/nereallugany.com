import { useTranslation } from 'react-i18next';
import { Plane, Clapperboard, Languages, Palette } from 'lucide-react';

const HobbiesSection = () => {
  const { t } = useTranslation();

  const hobbies = [
    {
      icon: <Plane className="w-10 h-10 text-blue-500" />,
      title: t('hobbies.travel_title', 'Explore & Travel'),
      desc: t('hobbies.travel_desc', 'Curiosity is my main engine. I love walking through nature or traveling to new cities to understand different cultures.')
    },
    {
      icon: <Clapperboard className="w-10 h-10 text-pink-500" />,
      title: t('hobbies.cinema_title', 'Cinema & Culture'),
      desc: t('hobbies.cinema_desc', 'I am a consumer of stories. Whether listening to music or analyzing cinematography, art fuels my work.')
    },
    {
      icon: <Languages className="w-10 h-10 text-yellow-500" />,
      title: t('hobbies.lang_title', 'Language Learning'),
      desc: t('hobbies.lang_desc', 'I challenge myself by learning new languages. It connects to my goal of working internationally.')
    },
    {
      icon: <Palette className="w-10 h-10 text-purple-500" />,
      title: t('hobbies.creative_title', 'Creative Play'),
      desc: t('hobbies.creative_desc', 'Creation is a habit. I spend free time sketching, drawing, or experimenting with micro-animations just for fun.')
    }
  ];

  return (
    <section className="max-w-7xl mx-auto bg-white rounded-[2.5rem] shadow-xl p-8 md:p-16 mb-16 text-center">
      
      <div className="mb-12">
        <div className="inline-block border border-gray-800 rounded-full px-4 py-1.5 mb-6">
          <span className="text-xs font-bold tracking-widest text-gray-800 uppercase">
            {t('hobbies.badge', 'MY WORLD')}
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight whitespace-pre-line">
          {t('hobbies.title', 'When I do \nwhen I am not working')}
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {hobbies.map((hobby, index) => (
          <div key={index} className="flex flex-col items-center text-center group">
            <div className="bg-gray-50 p-6 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm">
              {hobby.icon}
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">{hobby.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              {hobby.desc}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
};

export default HobbiesSection;