import React, { useContext, useState, useEffect } from "react";
import {
  Box,
  Grid,
  GridItem,
  Text,
  Flex,
  MenuButton,
  Menu,
  border,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import { AddIcon } from "@chakra-ui/icons";
import './style.css'
import CreateButton from "./CreateButton";
import CreateButtonMenuItem from "./CreateButtonMenu";
import { DayContext } from "../../Context/DayContext";
import { useSelector } from "react-redux";
import DayProjects from "./DayProject";

const Day = ({ day, rowIdx }) => {
  function getCurrentDayClass() {
    return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
      ? ("#e9f0f4")
      : "";
  }
  const getCurrentDayClassBorder=()=>{
    return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
    ? (  "4px solid blue")
    : "1px solid lightgrey";
  }

  const { setDayschdule } = useContext(DayContext);

  const data = useSelector((state) => state.App_reducer.project);

  const dayTask = data.filter((e) => e.date === day.format("DD-MMMM-YYYY"));

  return (
    <Box
      className="myDIV"
      p="10px"
      border={`${getCurrentDayClassBorder()}`}
    
      w="167"
      minH="200px"
      textAlign="start"
      bgColor={`${getCurrentDayClass()}`}
      
    >
      {rowIdx === 0 && (
        <Text fontSize="lg" color={"grey"}>
          {day.format("dddd").toUpperCase()}
        </Text>
      )}

      <Flex color={"grey"} justifyContent="space-between">
        <Text>{day.format("MMM-DD")}</Text>

        <Menu>
          {({ isOpen }) => (
            <>
              <MenuButton
             
                onClick={() => {
                  setDayschdule(`${day.format("DD-MMMM-YYYY")}`);
                }}
              >
                {<AddIcon marginRight={"0.3rem"} className="hide" />}
              </MenuButton>
              <CreateButtonMenuItem id="cross" />
            </>
          )}
        </Menu>
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
