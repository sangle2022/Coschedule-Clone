import { Box, Flex, Heading, Image, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'
import React from 'react'
import  recent  from "./recent.png"
import favorite from "./favorite.png"
const Right = () => {
  return (
    <Box padding={"10px"} boxShadow="2xl" borderTopRadius={"10px"} h="92vh">
      <Tabs >
        <TabList gap="23px" px="10px">
            <Tab _selected={{ color: '#e76642', fontWeight:"semibold" }}>Notification</Tab>
            <Tab _selected={{ color: '#e76642', fontWeight:"semibold"}}>Recent</Tab>
            <Tab _selected={{ color: '#e76642', fontWeight:"semibold"}}>Favorites</Tab>
        </TabList>
        <TabPanels>
            <TabPanel>
           <Flex gap="" direction={"column"} alignItems="center">
             <Image src="https://app.coschedule.com/img/notifications-empty-1888c22fd951298ea32d6524dcd478f6.png" w="126px" h="216px"/>
              <Heading mt="3rem" size={"lg"} fontWeight="md">All caught up!</Heading>
              <Text mt="1rem">No-new notifications</Text>
          </Flex>
            </TabPanel>
            <TabPanel>
                      <Flex gap="2rem" direction={"column"} alignItems="center" justifyContent={"center"}>
                          <Image src={recent} />
                          <Text fontWeight={"semibold"}>Projects and campaigns that you have recently visited will appear here.</Text>
                     </Flex>
                  </TabPanel>
            <TabPanel>
                      <Flex gap="2rem" direction={"column"} alignItems="center" justifyContent={"center"}>
                          <Image src={favorite} />
                          <Text fontWeight={"semibold"}>Favorite projects and campaigns that you work on frequently and they will appear here.</Text>
                     </Flex>
            </TabPanel>
        </TabPanels>
          </Tabs>
    </Box>
  )
}

export default Right