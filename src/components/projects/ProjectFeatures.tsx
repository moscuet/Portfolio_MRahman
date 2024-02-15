import { Box, Grid, Paper, Typography } from "@mui/material";
import FeatureListIcon from "@mui/icons-material/FeaturedPlayList";

import React from "react";

export default function ProjectFeatures({
  features,
}: {
  features: ProjectFeature[];
}) {
  return (
    <Box>
      <Grid container spacing={2} className="text-gray-900">
        <Grid
          item
          xs={12}
          sm={12}
          md={4}
          className="flex md:items-start items-center justify-center lg:justify-start"
        >
          <FeatureListIcon className="mr-2 text-indigo-500" />
          <h2 className="font-bold text-xl">Project Features</h2>
        </Grid>

        <Grid item xs={12} sm={12} md={8} className="rounded-lg p-4">
          <div className="flex flex-wrap justify-center bg-gray-300">
            {features.map((feature, index) => (
              <Box key={index} className="rounded w-full md:w-auto mb-8 ">
                <Typography
                  variant="h6"
                  component="h3"
                  className="font-bold text-center"
                  sx={{ mt: 3, mb: 3 }}
                >
                  {feature.title}
                </Typography>

                <img
                  src={`/assets/images/${feature.img}`}
                  alt={feature.title}
                  className="w-full h-auto mb-2"
                />

                <Typography
                  variant="body1"
                  className="text-center"
                  sx={{ m: 1 }}
                >
                  {feature.description}
                </Typography>
              </Box>
            ))}
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}
