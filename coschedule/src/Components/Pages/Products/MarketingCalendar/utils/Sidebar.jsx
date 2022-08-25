import { Avatar, Box, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const Sidebar = () => {
  return (
    <Box boxShadow={"dark-lg"} pos={"sticky"} top="0px" h="100vh" w="25vw">
      <Box mt="4rem" >
        <Heading fontSize={"2xl"} fontWeight={"semibold"} color={"#e76642"}>
          Create Your <Text as={"span"} bgColor={"#fff5ef"}>Forever-Free</Text> Marketing Calendar
        </Heading>
        <Flex gap="1rem" direction={"column"} justifyContent="center" alignItems="center"mt="2rem">
        <Avatar />
          <Heading textAlign={"center"} fontSize={"2xl"} >Welcome Back <br />Mufadal Hatim Sadri !</Heading>
          <Text>You're logged in as</Text>
          <Text px="10px" bgColor={"#fff5ef"} color="#e76642">sadrimufadal@gmail.com</Text>
          <Flex h="50px" bgColor={"#e76642"} p="2rem" alignItems={"center"} borderRadius="md">
            <Text fontWeight={"bold"} color="white">Open Marketing Calendar</Text>
          </Flex>
        </Flex>
      </Box>
    </Box>
  )
}

export default Sidebar