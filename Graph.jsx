import React, { useEffect, useState } from 'react';
import "mafs/core.css";
import "mafs/font.css";
import { Mafs, Coordinates, Plot, Theme ,Point} from "mafs";
import { pow,sqrt } from 'mathjs';

function Show_graph({func,x,y})  {
   
    return (
      <div>
        <Mafs>
          <Coordinates.Cartesian />
          <Plot.OfX y={(x) => eval(func)} color={Theme.blue} />
          <Point x={x} y={y} color={Theme.red}/>
        </Mafs>
     
      </div>
    );
  }

  export default Show_graph;
