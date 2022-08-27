import React from 'react'
import {Box, Flex} from "@chakra-ui/react"
import Mainpage from './utils/Mainpage'
import Sidebar from './utils/Sidebar'
const MarketingCalendar = () => {
    return (
        <Flex>
            <Mainpage />
            <Sidebar />
        </Flex>
  )
}

export default MarketingCalendar