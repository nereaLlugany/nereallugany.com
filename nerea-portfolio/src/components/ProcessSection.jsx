import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown, ChevronUp, FileText } from 'lucide-react';

const ProcessSection = () => {
  const { t } = useTranslation();
  const [openOutputId, setOpenOutputId] = useState(null);

  const toggleOutput = (id) => {
    setOpenOutputId(openOutputId === id ? null : id);
  };

  // We define steps here so we can use t() to get fresh translations on language change
  const steps = [
    {
      id: 1,
      title: t('process.steps.1.title'),
      desc: t('process.steps.1.desc'),
      outputs: t('process.steps.1.outputs', { returnObjects: true }) // Returns array from JSON
    },
    {
      id: 2,
      title: t('process.steps.2.title'),
      desc: t('process.steps.2.desc'),
      outputs: t('process.steps.2.outputs', { returnObjects: true })
    },
    {
      id: 3,
      title: t('process.steps.3.title'),
      desc: t('process.steps.3.desc'),
      outputs: t('process.steps.3.outputs', { returnObjects: true })
    },
    {
      id: 4,
      title: t('process.steps.4.title'),
      desc: t('process.steps.4.desc'),
      outputs: t('process.steps.4.outputs', { returnObjects: true })
    },
    {
      id: 5,
      title: t('process.steps.5.title'),
      desc: t('process.steps.5.desc'),
      outputs: t('process.steps.5.outputs', { returnObjects: true })
    },
    {
      id: 6,
      title: t('process.steps.6.title'),
      desc: t('process.steps.6.desc'),
      outputs: t('process.steps.6.outputs', { returnObjects: true })
    }
  ];

  return (
    <div className="grid lg:grid-cols-12 gap-12">
      {/* Sticky Left Column */}
      <div className="lg:col-span-5 space-y-8 sticky top-24 h-fit">
        <div className="inline-block border border-gray-800 rounded-full px-4 py-1.5">
          <span className="text-xs font-bold tracking-widest text-gray-800 uppercase">
             {t('process.badge')}
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
           {t('process.title')}
        </h2>
        <p className="text-gray-600 text-lg">
           {t('process.desc')}
        </p>
        <div className="flex flex-wrap gap-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition">
                {t('process.btn_consult')}
            </button>
             <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition">
                {t('process.btn_contact')}
            </button>
        </div>
      </div>

      {/* Right Column */}
      <div className="lg:col-span-7 space-y-12">
        {steps.map((step) => (
          <div key={step.id} className="group">
             <h3 className="text-2xl font-bold text-gray-900 mb-2">
                <span className="text-gray-500 mr-2">{step.id}.</span> {step.title}
             </h3>
             <p className="text-gray-600 mb-4 max-w-lg leading-relaxed">
               {step.desc}
             </p>
             
             {/* Accordion */}
             <div className="border border-gray-200 rounded-lg bg-gray-50 overflow-hidden">
                <button 
                   onClick={() => toggleOutput(step.id)}
                   className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-100 transition"
                >
                   <div className="flex items-center gap-2 text-xs font-bold text-gray-500 uppercase tracking-wider">
                      <FileText size={16} />
                      {t('process.typical_output')}
                   </div>
                   {openOutputId === step.id ? <ChevronUp size={16} className="text-gray-500"/> : <ChevronDown size={16} className="text-gray-500"/>}
                </button>
                
                <div className={`transition-all duration-300 ease-in-out ${openOutputId === step.id ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
                   <ul className="px-4 pb-4 space-y-2 border-t border-gray-200 pt-3">
                      {/* Check if outputs exists and is an array before mapping to avoid errors */}
                      {Array.isArray(step.outputs) && step.outputs.map((item, i) => (
                          <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                              <span className="mt-1.5 w-1 h-1 bg-gray-400 rounded-full shrink-0"></span>
                              {item}
                          </li>
                      ))}
                   </ul>
                </div>
             </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProcessSection;