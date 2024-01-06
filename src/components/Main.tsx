import React from 'react';
import ProjectSection from './ProjectSection';

interface MainProps {
  children: React.ReactNode;
}


const Main = () => {


  return (
    <div className="w-full overflow-y-auto pb-12">
      <ProjectSection />
    </div>
  );
};

export default Main;
