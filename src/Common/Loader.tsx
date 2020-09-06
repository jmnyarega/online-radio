import React from "react";
import "../utils/css/loader.css";

const Loader = (props: { show: boolean }): any => {
  const { show } = props;
  return show ? (
    <div className="loader-container">
      <div className="loader-container__css loader-container__animate" />
    </div>
  ) : (
    ""
  );
};

export default Loader;
