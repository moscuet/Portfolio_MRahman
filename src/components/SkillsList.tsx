
import React from 'react';

type Skill = {
  id: number;
  name: string;
  proficiencyLevel: number;
};

type SkillsCategory = 'Frontend' | 'Backend' | 'Database' | 'DevOps' | 'Other';

type SkillsState = {
  [key in SkillsCategory]: Skill[];
};

interface SkillsListProps {
  skills: SkillsState;
}


const ProficiencyCircles: React.FC<{ level: number }> = ({ level }) => {

  const maxLevel = 5; 

  return (
    <div className="flex items-center justify-end flex-none mb-0">
      {Array.from({ length: maxLevel }, (_, i) => (
        <span key={i} className="mx-1">
          {i < level ? '●' : '○'}
        </span>
      ))}
    </div>
  );
};


const SkillsList: React.FC<SkillsListProps> = ({ skills }) => {
  console.log('skill', skills)
  return (
    <>
      {Object.entries(skills).map(([category, skills]) => (
        <div key={category} className="mb-4">
          <h3 className="text-md font-bold text-white mb-2">{category}</h3>
          {Array.from(new Set(skills.map(skill => skill.proficiencyLevel))).sort().map(level => {
            const skillsAtLevel = skills.filter(skill => skill.proficiencyLevel === level);
            return (
              <div key={level} className="flex flex-wrap items-end mb-2">
                <div className="flex-1">
                  {skillsAtLevel.map((skill, index) => (
                    <span key={skill.id} className="text-gray-400 mr-2">
                      {skill.name}{index < skillsAtLevel.length - 1 ? ' ' : ''}
                    </span>
                  ))}
                </div>
                <div className="flex-none">
                  <ProficiencyCircles level={level} />
                </div>
              </div>
            );
          })}
        </div>
      ))}
    </>
  );
};


export default SkillsList;