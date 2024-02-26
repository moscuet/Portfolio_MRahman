import React from "react";
import { Box, Grid } from "@mui/material";
import ProjectLinkButton from "../ui/ProjectLinkButton";

const ExploreProjectSection = ({
  github,
  url,
}: {
  github: string;
  url: string;
}) => {
  return (
    <Box className="py-5 px-1 sm:px-2 lg:px-4 mb-5 bg-gray-100 rounded-lg shadow-md">
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          sm={12}
          md={4}
          className="flex items-center justify-center lg:justify-start"
        >
          <h2 className="text-xl md:text-2xl font-bold text-gray-900">
            Explore the Project
          </h2>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={8}
          className="flex items-center"
          style={{ height: "150px" }}
        >
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 w-full justify-center">
            <ProjectLinkButton
              onClick={() => window.open(url, "_blank", "noopener,noreferrer")}
              text="Live Demo"
              textForLargeScreen="Explore Live Demo"
            />
            <ProjectLinkButton
              onClick={() =>
                window.open(github, "_blank", "noopener,noreferrer")
              }
              text="Github"
              textForLargeScreen="Github: Source Code"
            />
            <ProjectLinkButton
              onClick={() => (window.location.href = "/#project-section")}
              text="Projects"
              textForLargeScreen="Back to Projects"
            />
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ExploreProjectSection;
