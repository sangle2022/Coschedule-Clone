import { createContext, useState } from "react";

export const DayContext = createContext();

export const DayContextProvider = ({ children }) => {
  const [ScheduleDay, SetSchedule] = useState("");

  const [newproject, SetProject] = useState();

  const [RefNo, SetReference] = useState("");

  return (
    <DayContext.Provider
      value={{
        ScheduleDay,
        SetSchedule,
        newproject,
        SetProject,
        RefNo,
        SetReference,
      }}
    >
      {children}
    </DayContext.Provider>
  );
};
