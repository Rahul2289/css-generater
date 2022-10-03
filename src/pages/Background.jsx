import { useSelector, useDispatch } from "react-redux";
import {
  setBgColor,
  setBgColorR,
  setDegree,
  setLeftPercentage,
  setRightPercentage,
  resetAll,
} from "../features/BackgroundSlice.js";
import hexRgb from "hex-rgb";
import FilterCard from "./../utils/FilterCard";
import ClipBaordCard from "./../utils/ClipBaordCard";
import Input from "./../utils/Input";

const Background = () => {
  const bg = useSelector((state) => state.background);
  const dispatch = useDispatch();

  const color1 = hexRgb(bg.backgroundColor);
  const color2 = hexRgb(bg.backgroundColorR);

  const bgColor1 = `rgb(${color1.red},${color1.green},${color1.blue},${color1.alpha})`;
  const bgColor2 = `rgb(${color2.red},${color2.green},${color2.blue},${color2.alpha})`;

  return (
    <div className="bg-green-500 max-w-7xl m-auto px-2 pb-2 pt-7 min-h-[calc(100vh-3.5rem)] flex flex-col justify-evenly items-center space-y-2">
      {/* background */}
      <div
        className="bg-white w-11/12 m-auto h-56 rounded-md "
        style={{
          background: `linear-gradient(${bg.degree}deg, ${bgColor1}, ${bg.LeftPercentage}%, ${bgColor2} ${bg.RightPercentage}%)`,
        }}
      ></div>
      {/* filters */}
      <FilterCard>
        <button
          type="button"
          onClick={() => dispatch(resetAll())}
          className="absolute  top-2 left-2 bg-red-600 text-white p-1 rounded-md px-4"
        >
          Reset
        </button>

        <Input
          type="color"
          name="backgroundColor"
          value={bg.backgroundColor}
          handleChange={(e) => dispatch(setBgColor(e.target.value))}
        />

        <Input
          type="color"
          value={bg.backgroundColorR}
          handleChange={(e) => dispatch(setBgColorR(e.target.value))}
        />
        <Input
          type="number"
          name="Deg"
          min="0"
          max="360"
          value={bg.degree}
          handleChange={(e) => dispatch(setDegree(e.target.value))}
        />
        <Input
          type="number"
          name="Left (%)"
          min="0"
          max="100"
          value={bg.LeftPercentage}
          handleChange={(e) => dispatch(setLeftPercentage(e.target.value))}
        />
        <Input
          type="number"
          name="Right (%)"
          min="0"
          max="100"
          value={bg.RightPercentage}
          handleChange={(e) => dispatch(setRightPercentage(e.target.value))}
        />
      </FilterCard>
      {/* clipboard */}
      <ClipBaordCard className="p-3 text-white bg-green-700 w-11/12 m-auto min-h-min rounded-md">
        <code>
          {` background:linear-gradient(${bg.degree}deg, ${bgColor1}, ${bg.LeftPercentage}%, ${bgColor2} ${bg.RightPercentage}%)`}
          ;
        </code>
      </ClipBaordCard>
    </div>
  );
};

export default Background;
