import React, { useContext, useEffect, useState } from "react";
import GlobalContext from "../../Context/GlobalContext";
import { getMonth } from "../../utils/utils";
import Day from "./Day";
import { SimpleGrid, Box } from "@chakra-ui/react";
import CalenderNavbar from "./CalenderNavbar";
const Calender = () => {
  const [monthCurrent, SetMonth] = useState(getMonth());
  const { monthIndex } = useContext(GlobalContext);

  useEffect(() => {
    SetMonth(getMonth(monthIndex));
  }, [monthIndex]);

  return (
    <Box
      w="98%"
      m="auto"
      boxShadow=" rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;"
    >
      <CalenderNavbar />

      <Box>
        {monthCurrent.map((row, i) => (
          <SimpleGrid columns={7} key={i}>
            {row.map((day, ind) => (
              <Day day={day} key={ind} RowIndex={i} />
            ))}
          </SimpleGrid>
        ))}
      </Box>
    </Box>
  );
};

export default Calender;
