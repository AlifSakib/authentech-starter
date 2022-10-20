import React from "react";
import "./Spinner.module.css";
const Spinner = () => {
  return (
    <div>
      <div className="lds-circle">
        <div></div>
      </div>
    </div>
  );
};

export default Spinner;
