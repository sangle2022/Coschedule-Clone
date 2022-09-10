import React, { useContext } from "react";
import { Box, Text, Avatar, Button } from "@chakra-ui/react";
import { DayContext } from "../../Context/ContextDay";
import { useNavigate } from "react-router-dom";

import { GrBlog } from "react-icons/gr";
import { useDispatch } from "react-redux";
import { DeleteSchedule } from "../../Redux/AppReducer/action";
import { GrFormClose } from "react-icons/gr";

const DayProjects = ({ title, refNO }) => {
  const dispatch = useDispatch();
  const { SetReference } = useContext(DayContext);
  const navigate = useNavigate();
  const handleClick = (refNO) => {
    SetReference(refNO);

    dispatch(DeleteSchedule(refNO));
  };

  return (
    <Box
      boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
      borderRadius="10px"
      h="auto"
      w="160"
      className="pro"
    >
      <Text
        bg="gray.200"
        display="flex"
        fontSize={"20px"}
        justifyContent="space-around"
        alignItems={"center"}
        p="10px"
      >
        <GrBlog marginleft="20px" /> Blog Post
        <label id="cross" onClick={() => handleClick(refNO)}>
          <GrFormClose />
        </label>
      </Text>

      <Box
        borderRadius="10px"
        h="50px"
        p="10px"
        display="flex"
        fontSize={"20px"}
        justifyContent="space-around"
        alignItems={"center"}
      >
        <Text fontSize={"25px"}>{title}</Text>
        <Avatar
          size={"sm"}
          src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
        />
      </Box>
    </Box>
  );
};

export default DayProjects;
