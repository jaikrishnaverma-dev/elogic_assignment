import { Grid } from "@mui/material";
import React from "react";

const CubeAnimation = () => {
  return (
    <Grid item xs={false} sm={4} md={6} className="cube-animation">
      <div class="area">
        <ul class="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </Grid>
  );
};

export default CubeAnimation;
