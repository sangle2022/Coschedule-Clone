import { AddIcon } from "@chakra-ui/icons";
import { Menu, MenuButton, Button } from "@chakra-ui/react";

import React, { useContext } from "react";
import CreateButtonMenuItem from "./CreateButtonMenu";
import dayjs from "dayjs";
import { DayContext } from "../../Context/DayContext";
const CreateButton = () => {
  const { setDayschdule } = useContext(DayContext);
  return (
    <Menu>
      {({ isOpen }) => (
        <>
          <MenuButton
            bg="#d17760"
            color={"white"}
            as={Button}
            fontSize={"19px"}
            onClick={() => {
              setDayschdule(`${dayjs().format("DD-MMMM-YYYY")}`);
            }}
          >
            {<AddIcon marginRight={"0.1rem"} />} Create
          </MenuButton>
          <CreateButtonMenuItem />
        </>
      )}
    </Menu>
  );
};

export default CreateButton;
