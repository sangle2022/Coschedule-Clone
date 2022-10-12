import React, { useState } from 'react'
import {Avatar, Box, Flex, Heading, Icon, Text} from "@chakra-ui/react"
import Sidebar from './utils/Sidebar'
import Main from './utils/Main'
import Right from './utils/Right'
import {AiOutlineHome} from "react-icons/ai"
import { useEffect } from 'react'
import axios from "axios"
const Calendar_home = () => {
  const [username, setUsername] = useState("")
  useEffect(() => {
    axios.get("https://thawing-plains-60298.herokuapp.com/")
      .then(({data}) => {
       setUsername(data[data.length-1].name)
      })
      .catch((e) => {
      console.log(e)
    })
  })
  return (
    <Box>
      <Flex pos={"sticky"} top="0px" gap="3rem" alignItems="center" bgColor="#F8F8F8" h="50px" p=" 0.2rem 0.5rem"> 
        <Flex alignItems={"center"} gap="0.5rem"><Avatar size={"sm"} /><Text>{username?username:"Sign In" }</Text></Flex>
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
