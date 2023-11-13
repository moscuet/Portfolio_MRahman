'use client'
import React from 'react';
import { Grid } from '@mui/material';
import ImageSlider from '@/components/ImageSlider';
import LandingPageLayout from '../LandingPageLayout';

const ProjectBusinessIntellegence = () => {
    return (
        <Grid container className="justify-center">
            <LandingPageLayout title='Business Intellegence' images={[
                '/assets/images/business_Intelligence_01.png',
                '/assets/images/business_Intelligence_02.png',
                '/assets/images/business_Intelligence_03.png',
                '/assets/images/business_Intelligence_04.png',
                '/assets/images/business_Intelligence_05.png'
            ]} url='https://awesome-mahavira-48e62b.netlify.app' />
        </Grid>
    );
};

export default ProjectBusinessIntellegence;
