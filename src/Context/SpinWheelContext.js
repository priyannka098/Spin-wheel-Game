import React, { createContext, useContext, useState, useEffect } from "react";

const SpinWheelContext = createContext({});

export const SpinWheelContextProvider = ({ children }) => {
  
    const [offer, setOffer] = useState("");

  return (
    <SpinWheelContext.Provider value={{ offer, setOffer }}>
      {children}
    </SpinWheelContext.Provider>
  );
};

export const useSpinWheelOffer= () => useContext(SpinWheelContext);