import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Width: 100,
  Height: 40,
  backgroundColor: "#e71313",
  Color: "#dad2d2",
  BorderRadius: 5,
  FontSize: 18,
};

export const ButtonSlice = createSlice({
  name: "button",
  initialState,
  reducers: {
    setWidth: (state, action) => {
      state.Width = action.payload;
    },
    setHeight: (state, action) => {
      state.Height = action.payload;
    },
    setBgColor: (state, action) => {
      state.backgroundColor = action.payload;
    },
    setColor: (state, action) => {
      state.Color = action.payload;
    },
    setBorderRadius: (state, action) => {
      state.BorderRadius = action.payload;
    },
    setFontSize: (state, action) => {
      state.FontSize = action.payload;
    },
    resetAll: (state) => {
      state.Width = 100;
      state.Height = 40;
      state.backgroundColor = "#e71313";
      state.Color = "#dad2d2";
      state.BorderRadius = 5;
      state.FontSize = 18;
    },
  },
});

export const {
  setWidth,
  setHeight,
  setBgColor,
  setColor,
  setBorderRadius,
  setFontSize,
  resetAll,
} = ButtonSlice.actions;

export default ButtonSlice.reducer;
