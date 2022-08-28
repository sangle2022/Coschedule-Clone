import { Avatar, Box ,Button,Circle,CircularProgress,CircularProgressLabel,color,Divider,Flex, Grid,GridItem, Icon, Input, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import {AiOutlineCheck} from "react-icons/ai"
import { FaCheck } from "react-icons/fa"
import {GrAdd} from "react-icons/gr"
import "./calendar_home.css" 
import {AddIcon} from "@chakra-ui/icons" 
import { Link } from 'react-router-dom'
// import GoPlus from "@chakra-ui/icons"

const Main = () => {
  const [completed, setCompleted] = useState(0)
  const start = []
  const Weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  const days = []
  let current=new Date()
  for(let i=0;i<7;i++)
  {
      days.push(current.getDay()+i);
  }
  for (let i = 0; i<7; i++)
  {
    if (i == 0) start.push({ id: i, day: "TODAY" })
    else if (i == 1) start.push({ id: i, day: "TOMORROW" })
    else if (days[i] < 7) start.push({ id: i, day: Weekdays[days[i]] })
    else start.push({id:i,day:Weekdays[days[i]-7]})
  }


  const handleChange = (e) => {
    e.target.checked?setCompleted((prev)=>prev+20):setCompleted((prev)=>prev-20)
  }
  return (
    <Box h="">
      <Box w="99%" boxShadow={"lg"} p="0.8rem" border={"1px solid rgba(1,1,1,0.2)"} h="" borderRadius={"10px"} textAlign="left">
        <Text  fontWeight={"semibold"} fontSize="19px">🏆Getting Started</Text>
        <Text mt="0.2rem">Successful marketers complete these milestones within their first week.</Text>
        <Flex  mt="0.4rem" p="0.3rem" alignItems={"center"} >
          <Box w="80%">
            <Grid gridTemplateRows={"repeat(3,110px)"} gridTemplateColumns={"repeat(2,1fr)"} gap="10px">
              <GridItem   border={"1px solid rgba(1,1,1,0.2)"} borderRadius="10px"  _hover={{boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
                <Flex borderRadius={"md"} gap="0.5rem"  p="0.6rem" pos={"relative"}>
                  <Box >
                    <input className='checkedBox' onChange={(e) => handleChange(e)} type="checkbox"  />
                  </Box>
                  
                  <Flex direction={"column"} gap="0.2rem" >
                    <Text fontSize={"sm"} fontWeight={"semibold"}> View the Getting Started Guide</Text>
                    <Text fontWeight={"md"} fontSize="xs" color={"gray.500"} >Get tips & best practices to organize all of your marketing on your new calendar.</Text>
                  </Flex>
                </Flex>
              </GridItem>
              <GridItem  border={"1px solid rgba(1,1,1,0.2)"} borderRadius="10px" _hover={{boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
                <Flex borderRadius={"md"} gap="0.5rem"  p="0.6rem">
                  <Box >
                    <input className='checkedBox' onChange={(e) => handleChange(e)} type="checkbox"  />
                  </Box>
                  <Flex direction={"column"} gap="0.2rem">
                    <Text fontSize={"sm"} fontWeight={"semibold"}> Connect an integration</Text>
                    <Text fontWeight={"md"} fontSize="xs" color={"gray.500"}>Sync content from your favorite tools like WordPress, Mailchimp, Facebook, Twitter, & more.</Text>
                  </Flex>
                </Flex>
              </GridItem>
              <GridItem  border={"1px solid rgba(1,1,1,0.2)"} borderRadius="10px" _hover={{boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
                <Flex borderRadius={"md"} gap="0.5rem"  p="0.6rem">
                  <Box >
                    <input className='checkedBox' onChange={(e) => handleChange(e)} type="checkbox"  />
                  </Box>
                  <Flex direction={"column"} gap="0.2rem">
                    <Text fontSize={"sm"} fontWeight={"semibold"}>Create a social message</Text>
                    <Text fontWeight={"md"} fontSize="xs" color={"gray.500"}>Schedule & publish social messages on Facebook, Instagram, LinkedIn, Pinterest, & Twitter.</Text>
                  </Flex>
                </Flex>
              </GridItem>
              <GridItem  border={"1px solid rgba(1,1,1,0.2)"} borderRadius="10px" _hover={{boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
                <Flex borderRadius={"md"} gap="0.5rem"  p="0.6rem">
                  <Box >
                    <input className='checkedBox' onChange={(e) => handleChange(e)} type="checkbox"  />
                  </Box>
                  <Flex direction={"column"} gap="0.2rem">
                    <Text fontSize={"sm"} fontWeight={"semibold"}>Customize your calendar</Text>
                    <Text fontWeight={"md"} fontSize="xs" color={"gray.500"}>Update your settings to visually organize your calendar with color labels, project types, & tags.</Text>
                  </Flex>
                </Flex>
              </GridItem>
              <GridItem  border={"1px solid rgba(1,1,1,0.2)"} borderRadius="10px" _hover={{boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
                <Flex borderRadius={"md"} gap="0.5rem"  p="0.6rem">
                  <Box >
                    <input className='checkedBox' onChange={(e) => handleChange(e)} type="checkbox"  />
                  </Box>
                  <Flex direction={"column"} gap="0.2rem">
                    <Text fontSize={"sm"} fontWeight={"semibold"}>Create your first project</Text>
                    <Text fontWeight={"md"} fontSize="xs" color={"gray.500"}>Add your planned marketing projects to your calendar to get total visibility of all your work.</Text>
                  </Flex>
                </Flex>
              </GridItem>
            </Grid>
          </Box>
          <Flex direction={"column"}  w="20% " gap="0.5rem" alignItems={"center"}>
            <CircularProgress value={completed} size="100px" color='#8ac884' thickness={"6px"}>
              <CircularProgressLabel>{completed }%</CircularProgressLabel>
            </CircularProgress>
            <Text fontSize={"sm"} color="gray.500">Setup Progress</Text>
          </Flex>
        </Flex>
      </Box>
      <Box mt="1rem" boxShadow={"xl"} w="99%" p="0.5rem" border={"1px solid rgba(1,1,1,0.2)"} h="" borderRadius={"10px"}>
        <Flex direction={"column"} p="0.5rem">
          <Flex  alignItems={"center"} gap="0.5rem">
            <Icon h="6" w="6" as={FaCheck} />
            <Text fontWeight={"bold"} color="gray.700" fontSize={"xl"}>My Upcoming</Text>
            <Spacer />
            <Button bgColor={"#d17760"} color="white" _hover={{backgroundColor:"#d17760"}} ><AddIcon /> <Link to="/newproject"><Text ml="0.5rem" >New Task</Text></Link></Button>
          </Flex>
            {
            start.map((item)=>
            {
                return <Box w='100%' py='1rem' h='100px'  key={item.id}>
                <Flex p='10px' direction='row'  gap='15px' justifyContent='space-between' w='100%' alignItems='center'>
                    <Box><Text color='gray.600' fontWeight='bold'>{item.day.toUpperCase()}</Text></Box>
                    <Divider color='gray.700' />
                    <Box><Link to="/newproject"><Button colorScheme='none' variant='ghost' ><Icon as={GrAdd}/></Button></Link></Box>
                </Flex>
            </Box>
            })
        }
        </Flex>
      </Box>
    </Box>
  )
}

export default Main