import React from "react";
import { useLocation, useOutletContext } from "react-router-dom";

const Dummy = (props) => {
  const params = useLocation();
  const dataFromOutlet = useOutletContext();

  // console.log("data from dataFromOutlet =", dataFromOutlet);
  // console.log("data from params =", params);
  // console.log("data from props =", props);
  return <div className="dummy">I am a Dummy component to ttest</div>;
};

export default Dummy;
