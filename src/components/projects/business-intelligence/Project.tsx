'use client'
import React from 'react';
import ProjectTemplate from '../ProjectTemplate';

const title='Business Intelligence Website'
const images = [
    '/assets/images/business_Intelligence_01.png',
    '/assets/images/business_Intelligence_02.png',
    '/assets/images/business_Intelligence_03.png',
    '/assets/images/business_Intelligence_04.png',
    '/assets/images/business_Intelligence_05.png'
]
const github='https://github.com/moscuet/Project-Business-consulting-intelligence' 
const url ='https://awesome-mahavira-48e62b.netlify.app/'
const techStack = ['Gatsby.js', 'GraphQL', 'Figma', 'Contentful', 'Mailchimp', 'Netlify'];
const story = 'This is a group project for a business intelligence consulting company. Because of privacy reasons, we can&apos;t share the code publicly. The site demo was deployed on Netlify by removing the company&apos;s credentials, and here is the demo link.'
const roles = [
    'Leadership - Leading the development team and overseeing technical aspects.',
    'Project Management - Ensuring project milestones and deadlines are met.',
    'Technical Expertise - Implementing modern technologies and optimizing performance.',
    'Mentorship - Guiding junior developers and promoting team collaboration.'
];
const developmentSteps = [
    { title: 'Idea Generation', date: '01.01.2023' },
    { title: 'Planning', date: '10.02.2023' },
    { title: 'Design', date: '05.03.2023' },
    { title: 'Development', date: '15.04.2023'},
    { title: 'Deployment', date: '30.05.2023'},
  ];


  const ProjectBusinessIntellegence = () => {
    return (
      <ProjectTemplate
        title={title}
        images={images}
        github={github}
        url={url}
        techStack={techStack}
        story={story}
        roles={roles}
        developmentSteps={developmentSteps}
      />
    );
  };
  
  export default ProjectBusinessIntellegence;
  