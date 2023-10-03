import React from "react";
import { Box, Grid } from "@mui/material";

interface ScrollableGridProps {
  children: React.ReactNode;
}

const ScrollableGrid: React.FC<ScrollableGridProps> = ({ children }) => {
  return (
    <Box>
      <h2 className="mt-12 mb-3" style={{ fontSize: "20px" }}>
        ・挑戦したいあなたへ
      </h2>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          overflowX: "auto",
          p: 1,
          bgcolor: "background.paper",
        }}
      >
        <Grid container spacing={4} wrap="nowrap">
          {React.Children.map(children, (child, index) => (
            <Grid
              key={index}
              item
              xs={4}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              {child}
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default ScrollableGrid;
