export const PROJECTS = "PROJECTS";

export function projectLoad(payload) {
  return async function (dispatch) {
    try {
      return dispatch({
        type: PROJECTS,
        payload
      })
    } catch (error) {
      console.log(error);
    }
  }
};
