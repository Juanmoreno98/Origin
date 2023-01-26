import React, { useEffect } from "react";
import {  useSelector } from "react-redux";
import { useParams } from "react-router";
import {Project} from "../../interfaces/Proyect"


function CardDetail() {
  const projects = useSelector((state:any )=> state.projects);
  let name = useParams();
  useEffect(() => {

  }, []);


  let currentDetail = projects.filter((e:Project) => e.name === name.id);
  console.log(name);
  console.log(projects);
  console.log(currentDetail);
  return (
    <div> 
      {currentDetail.map((e:Project) => (
        <div>
          <h1>{e.name}</h1>
          <h1>{e.id}</h1>
          <h1>{e.location}</h1>
          <h1>{e.floors}</h1>
        </div>
      ))}
    </div>
  );
}

export default CardDetail;
