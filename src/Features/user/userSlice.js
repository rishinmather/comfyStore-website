import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const themes = {
  retro: "retro",
  coffee: "coffee",
};

const getThemeFromLocalStorage = () => {
  const nowtheme = localStorage.getItem("theme") || themes.retro;
  document.documentElement.setAttribute("data-theme", nowtheme);
  return nowtheme;
};

const getuserfromLocstorage = () => {
  return JSON.parse(localStorage.getItem("user")) || null;
};
const initialState = {
  user: getuserfromLocstorage(),
  theme: getThemeFromLocalStorage(),
};

const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    logINuser: (state, action) => {
      const user = { ...action.payload.user, token: action.payload.jwt };
      state.user = user;
      localStorage.setItem("user", JSON.stringify(user));
    },
    logOUTuser: (state, action) => {
      state.user = null;
      localStorage.removeItem("user");
      toast.success("logged out successfully");
    },
    toggleTheme: (state, action) => {
      const { retro, coffee } = themes;
      state.theme = state.theme === retro ? coffee : retro;
      document.documentElement.setAttribute("data-theme", state.theme);
      localStorage.setItem("theme", state.theme);
    },
  },
});

export const { logINuser, logOUTuser, toggleTheme } = userSlice.actions;
export default userSlice.reducer;
