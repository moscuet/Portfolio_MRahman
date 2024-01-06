import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import Link from 'next/link';

const SocialMediaIcons = ({ className = '' }) => {
  return (
    <div className={`z-30 flex gap-5 ${className}`}>
      <Link href="https://github.com">
        <span className="cursor-pointer text-indigo-500 hover:text-indigo-600">
          <FaGithub size="24" />
        </span>
      </Link>
      <Link href="https://linkedin.com">
        <span className="cursor-pointer text-indigo-500 hover:text-indigo-600">
          <FaLinkedin size="24" />
        </span>
      </Link>
      <Link href="https://instagram.com">
        <span className="cursor-pointer text-indigo-500 hover:text-indigo-600">
          <FaInstagram size="24" />
        </span>
      </Link>
    </div>
  );
};

export default SocialMediaIcons;
