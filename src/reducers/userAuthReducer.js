const userAuthProvider = (state = null, action) => {
    switch (action.type) {
        case "SET_USER":
            // Return a new state with the user data
            return {
                ...state, // Spread the previous state (if any)
                user: action.user, // Update the user with the data from the action
            };

        case "SET_USER_MAIL":
            // Reset the user to null (or handle the email logic here)
            return {
                ...state,
                user: null, // Reset the user data
            };

        default:
            return state; // Return the current state if action type doesn't match
    }
};

export default userAuthProvider;
