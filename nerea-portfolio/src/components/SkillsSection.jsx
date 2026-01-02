import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { skillCategories, skillsList, skillsMeters } from '../data/skills';

const SkillsSection = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('design');
  const [selectedDesc, setSelectedDesc] = useState(t('skills.default_desc'));

  const activeSkills = skillsList.filter(skill => skill.cat === activeTab);

  // Helper to get translated skill description
  const getSkillDesc = (skillId) => {
    return t(`skills.tools.${skillId}`, { defaultValue: 'Description not available.' });
  };

  return (
    <div className="bg-white p-6 md:p-12 rounded-[2.5rem] shadow-sm border border-gray-100">
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
        
        {/* =======================
            LEFT: Pro Skills Meters
           ======================= */}
        <div className="lg:col-span-5 space-y-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6 font-sans">
            {t('skills.meters_title', 'Skills meters')}
          </h3>
          
          <div className="space-y-5">
            {skillsMeters.map((meter, index) => (
              <div key={index} className="w-full group">
                {/* The Progress Bar Container */}
                <div className="h-7 w-full bg-gray-100 rounded-md overflow-hidden relative shadow-inner">
                  
                  {/* The Blue Fill */}
                  <div 
                    className="h-full bg-[#0066FF] flex items-center justify-between px-3 transition-all duration-1000 ease-out group-hover:brightness-110"
                    style={{ width: `${meter.pct}%` }}
                  >
                    {/* Label inside the bar (Left) */}
                    <span className="text-[10px] md:text-[11px] font-bold text-white uppercase tracking-wider truncate mr-2 drop-shadow-sm">
                      {t(`skills.meter_labels.${index}`)}
                    </span>

                    {/* Percentage inside the bar (Right) */}
                    <span className="text-[10px] md:text-xs font-bold text-white drop-shadow-sm">
                      {meter.pct}%
                    </span>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* =======================
            RIGHT: Interactive Grid
           ======================= */}
        <div className="lg:col-span-7 flex flex-col">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveTab(cat.id);
                  setSelectedDesc(t('skills.default_desc'));
                }}
                className={`px-3 py-1.5 rounded-md text-xs font-bold uppercase tracking-wider transition-all duration-200 border ${
                  activeTab === cat.id
                    ? 'bg-[#002f5d] border-[#002f5d] text-white shadow-md transform scale-105'
                    : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50 hover:border-gray-300'
                }`}
              >
                {t(`skills.categories.${cat.id}`)}
              </button>
            ))}
          </div>

          {/* Icons Grid */}
          <div className="flex-grow">
            <div className="grid grid-cols-4 sm:grid-cols-5 gap-3 mb-6">
              {activeSkills.map((skill) => (
                <SkillCard 
                  key={skill.id} 
                  skill={skill} 
                  isActive={selectedDesc === getSkillDesc(skill.id)}
                  onClick={() => setSelectedDesc(getSkillDesc(skill.id))} 
                />
              ))}
            </div>
          </div>

          {/* Description Box */}
          <div className="bg-[#F8FAFC] p-6 rounded-xl border border-gray-200 text-gray-600 text-sm min-h-[80px] flex items-center shadow-sm mt-auto relative overflow-hidden">
            {/* Decorative colored line on the left based on active tab color (optional aesthetic touch) */}
             <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 to-purple-500"></div>
            <p className="leading-relaxed pl-2">{selectedDesc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Isolated Skill Card Component for cleaner code
const SkillCard = ({ skill, onClick, isActive }) => {
  const [imgError, setImgError] = useState(false);
  
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: skill.color }}
      className={`aspect-square flex flex-col items-center justify-center p-2 rounded-xl transition-all duration-300 group relative overflow-hidden
        ${isActive ? 'ring-2 ring-offset-2 ring-blue-500 scale-105 shadow-lg' : 'hover:-translate-y-1 hover:shadow-md'}
      `}
    >
      {!imgError ? (
        <img 
          src={skill.logo} 
          alt={skill.name} 
          className="w-8 h-8 md:w-10 md:h-10 object-contain drop-shadow-md transition-transform duration-300 group-hover:scale-110"
          onError={() => setImgError(true)} 
        />
      ) : (
        <span 
          style={{ color: skill.textColor || '#fff' }}
          className="font-bold text-[10px] md:text-xs text-center leading-tight z-10 break-words w-full"
        >
          {skill.name}
        </span>
      )}
      
      {/* Shine effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/30 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />
    </button>
  );
};

export default SkillsSection;