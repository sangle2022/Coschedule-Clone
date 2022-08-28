import {
  AddIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  Search2Icon,
  SunIcon,
} from "@chakra-ui/icons";
import { Box, Button, Flex, Center, Text, Spacer } from "@chakra-ui/react";
 import dayjs from "dayjs";
import React, { useContext } from "react";
import GlobalContext from "../../Context/GlobalContext";
import { Link, useNavigate } from "react-router-dom";
import { DayContext } from "../../Context/ContextDay";

const CalenderNavbar = () => {
  const { monthIndex, setMonthIndex } = useContext(GlobalContext);
  const navigate = useNavigate();
  const { SetSchedule } = useContext(DayContext);
  const HandleChange = () => {
    SetSchedule(`${dayjs().format("DD-MMMM-YYYY")}`);
    navigate("/newproject");
  };

  return (
    <Box shadow=" rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;">
      <Flex
        bgColor="#f7f7f7"
        padding={"15px 5px"}
        justifyContent="space-between"
      >
        <Link to="/calendar-home">
          <Button>Home</Button>
        </Link>

        <Box display={"flex"} justifyContent={"space-evenly"} w="400px">
          <Button
            colorScheme={"gray"}
            variant="ghost"
            onClick={() => setMonthIndex(monthIndex - 1)}
          >
            <ChevronLeftIcon />
          </Button>
          <Text
            fontSize="2xl"
            color="
#727272"
          >
            {dayjs(new Date(dayjs().year(), monthIndex)).format(" MMMM YYYY")}
          </Text>
          <Button
            colorScheme={"gray"}
            variant="ghost"
            onClick={() => setMonthIndex(monthIndex + 1)}
          >
            <ChevronRightIcon />
          </Button>
        </Box>
        <Flex justifyContent={"space-evenly"} w="16rem">
          <Center>
            <Search2Icon w={5} h={5} margin={"10px"} />
          </Center>

          <>
            <Button
              bg="#d17760"
              color={"white"}
              onClick={HandleChange}
              fontSize={"19px"}
            >
              {<AddIcon marginRight={"0.1rem"} />} Create
            </Button>
          </>
          <Button colorScheme={"black"} variant="outline">
            {<SunIcon marginRight={"0.3rem"} />} Ideas{" "}
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default CalenderNavbar;
