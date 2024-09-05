import React, { useContext, useState } from "react";
import { LI } from "../../AbstractElements";
import CustomizerContext from "../../../Context/Customizer";
const DarkButton = () => {
  const { addMixBackgroundLayout } = useContext(CustomizerContext);
  const [moonlight, setMoonlight] = useState(false);

  const MoonlightToggle = (light) => {
    if (light) {
      addMixBackgroundLayout("light-only");
      document.body.classList.remove("dark-only");
      document.body.classList.add("light-only");
      setMoonlight(!light);
    } else {
      addMixBackgroundLayout("dark-only");
      document.body.classList.remove("light-only");
      document.body.classList.add("dark-only");
      setMoonlight(!light);
    }
  };
  return (
    <LI>
      <div className="mode" onClick={() => MoonlightToggle(moonlight)}>
        {moonlight ? (
          <i className="fa fa-lightbulb-o"></i>
        ) : (
          <i className="fa fa-moon-o"></i>
        )}
      </div>
    </LI>
  );
};

export default DarkButton;
