import { combineReducers } from "@reduxjs/toolkit";
import dataReducer from "../Slice/DataSlice/index";

const rootReducer = combineReducers({
  data: dataReducer,
});

export default rootReducer;