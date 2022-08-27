import { Box, HStack } from '@chakra-ui/react'
import React from 'react'
import CompanyImage from './Comp/CompanyImage'
import SideCompany from './Comp/SideCompany'

const Company = () => {
  return (
    <HStack width="100%" height="100vh" display="flex">
        <Box width="70%" height="100%" boxSizing='borderBox'>
            <CompanyImage />
        </Box>

        <Box height="100%" width="30%" display="flex" justifyContent="center">
            <SideCompany />
        </Box>
    </HStack>
  )
}

export default Company