'use client'
import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import ImageSlider from '@/components/ImageSlider';
import LandingPageLayout from '../LandingPageLayout';
import DevelopmentTimeline from '@/components/projects/TimeLine';
import MyRoleAndContributions from '../MyRoleAndContribution';
import ExploreProjectSection from '../ExploreProjectSection';
import ProjectStorySection from '../StorySection';
import TechStackSection from '../TechStackSection';

const ProjectBusinessIntellegence = () => {

    const [targetWidth, setTargetWidth] = useState(0);
    const techStack = ['Gatsby.js', 'GraphQL', 'Figma', 'Contentful', 'Mailchimp', 'Netlify'];

    useEffect(() => {
        const targetElement = document.getElementById('project-slider-container');
        if (targetElement) {
            setTargetWidth(targetElement.offsetWidth);
        }
    }, []);

    return (
        <Grid container className="justify-center" >
            <LandingPageLayout
                title='Business Intelligence Website'
                images={[
                    '/assets/images/business_Intelligence_01.png',
                    '/assets/images/business_Intelligence_02.png',
                    '/assets/images/business_Intelligence_03.png',
                    '/assets/images/business_Intelligence_04.png',
                    '/assets/images/business_Intelligence_05.png'
                ]}
                url='https://awesome-mahavira-48e62b.netlify.app'
            />

            <Grid container direction="column" className="justify-center" style={{ maxWidth: `calc(${targetWidth}px)`, margin: 'auto' }}>
                <Grid item xs={12} mb={6} py={5} mt={5}>

                    <ProjectStorySection />
                </Grid>

                <Grid item xs={12} mb={6} py={5}  >
                    <TechStackSection techStack={techStack} />
                </Grid>

                <Grid item xs={12} mb={6} py={5}  >
                    <MyRoleAndContributions />
                </Grid>

                <Grid item xs={12} mb={6} py={5}  >
                    <DevelopmentTimeline />
                </Grid>

                <Grid item xs={12} mb={6}  >

                    <ExploreProjectSection />
                </Grid>
            </Grid>
        </Grid>
    );
};

export default ProjectBusinessIntellegence;
