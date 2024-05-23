import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    firstName: "",
    lastName: "",
    email: "",
    id: "",
    role: "",
    mobileNumber: "",
  },
  reducers: {
    loadUser: (state, action) => {
      const { firstName, lastName, email, id, role, mobileNumber } = action.payload;
      state.firstName = firstName;
      state.lastName = lastName;
      state.email = email;
      state.id = id;
      state.role = role;
      state.mobileNumber = mobileNumber;
    },
    removeUser: (state) => {
      state.firstName = "";
      state.lastName = "";
      state.email = "";
      state.id = "";
      state.role = "";
      state.mobileNumber = "";
    }
  }
});

export const { loadUser, removeUser } = userSlice.actions;
export const userDetails = (state) => state.user;
export default userSlice.reducer;
