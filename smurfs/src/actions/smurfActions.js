import axios from "axios";
export const FETCH_SMURFS_START = "FETCH_SMURFS_START";
export const FETCH_SMURFS_SUCCESS = "FETCH_SMURFS_SUCCESS";
export const FETCH_SMURFS_FAIL = "FETCH_SMURFS_FAIL";
export const SUBMITTED_FORM = "SUBMITTED_FORM";
export const ERROR_SUBMIT = "ERROR_SUBMIT";
export const DELETE_FRIEND = "DELETE_FRIEND";

export const getSmurfs = () => (dispatch) => {
  dispatch({ type: FETCH_SMURFS_START });
  axios
    .get("http://localhost:3333/smurfs")
    .then((res) => {
      dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: FETCH_SMURFS_FAIL, payload: err.res });
    });
};

export const formSubmit = (formValues) => (dispatch) => {
  axios
    .post("http://localhost:3333/smurfs", formValues)
    .then((res) => {
      console.log("RES-POST", res);
      dispatch({ type: "SUBMITTED_FORM", payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: "ERROR_SUBMIT", payload: err.res });
    });
};

export const deleteFriend = (item) => (dispatch) => {
  // event.preventDefault();
  axios
    .delete(`http://localhost:3333/smurfs/${item.id}`)
    .then((res) => {
      console.log("res.data - DELETE:", res.data);

      dispatch({ type: "DELETE_FRIEND", payload: res.data });
    })
    .catch((err) => console.log("DELETE ERROR:", err));
};
