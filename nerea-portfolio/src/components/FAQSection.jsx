import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { PlusCircle, MinusCircle } from 'lucide-react';

const FAQSection = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState(0); 

  const faqs = [
    { id: 'tools', question: t('faq.q1'), answer: t('faq.a1') },
    { id: 'relevant', question: t('faq.q2'), answer: t('faq.a2') },
    { id: 'problem', question: t('faq.q3'), answer: t('faq.a3') },
    { id: 'process', question: t('faq.q4'), answer: t('faq.a4') },
    { id: 'update', question: t('faq.q5'), answer: t('faq.a5') },
    { id: 'practices', question: t('faq.q6'), answer: t('faq.a6') },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-7xl mx-auto bg-white rounded-[2.5rem] shadow-2xl p-8 md:p-16 mb-10">
      <div className="grid md:grid-cols-12 gap-10">
        
        {/* Left Column: Title */}
        <div className="md:col-span-4">
            <div className="inline-block border border-gray-800 rounded-full px-4 py-1.5 mb-6 bg-white">
                <div className="flex items-center gap-2">
                    {/* BLUE DOT REMOVED HERE */}
                    <span className="text-xs font-bold tracking-widest text-gray-800 uppercase">FAQ</span>
                </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
                Questions <br/> & Answers
            </h2>
        </div>

        {/* Right Column: Accordion */}
        <div className="md:col-span-8 space-y-2">
            {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-4">
                    <button
                        className="w-full flex justify-between items-center text-left py-4 focus:outline-none group"
                        onClick={() => toggleFAQ(index)}
                    >
                        <span className={`text-lg font-bold pr-8 transition-colors ${openIndex === index ? 'text-blue-600' : 'text-gray-800 group-hover:text-blue-600'}`}>
                            {faq.question}
                        </span>
                        
                        {/* Icon Logic Fixed */}
                        {openIndex === index ? (
                            // Active: Filled Black Circle with White Minus
                            <MinusCircle 
                                className="flex-shrink-0 w-6 h-6" 
                                fill="black" 
                                stroke="white" 
                            />
                        ) : (
                            // Inactive: Black Outline Plus
                            <PlusCircle 
                                className="flex-shrink-0 w-6 h-6 text-black" 
                            />
                        )}
                    </button>
                    
                    <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                            openIndex === index ? 'max-h-96 opacity-100 mb-4' : 'max-h-0 opacity-0'
                        }`}
                    >
                        <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                            {faq.answer}
                        </p>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;