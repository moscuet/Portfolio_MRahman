import { Box, Grid, Paper, Typography } from "@mui/material";
import FeatureListIcon from "@mui/icons-material/FeaturedPlayList";

import React from "react";

export default function ProjectFeatures({
  features,
}: {
  features: ProjectFeature[];
}) {
  return (
    <Box sx={{
      padding:'2px'
    }}>
      <Grid container spacing={2} className="text-gray-900">
        <Grid
          item
          xs={12}
          sm={12}
          md={4}
          className="flex md:items-start items-center justify-center lg:justify-start"
        >
          <Box
            sx={{
              position: "sticky",
              top: 150,
              zIndex: 1,
              display: "flex",
              alignItems: "center",
            }}
          >
            <FeatureListIcon className="mr-2 text-indigo-500" />
            <h2 className="font-bold text-xl">Project Features</h2>
          </Box>
        </Grid>

        <Grid item xs={12} sm={12} md={8} className="rounded-lg p-4">
          <div className="flex flex-wrap justify-center bg-gray-50 border rounded-md p-2">
            {features.map((feature, index) => (
              <Box key={index} className="rounded w-full md:w-auto mb-2 sm:mb-4 lg:mb-8 ">
                <h2 className="font-bold text-md lg:text-lg text-gray-900 mt-8 text-center">
                  {feature.title}
                </h2>

               {feature.img && <img
                  src={`/assets/images/${feature.img}`}
                  alt={feature.title}
                  className="w-full h-auto mb-2 mt-4"
                />}
                <p className="text-justify text-base md:text-xl lg:text-lg text-gray-900 p-1 sm:p-2 md:p-4 mb-1">
                  {feature.description}
                </p>
              </Box>
            ))}
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}
