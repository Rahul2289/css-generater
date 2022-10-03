import FilterCard from "./../utils/FilterCard";
import ClipBaordCard from "./../utils/ClipBaordCard";
import ResetBtn from "./../utils/ResetBtn";
import Input from "./../utils/Input";

import {
  setBgColor,
  setBorderRadius,
  setXAxis,
  setYAxis,
  setDistance,
  setBlur,
  setshadowColor,
  resetAll,
} from "../features/BoxShadowSlice.js";

import { useSelector, useDispatch } from "react-redux";

const BoxShadow = () => {
  const shadow = useSelector((state) => state.BoxShadow);
  const dispatch = useDispatch();
  return (
    <div className="bg-green-500 max-w-7xl m-auto px-2 pb-2 pt-7 min-h-[calc(100vh-3.5rem)] flex flex-col  space-y-2 justify-center items-center">
      {/* box */}

      <div
        style={{ background: `${shadow.backgroundColor}` }}
        className=" w-11/12 m-auto h-56 rounded-md flex justify-center items-center"
      >
        <div
          className="w-28 h-28"
          style={{
            background: `${shadow.backgroundColor}`,
            borderRadius: `${shadow.borderRadius}px`,
            boxShadow: `${shadow.XAxis}px ${shadow.YAxis}px ${shadow.Blur}px ${shadow.Distance}px  ${shadow.shadowColor}`,
          }}
        />
      </div>

      {/* filter */}

      <FilterCard>
        <ResetBtn onClick={() => dispatch(resetAll())} />

        <Input
          type="color"
          name="background-color"
          value={shadow.backgroundColor}
          handleChange={(e) => dispatch(setBgColor(e.target.value))}
        />
        <Input
          type="number"
          name="Border-radius"
          value={shadow.borderRadius}
          handleChange={(e) => dispatch(setBorderRadius(e.target.value))}
        />
        <Input
          type="number"
          name="x-axis"
          value={shadow.XAxis}
          handleChange={(e) => dispatch(setXAxis(e.target.value))}
        />
        <Input
          type="number"
          name="y-axis"
          value={shadow.YAxis}
          handleChange={(e) => dispatch(setYAxis(e.target.value))}
        />
        <Input
          type="number"
          name="Blur"
          value={shadow.Blur}
          handleChange={(e) => dispatch(setBlur(e.target.value))}
        />
        <Input
          type="number"
          name="distance"
          value={shadow.Distance}
          handleChange={(e) => dispatch(setDistance(e.target.value))}
        />
        <Input
          type="color"
          name="shadow color"
          value={shadow.shadowColor}
          handleChange={(e) => dispatch(setshadowColor(e.target.value))}
        />
      </FilterCard>

      {/* clipBoard */}

      <ClipBaordCard>
        <code>
          background: {shadow.backgroundColor};
          <br />
          border-radius:{shadow.borderRadius}px;
          <br />
          box-shadow:{shadow.XAxis}px {shadow.YAxis}px {shadow.Blur}px{" "}
          {shadow.Distance}px {shadow.shadowColor}
        </code>
      </ClipBaordCard>
    </div>
  );
};

export default BoxShadow;
