import React from 'react'
import {Avatar, Box, Flex, Heading, Icon, Text} from "@chakra-ui/react"
import Sidebar from './utils/Sidebar'
import Main from './utils/Main'
import Right from './utils/Right'
import {AiOutlineHome} from "react-icons/ai"
const Calendar_home = () => {
  return (
    <Box>
      <Flex pos={"sticky"} top="0px" gap="3rem" alignItems="center" bgColor="#F8F8F8" h="50px" p=" 0.2rem 0.5rem"> 
        <Flex alignItems={"center"} gap="0.5rem"><Avatar size={"sm"} />Mufadal Hatim Sadriwala</Flex>
        <Flex alignItems={"center"} gap="0.2rem">
          <Icon as={AiOutlineHome} h="5" w="5"/>
          <Heading fontSize={"xl"} cursor="pointer">Home</Heading>
        </Flex>
      </Flex>
      <Flex >
          <Box minW="18%"><Sidebar /></Box>
          <Box  minW="55%" h="93vh" overflowY={"scroll"} > <Main /></Box>
          <Box padding={"5px"} minW="27%"><Right /></Box>
      </Flex>
    </Box>
  )
}

export default Calendar_home