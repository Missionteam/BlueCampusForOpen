import React from "react";
import { Grid } from "@mui/material";

interface GridContainerProps {
  children: React.ReactNode[];
  text: string;
}

export const CardList: React.FC<GridContainerProps> = ({ children, text }) => {
  return (
    <div>
      <h2 className="mt-12 mb-3" style={{ fontSize: "20px" }}>
        {text}
      </h2>
      <Grid container spacing={5}>
        {children.map((child, index) => (
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
    </div>
  );
};
