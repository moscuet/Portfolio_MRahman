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


const steps = [
  { title: 'Idea Generation', date: '01.01.2023', icon: <LightbulbIcon /> },
  { title: 'Planning', date: '10.02.2023', icon: <PlanIcon /> },
  { title: 'Design', date: '05.03.2023', icon: <DesignIcon /> },
  { title: 'Development', date: '15.04.2023', icon: <CodeIcon /> },
  { title: 'Deployment', date: '30.05.2023', icon: <LaunchIcon /> },
];

export default function DevelopmentTimeline() {
  return (
    <Box className="p-2">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={4}>
        
          <Typography variant="h6" component="h2" className="text-gray-800 font-bold text-xl">
          <TimelineIcon  className="mr-2 text-indigo-500"/> Project Timeline
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={8}>
          <Timeline position="alternate">
            {steps.map((step, index) => (
              <TimelineItem key={index}>
                <TimelineOppositeContent
                  sx={{ m: 'auto 0' }}
                  align="right"
                  variant="body2"
                  color="text.secondary"
                >
                  {step.date}
                </TimelineOppositeContent>
                <TimelineSeparator>

                  {index !== 0 && <TimelineConnector />} 

                  <TimelineDot>
                    <span className="bg-indigo-500 p-1 rounded-full inline-flex justify-center items-center">
                      {step.icon}
                    </span>
                  </TimelineDot>

                  {index !== steps.length - 1 && <TimelineConnector />} {/* Don't render after last item */}

                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                  <Typography variant="h6" component="span">
                    {step.title}
                  </Typography>
                  <Typography>Key activities and milestones</Typography>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </Grid>
      </Grid>
    </Box>
  );
}
