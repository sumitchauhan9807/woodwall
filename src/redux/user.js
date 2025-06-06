import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	user: null,
	token: null,
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setUserData: (state, action) => {
			state.user = action.payload.user;
			state.token = action.payload.jwt;
		},
		logOut: (state) => {
			state.token = null;
      state.user = null;
		},
	},
});

export const { setUserData, logOut } = userSlice.actions;

export default userSlice.reducer;
