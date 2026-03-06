import { createSlice } from "@reduxjs/toolkit";
import { users } from "../data/data";

const tableSlice = createSlice({
  name: "table",

  initialState: {
    data: users
  },

  reducers: {

    addUser: (state, action) => {
      state.data.push(action.payload);
    },

    deleteUser: (state, action) => {
      state.data = state.data.filter(
        (user) => user.id !== action.payload
      );
    }

  }
});

export const { addUser, deleteUser } = tableSlice.actions;

export default tableSlice.reducer;