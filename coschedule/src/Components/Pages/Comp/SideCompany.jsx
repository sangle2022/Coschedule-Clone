import { Box, Button, Heading, Input, Text } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./login.css"

const SideCompany = () => {
  const navigate=useNavigate()
  const gotoCalender=()=>{
    navigate("/calendar-home")

  }
  return (
   <Box  height="100%" width="80%">
    <br />
    <br />

    <Text as="h3" size="xl" fontSize="24px" fontWeight="400" className='fontGiven' color="#999">
    Before we get started,
     we just need a few more details
    </Text>
    <br />
    <br />
    <Text  fontSize="12px" marginLeft="5px" textAlign="left" color="#999">FULL NAME</Text>
    <Input  placeholder='Full Name'  />

    <br />
    <br />
    <Text  fontSize="12px" marginLeft="5px" textAlign="left" color="#999">COMPANY NAME</Text>
    <Input placeholder='Company Name' />

    <br />
    <br />
    <Text fontSize="12px" marginLeft="5px" textAlign="left" color="#999">WEBSITE URL</Text>
    <Input  placeholder='Company Website URL' />

    <br />
    <br />


    <Button color="white" backgroundColor="#d17760" 
        _hover={{background:"#f37e5d"}} onClick={gotoCalender}>Take To My Calendar</Button>

    <br />
    <br />
    <Box display="flex" justifyContent="center" gap="4px">
        <Text>Have a questions?</Text>
        <Text _hover={{textDecoration:"underline",cursor:"pointer" }} color="#d17760;">Contact Support</Text>
    </Box>
    
   </Box>

  )
}

export default SideCompany