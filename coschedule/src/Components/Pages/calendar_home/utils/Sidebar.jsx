import { Box, calc, Divider, Flex, Icon, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineHome, AiOutlineCalendar } from "react-icons/ai"
import { BsShuffle, BsBookmarkStar,BsQuestionCircle } from "react-icons/bs"
import { SiSimpleanalytics } from "react-icons/si"
import {FiSettings} from "react-icons/fi"
import { Link } from 'react-router-dom'
const Sidebar = () => {
  return (
      <Box pos={"sticky"}  top="40px"  bgColor="#F8F8F8">
          <Flex direction={"column"}gap="0.5rem" px="0.3rem" py="1rem" textAlign={"left"}  w="90%" h={"93vh"}>
              <Flex alignItems={"center"} gap="0.5rem" color={"white"}  p="0.5rem" borderRadius={"md"} bgColor={"#d17760"}><Icon as={AiOutlineHome} h="4" w="4"/><Text  fontSize="12.5px"fontWeight={"500"}>Home</Text></Flex>
              <Link to="/calender" ><Flex alignItems={"center"} gap="0.5rem" p="0.5rem"><Icon as={AiOutlineCalendar} h="4" w="4"/><Text  color="gray.700"fontWeight={"500"} fontSize="12.5px">Calendar</Text></Flex></Link>
              <Divider orientation='horizontal' />
              <Flex alignItems={"center"} gap="0.5rem" p="0.5rem"><Icon as={BsShuffle} h="4" w="4"/><Text  color="gray.700"fontWeight={"500"} fontSize="12.5px">ReQueue</Text></Flex>
              <Flex alignItems={"center"} gap="0.5rem" p="0.5rem"><Icon as={SiSimpleanalytics} h="4" w="4"/><Text color="gray.700" fontWeight={"500"} fontSize="12.5px">Analytics</Text></Flex>
              <Flex alignItems={"center"} gap="0.5rem" p="0.5rem"><Icon color={"orange.300"} as={BsBookmarkStar} h="4" w="4"/><Text  color="orange.300"fontWeight={"500"} fontSize="12.5px" >Upgrade Now</Text></Flex>
              <Spacer />
              <Divider orientation='horizontal' />
              <Flex alignItems={"center"} gap="0.5rem" p="0.5rem"><Icon as={FiSettings} h="4" w="4" /><Text  fontWeight={"500"} fontSize="12.5px" >Setting</Text></Flex>
              <Divider />
              <Flex alignItems={"center"} gap="0.5rem" p="0.5rem"><Icon  as={BsQuestionCircle} h="4" w="4"/><Text fontWeight={"500"} fontSize="12.5px" >Get Support</Text></Flex>
              
          </Flex>
    </Box>
  )
}

export default Sidebar