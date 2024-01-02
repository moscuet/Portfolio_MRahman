import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';


const MyRoleAndContributions = ({ roles }: { roles: string[] }) => {
    return (
        <Box >
            <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} sm={12} md={4} className="flex items-center justify-center lg:justify-start">
                    <div className="flex flex-col ">
                        <Typography variant="h6" component="h2" className="text-gray-800 font-bold text-xl">
                            < LeaderboardIcon className="mr-2 text-indigo-500" /> My Role &
                        </Typography>
                        <Typography variant="h6" component="h2" className="text-gray-800 font-bold text-xl">
                            Contributions
                        </Typography>
                    </div>
                </Grid>

                <Grid item xs={12} sm={12} md={8}>
                    <ul className="list-none pl-0">
                        {roles.map((item, index) => (
                            <li key={index} className="text-base md:text-xl lg:text-lg text-gray-800 mt-2 flex">
                                <span className="w-4 h-4 mt-1 sm:mt-2 bg-indigo-500 rounded-full mr-3 border-4 border-gray-400 flex-shrink-0 self-start"></span>
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
