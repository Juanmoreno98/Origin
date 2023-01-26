import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';



function Card() {
  const navigate = useNavigate();
  const projects=useSelector((state:any)=>state.projects)
  console.log(projects);
  
const navigateDetail=(e:string)=>{
  navigate(`projects/${e}`)
}

  return (
    <div>
      {projects.map((e: { name: string ; location: string ;floors: number})=> (<div>
        <h1 onClick={elm=>navigateDetail(e.name)}>{e.name}</h1>
        <h1>{e.location}</h1>
       <h1>{e.floors}</h1>
      </div>))}
    </div>
  );
}

export default Card;
