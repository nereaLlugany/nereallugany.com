import { useTranslation } from 'react-i18next';

const CTASection = () => {
  const { t } = useTranslation();

  return (
    <section className="max-w-7xl mx-auto bg-white rounded-[2.5rem] shadow-2xl p-16 text-center">
      <div className="inline-block border border-gray-800 rounded-full px-4 py-1.5 mb-6">
        <span className="text-xs font-bold tracking-widest text-gray-800 uppercase">
          {t('cta.pill', 'READY TO MOVE YOUR IDEA?')}
        </span>
      </div>

      <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 max-w-4xl mx-auto leading-tight">
        {t('cta.title', 'Bring words to life, turning concepts into cinematic visuals, animations & game assets.')}
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-4">
        <button className="bg-[#0099ff] hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-bold transition shadow-lg shadow-blue-500/30">
          {t('cta.btn_pricing', 'Request pricing')}
        </button>
        <div className="text-gray-600 text-sm font-medium">
          {t('cta.or', 'or email me')} <a href="mailto:nerea.llugany.montoya@gmail.com" className="text-gray-900 font-bold border-b-2 border-gray-900 hover:text-blue-600 hover:border-blue-600 transition">nerea.llugany.montoya@gmail.com</a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;