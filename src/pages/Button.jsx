import { useSelector, useDispatch } from "react-redux";
import {
  setWidth,
  setHeight,
  setBgColor,
  setColor,
  setBorderRadius,
  setFontSize,
  resetAll,
} from "../features/ButtonSlice.js";
import Input from "./../utils/Input";
import ClipBaordCard from "./../utils/ClipBaordCard";
import FilterCard from "./../utils/FilterCard";

const Button = () => {
  const button = useSelector((state) => state.button);
  const dispatch = useDispatch();

  return (
    <div className="bg-green-500 max-w-7xl m-auto px-2 pb-2 pt-7 min-h-[calc(100vh-3.5rem)] flex flex-col  space-y-2 justify-center items-center">
      {/* button */}

      <div className="bg-white w-11/12 m-auto h-56 rounded-md flex justify-center items-center">
        <button
          className="py-2 px-3"
          style={{
            background: `${button.backgroundColor}`,
            color: `${button.Color}`,
            borderRadius: `${button.BorderRadius}px`,
            width: `${button.Width}px`,
            height: `${button.Height}px`,
            fontSize: `${button.FontSize}px`,
          }}
        >
          Button
        </button>
      </div>
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
          type="range"
          name="Width (px)"
          min="0"
          max="300"
          value={button.Width}
          handleChange={(e) => dispatch(setWidth(e.target.value))}
        />
        <Input
          type="range"
          name="Height (px)"
          min="0"
          max="200"
          value={button.Height}
          handleChange={(e) => dispatch(setHeight(e.target.value))}
        />
        <Input
          type="color"
          name="Background color"
          value={button.backgroundColor}
          handleChange={(e) => dispatch(setBgColor(e.target.value))}
        />
        <Input
          type="color"
          name="Color"
          value={button.Color}
          handleChange={(e) => dispatch(setColor(e.target.value))}
        />
        <Input
          type="range"
          name="Border Radius (px)"
          min="0"
          max="100"
          value={button.BorderRadius}
          handleChange={(e) => dispatch(setBorderRadius(e.target.value))}
        />

        <Input
          type="range"
          name="font Size (px)"
          min="0"
          max="100"
          value={button.FontSize}
          handleChange={(e) => dispatch(setFontSize(e.target.value))}
        />
      </FilterCard>

      {/* clipBoard */}
      <ClipBaordCard>
        <code>
          width:{button.Width};
          <br />
          height:{button.Height};
          <br />
          background-color:{button.backgroundColor};
          <br />
          color:{button.Color};
          <br />
          border-radius:{button.BorderRadius}px;
          <br />
          font-size:{button.FontSize};
        </code>
      </ClipBaordCard>
    </div>
  );
};

export default Button;
