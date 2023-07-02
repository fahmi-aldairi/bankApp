import { configureStore } from "@reduxjs/toolkit";
import bankSlice from "./bankSlice";
// import counterSlice from "../features/counter/counterSlice";
export default configureStore({
  reducer: {
    bank: bankSlice,
    // counter: counterSlice,
  },
});
//
