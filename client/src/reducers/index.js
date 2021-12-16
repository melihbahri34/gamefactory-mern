import authSlice from "./authSlice";
import blogSlice from "./blogSlice";

import { combineReducers } from "redux";

const allReducers = combineReducers({
    auth: authSlice,
    blog: blogSlice
});

export default allReducers;