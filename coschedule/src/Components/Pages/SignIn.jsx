import { Box, Heading, HStack } from '@chakra-ui/react'
import React from 'react'
import Sidebar from './Comp/Sidebar'
import SideImage from './Comp/SideImage'

const SignIn = () => {
  return (
    <div  >
    <HStack style={{display:"flex"}}>
    <Box><SideImage/></Box>
    <Box bgColor="white" height="100%"  zIndex="1"><Sidebar/></Box>
    </HStack>   
       
       
    </div>
  )
}

export default SignIn