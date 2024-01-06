'use client'
import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import Link from 'next/link';
import SocialMediaIcons from './SocialSideBar';

const Footer = () => {
  return (
<footer  style={{ background: 'linear-gradient(to bottom, #fff, #e4e7eb )', minHeight: '200px' }} className="absolute w-full left-0 text-gray-900">
  <div className="container mx-auto px-6 pt-10 pb-6">
    <div className="flex flex-col sm:flex-row justify-between gap-4">
      <div className="text-center md:text-left mb-6 md:mb-0">
        <h5 className="uppercase mb-6 font-bold">Links</h5>
        <ul className="mb-4">
          <li className="mt-2">
            <Link href="/">
              <span className="hover:underline text-indigo-500 cursor-pointer">Home</span>
            </Link>
          </li>
          <li className="mt-2">
            <Link href="/about">
              <span className="hover:underline text-indigo-500 cursor-pointer">About</span>
            </Link>
          </li>
          <li className="mt-2">
            <Link href="/projects">
              <span className="hover:underline text-indigo-500 cursor-pointer">PROJECTS</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="text-center mb-6 md:mb-0">
        <h5 className="uppercase mb-6 font-bold">Social</h5>
        <SocialMediaIcons className="justify-center" />

      </div>
      <div className="text-center mb-6 md:mb-0">
        <h5 className="uppercase mb-6 font-bold">Get in Touch</h5>
        <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded">
          Contact Me
        </button>
      </div>
    </div>
  </div>
  <div className="border-t mt-8 pt-3 text-center">
    <p className="text-sm font-light text-gray-900">&copy; Copyright 2023, Mostafizur Rahman. All Rights Reserved.</p>
    <p className="text-sm font-light text-gray-900">Crafting seamless web experiences.</p>
  </div>
</footer>


  
  
  );
};

export default Footer;
