import React, { memo } from "react";

const ToggleStatus = ({status}) => {
  const fontColor = status ? 'green' : 'red';
  return (
    <div>
      <h1 style={{color:`${fontColor}`}}>{status ?  'ON' : 'OFF'}</h1>
    </div>
  );
};

export default memo(ToggleStatus);
