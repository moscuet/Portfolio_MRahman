import React from 'react';
import { Button } from '@mui/material';

interface ProjectLinkButtonProps {
  text: string;
  textForLargeScreen: string;
  onClick: () => void;
}

const ProjectLinkButton: React.FC<ProjectLinkButtonProps> = ({ text, textForLargeScreen, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-full outline border-indigo-500 text-indigo-500 hover:border-indigo-600 hover:text-indigo-600 font-bold py-2 px-4 rounded"
    >
      <span className="sm:hidden">{text}</span>
      <span className="hidden sm:inline">{textForLargeScreen}</span>
    </button>
  );
};
export default ProjectLinkButton