import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/users/userSlice";

const store = configureStore({
    reducer: {
        users: userReducer, // "users" must match the key you're accessing in `useSelector`
    },
});
export default store;