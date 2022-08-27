import {
  Box,
  Button,
  Input,
  Stack,
  Text,
  VStack,
  Flex,
  HStack,
  Avatar,
} from "@chakra-ui/react";
import { GrBlog } from "react-icons/gr";
import { CalendarIcon } from "@chakra-ui/icons";
import React, { useContext, useState, useRef } from "react";

import { CloseIcon } from "@chakra-ui/icons";
import { Link, useNavigate } from "react-router-dom";
import { DayContext } from "../../Context/DayContext";
import { addNewProject } from "../../Redux/AppReducer/action";
import { v4 as uuid } from "uuid";
import { useDispatch } from "react-redux";
const CreateNewProject = () => {
  const { daysechdule } = useContext(DayContext);
  const { setNewproject, setProjectrefNo } = useContext(DayContext);

  const currentdate = useRef(daysechdule);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [text, setText] = useState("");

  const handleCreateButton = () => {
    if (text) {
      const payload = {
        title: text,

        date: currentdate.current,

        // To create a random UUID...
        refNO: uuid(),
      };

      setProjectrefNo(payload.refNO);
      dispatch(addNewProject(payload));

      navigate("/calender");
    } else {
      alert("Please Add Project");
    }
  };

  return (
    <Box w="100%" h="28rem">
      <Box marginleft={"1500px"} marginTop="30px">
        <Link to="/">
          <CloseIcon />
        </Link>
      </Box>

      <Stack w="800px" m="auto" marginTop="15rem">
        <Flex>
          <Box></Box>
          <Box
            w="600px"
            alignItems={"center"}
            marginleft={"300px"}
            display="flex"
            justifyContent={"space-evenly"}
          >
            <Avatar border={"1px solid lightgrey"} bg="white" size={"md"} />
            <Avatar
              size={"md"}
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
            />

            <Box
              p="5px"
              alignItems={"center"}
              w="250px"
              bg="#f7f7f7"
              display="flex"
              justifyContent={"space-evenly"}
            >
              <Text>{currentdate.current} </Text>
              <CalendarIcon />
            </Box>
          </Box>
        </Flex>
        <br />
        <Input
          placeholder="New Project Title"
          w="800px"
          h="70px"
          p="20px 5px"
          fontSize="50px"
          onChange={(e) => setText(e.target.value)}
        />
        <br />
        <HStack justifyContent={"space-between"}>
          <Button variant="ghost">
            {" "}
            <GrBlog marginleft="20px" /> Blog Post
          </Button>
          <Button variant="ghost">More Option</Button>
        </HStack>
        <br /> <br /> <br />
        <VStack>
          <Button
            onClick={handleCreateButton}
            marginleft={"600px"}
            w="220px"
            h="50px"
            fontSize={"30px"}
            bg="#d17760"
            variant="none"
            color={"white"}
          >
            Create Project
          </Button>
        </VStack>
      </Stack>
    </Box>
  );
};

export default CreateNewProject;
