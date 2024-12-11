import { Skeleton, Box } from "@mui/material";
import React from "react";

const SkeletonHero = () => {
  return (
    <div>
      <Box
        sx={{
          width: "100%",
          height: "70vh",
          padding: 1,
          borderRadius: 2,
        }}
      >
        <Skeleton
          variant="rectangular"
          width="100%"
          height="50vh"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Content is Loading...
        </Skeleton>
        <Skeleton
          variant="rectangular"
          width={250}
          height={40}
          style={{ margin: "auto", marginTop: "10px" }}
        ></Skeleton>
        <Skeleton
          variant="rectangular"
          width={320}
          height={40}
          style={{ margin: "auto", marginTop: "10px" }}
        ></Skeleton>
      </Box>
    </div>
  );
};

export default SkeletonHero;
