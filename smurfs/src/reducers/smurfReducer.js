import {
  FETCH_SMURFS_START,
  FETCH_SMURFS_SUCCESS,
  FETCH_SMURFS_FAIL,
  SUBMITTED_FORM,
  ERROR_SUBMIT,
  DELETE_FRIEND,
} from "../actions";

const initialState = {
  smurfsGroup: [],
  fecthingSmurfs: false,
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SMURFS_START:
      return {
        ...state,
        fecthingSmurfs: true,
      };
    case FETCH_SMURFS_SUCCESS:
      return {
        ...state,
        smurfsGroup: action.payload,
        fecthingSmurfs: false,
        error: "",
      };
    case FETCH_SMURFS_FAIL:
      return {
        ...state,
        fecthingSmurfs: false,
        error: action.payload,
      };
    case SUBMITTED_FORM:
      return {
        ...state,
        smurfsGroup: [...state.smurfsGroup, action.payload],
      };
    case ERROR_SUBMIT:
      return {
        ...state,
        fecthingSmurfs: false,
        error: action.payload,
      };
    case DELETE_FRIEND:
      return {
        ...state,
        smurfsGroup: [
          ...state.smurfsGroup.filter((item) => item.id !== action.payload.id),
        ],
      };
    default:
      return state;
  }
};

export default reducer;
