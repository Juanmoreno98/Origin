import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

function Card(props) {
  const navigate = useNavigate();
  const projects=useSelector(state=>state.projects)
  console.log(projects);
const navigateDetail=(e)=>{
  navigate(`projects/${e}`)
}

  return (
    <div>
      {projects.map(e=> (<div>
        <h1 onClick={elm=>navigateDetail(e.name)}>{e.name}</h1>
        <h1>{e.location}</h1>
       <h1>{e.floors}</h1>
      </div>))}
    </div>
  );
}

export default Card;
