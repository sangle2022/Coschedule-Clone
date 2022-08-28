import React, { useContext } from "react";
import { Box, Text, Flex, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
 import dayjs from "dayjs";
import { AddIcon } from "@chakra-ui/icons";

import { DayContext } from "../../Context/ContextDay";
import { useSelector } from "react-redux";
import DayProjects from "./DayProject";

const Day = ({ day, RowIndex }) => {
  const getCurrentBorder = () => {
    return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
      ? "4px solid blue"
      : "1px solid grey";
  };

  const { SetSchedule } = useContext(DayContext);
  const Navigate = useNavigate();
  const data = useSelector((state) => state.logger.project);

  const dayTask = data.filter((e) => e.date === day.format("DD-MMMM-YYYY"));
  const HandleChange = () => {
    SetSchedule(`${day.format("DD-MMMM-YYYY")}`);
    Navigate("/newproject");
  };

  return (
    <Box
      className="box"
      p="11px"
      border={`${getCurrentBorder()}`}
      w="165"
      minH="210px"
      textAlign="start"
    >
      {RowIndex === 0 && (
        <Text fontSize="lg">{day.format("dddd").toUpperCase()}</Text>
      )}

      <Flex color={""} justifyContent="space-between">
        <Text>{day.format("MMM-DD")}</Text>
        <Button onClick={HandleChange} bgColor={"white"}>
          <AddIcon marginRight={"0.4rem"} className="AddIcon" />
        </Button>
      </Flex>
      <Box>
        {dayTask.map((e) => (
          <DayProjects key={e.refNO} {...e} />
        ))}
      </Box>
    </Box>
  );
};

export default Day;
