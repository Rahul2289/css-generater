import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  backgroundColor: "#dac8c8",
  borderRadius: 20,
  XAxis: 5,
  YAxis: 5,
  Blur: 10,
  Distance: 0,
  shadowColor: "#0007",
};

export const BoxShadowSlice = createSlice({
  name: "boxShadow",
  initialState,
  reducers: {
    setBgColor: (state, action) => {
      state.backgroundColor = action.payload;
    },
    setBorderRadius: (state, action) => {
      state.borderRadius = action.payload;
    },
    setXAxis: (state, action) => {
      state.XAxis = action.payload;
    },
    setYAxis: (state, action) => {
      state.YAxis = action.payload;
    },
    setDistance: (state, action) => {
      state.Distance = action.payload;
    },
    setBlur: (state, action) => {
      state.Blur = action.payload;
    },
    setshadowColor: (state, action) => {
      state.shadowColor = action.payload;
    },

    resetAll: (state) => {
      state.backgroundColor = "#dac8c8";
      state.XAxis = 5;
      state.YAxis = 5;
      state.Distance = 0;
      state.Blur = 10;
      state.shadowColor = "#0007";
    },
  },
});

export const {
  setBgColor,
  setBorderRadius,
  setXAxis,
  setYAxis,
  setDistance,
  setBlur,
  setshadowColor,
  resetAll,
} = BoxShadowSlice.actions;

export default BoxShadowSlice.reducer;
