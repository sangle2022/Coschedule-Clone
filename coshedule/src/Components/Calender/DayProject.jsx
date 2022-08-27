import React, { useContext } from "react";
import { Box, Text, Avatar } from "@chakra-ui/react";
import { DayContext } from "../../Context/DayContext";
import { useNavigate } from "react-router-dom";
import './style.css'
import { GrBlog } from "react-icons/gr";
import { useDispatch } from "react-redux";
import { deleteProject } from "../../Redux/AppReducer/action";
import { GrFormClose } from "react-icons/gr";
import { IconContext } from "react-icons";
const DayProjects = ({ title, refNO }) => {
  const dispatch = useDispatch();
  const { setNewproject, setProjectrefNo } = useContext(DayContext);
  const navigate = useNavigate();
  const handleClick = (refNO) => {
    setProjectrefNo(refNO);

    dispatch(deleteProject(refNO));
  };

  return (
    <Box
      boxShadow="rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 5px 16px -8px"
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
        <GrBlog marginleft="20px"  /> Blog Post
        <div id="cross" onClick={() => handleClick(refNO)}>
          <GrFormClose   />
        </div>
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
