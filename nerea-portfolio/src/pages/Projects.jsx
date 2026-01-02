import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { projectsList } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import FAQSection from '../components/FAQSection'; // <--- Import FAQ
import CTASection from '../components/CTASection'; // <--- Import CTA

const Projects = () => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', label: t('projects.filter_all', 'All') },
    { id: 'game', label: t('projects.filter_game', 'Games') },
    { id: 'audio', label: t('projects.filter_audio', 'Audio') },
    { id: '3d', label: t('projects.filter_3d', '3D Animation') },
    { id: '2d', label: t('projects.filter_2d', '2D Animation') }
  ];

  const filteredProjects = filter === 'all' 
    ? projectsList 
    : projectsList.filter(project => {
        const searchString = (project.category + project.meta).toLowerCase();
        return searchString.includes(filter.toLowerCase());
      });

  const displayList = [...filteredProjects].reverse();

  return (
    <div className="bg-[#4B5563] min-h-screen py-10 px-4 md:px-8">
      
      {/* 1. TITLE SECTION */}
      <div className="max-w-7xl mx-auto mb-10 text-center">
        <h1 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter drop-shadow-md">
          {t('projects.page_title', 'PROJECTS')}
        </h1>
      </div>

      {/* 2. PROJECTS GRID SECTION */}
      <section className="max-w-7xl mx-auto bg-white rounded-[2.5rem] shadow-2xl p-8 md:p-16 mb-10 min-h-[50vh]">
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-6 py-2 rounded-full font-bold text-sm transition-all duration-300 border
                ${filter === cat.id 
                  ? 'bg-blue-600 border-blue-600 text-white shadow-lg scale-105' 
                  : 'bg-gray-100 border-gray-100 text-gray-600 hover:bg-gray-200'}
              `}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {displayList.map((project) => (
            <div key={project.id} className="h-full">
               <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {displayList.length === 0 && (
          <div className="text-center py-20 text-gray-400">
            <p className="text-xl font-bold">{t('projects.no_results', 'No projects found.')}</p>
          </div>
        )}
      </section>

      {/* 3. FAQ SECTION (NEW) */}
      <FAQSection />

      {/* 4. CTA SECTION (REUSED) */}
      <CTASection />

    </div>
  );
};

export default Projects;