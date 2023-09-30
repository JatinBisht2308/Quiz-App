import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    userData : {
        name:"user",
        mail:"user@mail.com"
    }
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state,action) => {
           const loginCredentials = action.payload;
           console.log(loginCredentials);
           state.userData = loginCredentials;
           console.log(state.userData);
        },
    }
});
export const {login} = authSlice.actions;
export default authSlice.reducer;