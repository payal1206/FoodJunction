// Define the action types
const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";

// Define the action creators
export const login = () => {
  return { type: LOGIN, payload: "" };
};

export const logout = () => {
  return { type: LOGOUT, payload: "" };
};
