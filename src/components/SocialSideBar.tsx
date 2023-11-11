// components/SocialSidebar.jsx
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

export default function SocialSidebar() {
  return (
    <div className="fixed left-0 top-1/2 -translate-y-1/2 flex flex-col items-center space-y-4 p-4">
      <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-indigo-500 hover:text-indigo-600">
        <FaLinkedin size={24} />
      </a>
      <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-indigo-500 hover:text-indigo-600">
        <FaGithub size={24} />
      </a>
      <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-indigo-500 hover:text-indigo-600">
        <FaInstagram size={24} />
      </a>
    </div>
  );
}
