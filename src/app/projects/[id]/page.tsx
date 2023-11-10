import { Metadata } from 'next';
import React from 'react'
import getProject from '../../../../lib/getProject';


export const metadata: Metadata = {
    title: 'Mostafizur Rahman - Project',
  };

  
export default async function page({ params }: { params: { id: string } }) {
    
    const project = await getProject(params.id)
    console.log(project)

    if (!project) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h1>{project.title}</h1>
        <p>{project.summary}</p>
        <div className="image-slider">
          {project.images.map((image:string, index:number) => (
            <img key={index} src={`/assets/images/${image}`} alt={`Project image ${index}`} />
          ))}
        </div>
        <p>{project.details}</p>
        <div className="tech-stack">
        {project.tech_stack.map((tech:string, index:number) => (
          <span key={index} className="tech-button">
            {tech}
          </span>
        ))}
      </div>
      </div>
    );
  }