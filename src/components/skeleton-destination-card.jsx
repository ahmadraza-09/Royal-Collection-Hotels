import React from "react";
import "../css/skeleton.css";
import { Skeleton, Box } from "@mui/material";

const SkeletonDestinationCard = () => {
  return (
    <Box
      className="skeleton-destination-card"
      sx={{
        width: 300,
        height: 350,
        padding: 1,
        borderRadius: 2,
      }}
    >
      {/* Image Placeholder */}
      <Skeleton variant="rounded" width="100%" height={250} />

      {/* Description Placeholder */}
      <Skeleton variant="text" width="80%" height={50} />
      <Skeleton variant="text" width="50%" />
    </Box>
  );
};

export default SkeletonDestinationCard;
