import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  backgroundColor: "#dac8c8",
  backgroundColorR: "#534646",
  degree: 90,
  LeftPercentage: 30,
  RightPercentage: 80,
};

export const backgroundSlice = createSlice({
  name: "background",
  initialState,
  reducers: {
    setBgColor: (state, action) => {
      state.backgroundColor = action.payload;
    },
    setBgColorR: (state, action) => {
      state.backgroundColorR = action.payload;
    },
    setDegree: (state, action) => {
      state.degree = action.payload;
    },
    setLeftPercentage: (state, action) => {
      state.LeftPercentage = action.payload;
    },
    setRightPercentage: (state, action) => {
      state.RightPercentage = action.payload;
    },
    resetAll: (state) => {
      state.backgroundColor = "#dac8c8";
      state.backgroundColorR = "#534646";
      state.degree = 90;
      state.LeftPercentage = 50;
      state.RightPercentage = 70;
    },
  },
});

export const {
  setBgColor,
  setBgColorR,
  setDegree,
  setLeftPercentage,
  setRightPercentage,
  resetAll,
} = backgroundSlice.actions;

export default backgroundSlice.reducer;
