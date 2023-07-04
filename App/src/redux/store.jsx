import { configureStore } from "@reduxjs/toolkit";
import reducer from "./bankSlice";

export default configureStore({
  reducer: {
    bank: reducer,
  },
});
