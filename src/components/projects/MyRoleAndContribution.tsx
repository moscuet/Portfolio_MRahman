import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

const textItems = [
    'Leadership - Leading the development team and overseeing technical aspects.',
    'Project Management - Ensuring project milestones and deadlines are met.',
    'Technical Expertise - Implementing modern technologies and optimizing performance.',
    'Mentorship - Guiding junior developers and promoting team collaboration.'
];

const MyRoleAndContributions = () => {
    return (
        <Box className="my-4 p-2 border border-indigo-500 bg-gray-100 rounded-lg shadow-md"> {/* Added border-radius and shadow */}
            <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} sm={12} md={4} className="flex items-center">
                    <Typography variant="h6" component="h2" className="text-gray-800 font-bold text-xl text-left">
                        My Role and Contributions
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={8}>
                    <ul className="list-none pl-0">
                        {textItems.map((item, index) => (
                            <li key={index} className="text-base md:text-xl lg:text-lg text-gray-800 mt-2 flex">
                                <span className="w-4 h-4 bg-indigo-500 rounded-full mr-3 border-4 border-gray-400 flex-shrink-0 self-center"></span>
                                <p className="flex-1">{item}</p>
                            </li>
                        ))}
                    </ul>
                </Grid>
            </Grid>
        </Box>
    );
};

export default MyRoleAndContributions;
