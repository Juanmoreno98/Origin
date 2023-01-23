


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
    default:
      return state;
  }
};
export default rootReducer;
