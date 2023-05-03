import React, { useState } from "react";

const Inputs = () => {
  const [massage, setmassage] = useState("");

  return (
    <div>
      <input
        type="text "
        name="massage"
        onChange={(e) => {
          setmassage(e.target.value);
        }}
      />

      
      <p>{massage}</p>
    </div>
  );
};

export default Inputs;
