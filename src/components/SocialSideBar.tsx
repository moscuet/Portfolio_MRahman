import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import Link from 'next/link';

const SocialMediaIcons = ({ className = '' }) => {
  return (
    <div className={`z-20 flex gap-5 ${className}`}>
      <Link href="https://github.com/moscuet">
        <span className="cursor-pointer text-indigo-500  hover:text-indigo-600">
          <FaGithub className="hover:scale-125" size="24" />
        </span>
      </Link>
      <Link href="https://linkedin.com/in/mostafizur-rahman-35568045">
        <span className="cursor-pointer text-indigo-500 hover:text-indigo-600">
          <FaLinkedin className="hover:scale-125" size="24" />
        </span>
      </Link>
      <Link href="https://instagram.com/mos.cuet">
        <span className="cursor-pointer text-indigo-500 hover:text-indigo-600">
          <FaInstagram className="hover:scale-125" size="24" />
        </span>
      </Link>
    </div>
  );
};

export default SocialMediaIcons;
