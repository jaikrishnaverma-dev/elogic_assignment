import { Grid } from "@mui/material";
import React from "react";
import About from "../common/About";

const CubeAnimation = () => {
  return (
    <Grid item xs={false} sm={4} md={6} className="cube-animation" style={{position:"relative"}}>
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
      <div style={{position:"absolute",top:"50%", left:"50%",  transform: "translate(-50%, -50%)",}}>
       <img src="/vector_ui2.png" height={500} alt="" />
      </div>
    </Grid>
  );
};

export default CubeAnimation;
