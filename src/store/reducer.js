import { combineReducers } from "redux";
import signUpreducer from "../Component/signupReducer";
import signInreducer from "../Component/signinReducer";

const rootReducer = combineReducers({
  signUpreducer: signUpreducer,
  signInreducer: signInreducer
});

export default rootReducer;
