import React, { useState } from "react";
import dayjs from "dayjs";
const GlobalContext = React.createContext({
  monthIndex: 0,
  setMonthIndex: (index) => {},
});

export function ContextWrapper({ children }) {
  const [monthIndex, setMonthIndex] = useState(dayjs().month());

  return (
    <GlobalContext.Provider
      value={{
        monthIndex,
        setMonthIndex,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalContext;
