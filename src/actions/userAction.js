// Action creator for setting the user
export const SET_USER = (user) => {
    return {
        type: "SET_USER",
        user: user, // Pass the user as an argument to the action
    };
};

// Action creator for setting the user email
export const SET_USER_MAIL = (email) => {
    return {
        type: "SET_USER_MAIL",
        email: email, // Pass the email as an argument to the action
    };
};
