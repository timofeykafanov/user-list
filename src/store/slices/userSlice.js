import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
  email: null,
  first_name: null,
  last_name: null,
  avatar: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.first_name = action.payload.first_name;
      state.last_name = action.payload.last_name;
      state.avatar = action.payload.avatar;
    },
    removeUser(state) {
      state.id = null;
      state.email = null;
      state.first_name = null;
      state.last_name = null;
      state.avatar = null;
    }
  },
})

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
