//import React, { useState, useEffect, useCallback } from 'react';
import React, { useRef } from "react";

const UseRefv2: React.FC<any> = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.className = "redInput";
    }
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus the input</button>
    </div>
  );
};

export default UseRefv2;
