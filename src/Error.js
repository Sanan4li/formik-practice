import React from "react";

const Error = ({ error, visible }) => {
  if (!error || !visible) {
    return null;
  }
  return (
    <>
      <p className="error">{error}</p>
    </>
  );
};

export default Error;
