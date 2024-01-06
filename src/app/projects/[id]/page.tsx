import BusinessIntelligence from '../../../components/projects/business-intelligence/Project'
import CookingRecipes from '../../../components/projects/cooking/page'

const projectComponents = {
  'business-intelligence': BusinessIntelligence,
  'cooking-recipe': CookingRecipes,
};
type ProjectComponentKey = 'business-intelligence' | 'cooking-recipe';

export default function ProjectPage({ params }: { params: { id: string } }) {

  const ProjectComponent = projectComponents[params.id as ProjectComponentKey];

  if (!ProjectComponent) {
    return <div className='bg-gray-200' style={{ color: 'black', paddingTop: '100px' }}>Project not found.</div>;
  }

  return <div className="text-gray-900 pl-1 sm:pl-2 lg:pl-4" style={{ paddingTop: '120px'}}> <ProjectComponent /> </div>;
}

