import { projectsData } from '../../../../data/projectData';
import ProjectDetails from '../../../components/projects/Project';

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projectsData.find((p: ProjectType) => p.id === params.id);


  if (!project) {
    return <div className='bg-gray-200' style={{ color: 'black', paddingTop: '100px' }}>Project not found.</div>;
  }

  return <div className="text-gray-900 pl-1 sm:pl-2 lg:pl-4" style={{ paddingTop: '120px'}}> <ProjectDetails {...project } /> </div>;
}

