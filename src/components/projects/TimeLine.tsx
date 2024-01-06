import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import PlanIcon from '@mui/icons-material/ListAlt';
import DesignIcon from '@mui/icons-material/DesignServices';
import CodeIcon from '@mui/icons-material/Code';
import LaunchIcon from '@mui/icons-material/FlightTakeoff';
import TimelineIcon from '@mui/icons-material/Timeline';

const iconMapping: { [key: string]: JSX.Element } = {
  'Idea Generation': <LightbulbIcon />,
  'Planning': <PlanIcon />,
  'Design': <DesignIcon />,
  'Development': <CodeIcon />,
  'Deployment': <LaunchIcon />
};

export default function DevelopmentTimeline({ developmentSteps }: { developmentSteps: { title: string, date: string }[] }) {
  return (
    <Box >
      <Grid container spacing={2}>

        <Grid item xs={12} sm={12} md={4} className="flex items-center justify-center lg:justify-start mb-3">
          <Typography variant="h6" component="h2" className="text-gray-900 font-bold text-xl">
            <TimelineIcon className="mr-2  text-indigo-500" /> Project Timeline
          </Typography>
        </Grid>

        <Grid style={{margin:0,padding:0}} container item md={8} className='flex items-center justify-center'>
          <Timeline style={{padding:0}}>
            {developmentSteps.map((step, index) => (
              <TimelineItem key={index}>
                <TimelineOppositeContent
                  sx={{ m: 'auto 0'}}
                  align="left"
                  variant="body2"
                  color="text.secondary"
                  className='p-1 sm:p-3 text-center'
                >
                  {step.date}
                </TimelineOppositeContent>


                <TimelineSeparator>
                  {index !== 0 && <TimelineConnector />}
                  <TimelineDot>
                    <span className="bg-indigo-500 p-1 rounded-full inline-flex justify-center items-center">
                      {iconMapping[step.title]}
                    </span>
                  </TimelineDot>
                  {index !== developmentSteps.length - 1 && <TimelineConnector />}
                </TimelineSeparator>


                <TimelineContent className='p-1 sm:p-3' >
                  <Typography
                    variant="h6"
                    component="span"
                    sx={{ fontWeight: 'bold', fontSize: { xs: '0.75rem', sm: '1rem', md: '1.25rem' } }}
                    className="sm:text-lg"
                  >
                    {step.title}
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' } }}
                    className="text-sm sm:text-base"
                  >
                    Key activities and milestones
                  </Typography>
                </TimelineContent>

              </TimelineItem>
            ))}
          </Timeline>
        </Grid>
      </Grid>
    </Box>
  );
}
