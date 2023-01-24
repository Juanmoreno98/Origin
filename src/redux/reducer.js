import { PROJECTS } from "./actions";



const initialState = {
  projects:[
    {
      id:1,
      name:"Origin1",
      location:"bogota",
      floors:10,
      img:[],
      films:[]
    },
    {
      id:2,
      name:"Origin2",
      location:"Barranquilla",
      floors:9
    }
  ]
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case PROJECTS:
return state
    default:
      return state;
  }
};
export default rootReducer;
