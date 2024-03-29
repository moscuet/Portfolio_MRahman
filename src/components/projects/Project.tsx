'use client'
import React from 'react';
import ProjectTemplate from './ProjectTemplate';



const ProjectDetails = (project: ProjectType) => {
  const { id, title, images, github, url, techStack, story, roles, developmentSteps, features } = project
  return (
    <ProjectTemplate
      id={id}
      title={title}
      images={images}
      github={github}
      url={url}
      techStack={techStack}
      story={story}
      roles={roles}
      developmentSteps={developmentSteps}
      features={features}
    />

  );
};

export default ProjectDetails;
