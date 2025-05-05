import { createSlice } from "@reduxjs/toolkit";

const getUserFromStorage = () => {
    try {
        const user = localStorage.getItem('user');
        return user ? JSON.parse(user) : null;
    } catch (error) {
        console.error("Error parsing user from localStorage:", error);
        return null;
    }
};

export const userSlice = createSlice({
    name: "login",
    initialState: {
        logged: getUserFromStorage(),
    },
    reducers: {
        loggedInUser: (state, action) => {
            state.logged = action.payload;
            localStorage.setItem('user', JSON.stringify(action.payload)); // Update localStorage
        },
        loggedOutUser: (state) => {
            state.logged = null;
            localStorage.removeItem('user'); // Clear localStorage on logout
        },
    },
});

export const { loggedInUser, loggedOutUser } = userSlice.actions;
export default userSlice.reducer;