import { useTranslation } from 'react-i18next';
import CTASection from '../components/CTASection';
import { Mail, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-[#4B5563] min-h-screen py-10 px-4 md:px-8">
      
      {/* 1. HERO HEADER */}
      <div className="max-w-7xl mx-auto mb-10 text-center">
         <h1 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter drop-shadow-md">
          {t('contact.page_title', 'CONTACT')}
        </h1>
      </div>

      {/* 2. CONTACT CONTENT CARD */}
      <section className="max-w-7xl mx-auto bg-white rounded-[2.5rem] shadow-2xl p-8 md:p-16 mb-16">
        <div className="grid md:grid-cols-2 gap-12">
            
            {/* Left Column: Info */}
            <div>
                <h2 className="text-4xl font-bold mb-6 text-gray-900">
                    {t('contact.heading', "Let's create something together")}
                </h2>
                <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                    {t('contact.desc', "I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.")}
                </p>

                <div className="space-y-6">
                    <a href="mailto:nerea.llugany.montoya@gmail.com" className="flex items-center gap-4 text-lg md:text-xl font-bold text-gray-800 hover:text-blue-600 transition group">
                        <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 group-hover:scale-110 transition">
                            <Mail size={24} />
                        </div>
                        <span className="break-all">nerea.llugany.montoya@gmail.com</span>
                    </a>
                    
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-xl font-bold text-gray-800 hover:text-blue-600 transition group">
                        <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 group-hover:scale-110 transition">
                            <Linkedin size={24} />
                        </div>
                        LinkedIn
                    </a>
                    
                    <a href="https://github.com/nereaLlugany" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-xl font-bold text-gray-800 hover:text-blue-600 transition group">
                         <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 group-hover:scale-110 transition">
                            <Github size={24} />
                        </div>
                        GitHub
                    </a>
                </div>
            </div>

            {/* Right Column: Simple Form (Opens Email Client) */}
            <div className="bg-gray-50 p-8 rounded-3xl">
                <form className="space-y-4" action="mailto:nerea.llugany.montoya@gmail.com" method="post" encType="text/plain">
                    <div>
                        <label className="block text-sm font-bold mb-2 text-gray-700">{t('contact.form_name', 'Name')}</label>
                        <input type="text" name="name" className="w-full bg-white border border-gray-200 p-4 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition" placeholder="Your name" />
                    </div>
                    <div>
                        <label className="block text-sm font-bold mb-2 text-gray-700">{t('contact.form_email', 'Email')}</label>
                        <input type="email" name="email" className="w-full bg-white border border-gray-200 p-4 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition" placeholder="your@email.com" />
                    </div>
                    <div>
                        <label className="block text-sm font-bold mb-2 text-gray-700">{t('contact.form_msg', 'Message')}</label>
                        <textarea name="message" rows="4" className="w-full bg-white border border-gray-200 p-4 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition" placeholder="Tell me about your project..."></textarea>
                    </div>
                    <button className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition shadow-lg shadow-blue-500/30">
                        {t('contact.btn_send', 'Send Message')}
                    </button>
                </form>
            </div>

        </div>
      </section>

      {/* 3. CTA SECTION */}
      <CTASection />
    </div>
  );
};

export default Contact; // <--- THIS LINE IS CRITICAL