import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [
        { id: 1, name: "Jhon", email: "jjj@gmail.com" },
        { id: 2, name: "Anne", email: "aaa@gmail.com" },
        { id: 3, name: "Dan", email: "ddd@gmail.com" },
    ],
};

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
});

export default userSlice.reducer;