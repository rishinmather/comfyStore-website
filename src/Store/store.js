import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../Features/cart/cartslice";
import userReducer from "../Features/user/userSlice";
export const store = configureStore({
  reducer: {
    cartState: cartReducer,
    userState: userReducer,
  },
});
