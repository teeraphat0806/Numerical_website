import React, { useEffect, useState } from 'react';
import "mafs/core.css";
import "mafs/font.css";
import { Mafs, Coordinates, Plot, Theme ,Point} from "mafs";
import { pow,sqrt } from 'mathjs';

const Show_graph = ({func,x,y}) => {
    const [equation, setEquation] = useState(func);
    
    return (
      <div>
        <Mafs>
          <Coordinates.Cartesian />
          <Plot.OfX y={(x) => eval(equation)} color={Theme.blue} />
          <Point x={x} y={y} color={Theme.red}/>
        </Mafs>
     
      </div>
    );
  }
  export default Show_graph;
