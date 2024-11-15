import React from "react";
import "../css/skeleton.css";
import { Skeleton, Box } from "@mui/material";

const SkeletonHotelCard = () => {
  return (
    <Box
      className="skeleton-destination-card"
      sx={{
        width: 300,
        height: 550,
        padding: 0,
        borderRadius: 2,
      }}
    >
      {/* Image Placeholder */}
      <Skeleton variant="rounded" width="100%" height={180} />

      {/* Description Placeholder */}
      <Skeleton variant="text" width="80%" height={40} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Skeleton width={100} height={40} />
        <Skeleton width={120} height={40} />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Skeleton width={100} height={40} />
        <Skeleton width={80} height={40} />
      </Box>
      <Skeleton variant="rounded" width="100%" height={2} />
      <Box>
        <Skeleton variant="text" width="100%" height={160} />
      </Box>
      <Skeleton variant="text" width="100%" height={2} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Skeleton width={100} height={50} />
        <Skeleton width={100} height={50} />
      </Box>
    </Box>
  );
};

export default SkeletonHotelCard;
