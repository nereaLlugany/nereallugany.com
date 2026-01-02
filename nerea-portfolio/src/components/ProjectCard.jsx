import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';

const ProjectCard = ({ project }) => {
  const { t } = useTranslation();

  // Dynamic Translations
  const translatedTitle = t(`projects.${project.id}.title`, { defaultValue: project.title });
  const translatedDesc = t(`projects.${project.id}.desc`, { defaultValue: project.desc });
  const translatedCategory = t(`projects.${project.id}.category`, { defaultValue: project.category });
  const translatedMeta = t(`projects.${project.id}.meta`, { defaultValue: project.meta });

  return (
    <div className="border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 bg-white flex flex-col h-full group">
      
      {/* Image Area */}
      <div className="h-64 bg-gray-100 relative overflow-hidden">
        {project.image ? (
          <img 
            src={project.image} 
            alt={translatedTitle} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-bold text-xl bg-gray-200">
            {translatedTitle}
          </div>
        )}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
      </div>

      {/* Content Area */}
      <div className="p-6 flex flex-col flex-grow">
        
        <div className="flex justify-between items-center mb-3">
            <span className="text-blue-600 font-bold text-[10px] md:text-xs uppercase tracking-wider">
              {translatedCategory}
            </span>
            <span className="text-xs text-gray-400 font-medium">
              {translatedMeta}
            </span>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight group-hover:text-blue-600 transition-colors">
          {translatedTitle}
        </h3>

        <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
          {translatedDesc}
        </p>

        <a 
          href={project.link} 
          className="mt-auto inline-flex items-center gap-2 text-sm font-bold text-gray-900 group-hover:text-blue-600 transition-colors"
        >
          {t('portfolio.view_project', 'View Project')}
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;