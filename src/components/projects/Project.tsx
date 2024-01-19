'use client'
import React from 'react';
import ProjectTemplate from './ProjectTemplate';



  const ProjectDetails = (project:ProjectType) => {
    const {id,title, images,github, url, techStack, story, roles, developmentSteps} = project
    return (
      <ProjectTemplate
        title={title}
        images={images}
        github={github}
        url={url}
        techStack={techStack}
        story={story}
        roles={roles}
        developmentSteps={developmentSteps} id={id}        />
    );
  };
  
  export default ProjectDetails;
  