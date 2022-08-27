import { Box, Flex, Image, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import logo from "./logo.png"
const NavbarCalendar = () => {
    return (
        <Flex alignItems="center" p="2" fontWeight={"semibold"}  color="white" bgGradient="linear-gradient(90deg,#f37e5d 0%,#f9a97d)"> 
            <Flex alignItems={"center"} gap="2rem">
                <Image src={logo} h="2.5rem" />
                <Text>Features</Text>
                <Text>Marketing Calendar Pro</Text>
            </Flex>
            <Spacer />
            <Box>
                <Text>Sign In</Text>
            </Box>
      </Flex>
  )
}

export default NavbarCalendar