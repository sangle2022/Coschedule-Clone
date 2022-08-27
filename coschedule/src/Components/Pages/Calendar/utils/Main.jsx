import { Avatar, Box ,Circle,Flex, Grid, GridItem, Text } from '@chakra-ui/react'
import React from 'react'

const Main = () => {
  return (
    <Box h="">
      <Box w="99%" p="0.8rem" border={"2px solid"} h="" borderRadius={"10px"} textAlign="left">
        <Text fontWeight={"semibold"} fontSize="19px">🏆Getting Started</Text>
        <Text mt="0.2rem">Successful marketers complete these milestones within their first week.</Text>
        <Flex  mt="0.4rem" p="0.3rem" alignItems={"center"}>
          <Box w="80%">
            <Grid gridTemplateRows={"repeat(3,120px)"} gridTemplateColumns={"repeat(2,1fr)"} gap="10px">
              <GridItem   border={"1px solid rgba(1,1,1,0.5)"}>
                <Flex borderRadius={"md"} gap="0.5rem" alignItems={"center"} p="0.6rem">
                  <Avatar />
                  <Flex direction={"column"}>
                    <Text fontWeight={"semibold"}> View the Getting Started Guide</Text>
                    <Text fontWeight={"md"} fontSize="xs">Get tips & best practices to organize all of your marketing on your new calendar.</Text>
                  </Flex>
                </Flex>
              </GridItem>
              <GridItem  border={"1px solid rgba(1,1,1,0.5)"}>
                <Flex borderRadius={"md"} gap="0.5rem" alignItems={"center"} p="0.6rem">
                  <Avatar />
                  <Flex direction={"column"}>
                    <Text fontWeight={"semibold"}> Connect an integration</Text>
                    <Text fontWeight={"md"} fontSize="xs">Sync content from your favorite tools like WordPress, Mailchimp, Facebook, Twitter, & more.</Text>
                  </Flex>
                </Flex>
              </GridItem>
              <GridItem  border={"1px solid rgba(1,1,1,0.5)"}>
                <Flex borderRadius={"md"} gap="0.5rem" alignItems={"center"} p="0.6rem">
                  <Avatar />
                  <Flex direction={"column"}>
                    <Text fontWeight={"semibold"}>Create a social message</Text>
                    <Text fontWeight={"md"} fontSize="xs">Schedule & publish social messages on Facebook, Instagram, LinkedIn, Pinterest, & Twitter.</Text>
                  </Flex>
                </Flex>
              </GridItem>
              <GridItem  border={"1px solid rgba(1,1,1,0.5)"}>
                <Flex borderRadius={"md"} gap="0.5rem" alignItems={"center"} p="0.6rem">
                  <Avatar />
                  <Flex direction={"column"}>
                    <Text fontWeight={"semibold"}>Customize your calendar</Text>
                    <Text fontWeight={"md"} fontSize="xs">Update your settings to visually organize your calendar with color labels, project types, & tags.</Text>
                  </Flex>
                </Flex>
              </GridItem>
              <GridItem  border={"1px solid rgba(1,1,1,0.5)"}>
                <Flex borderRadius={"md"} gap="0.5rem" alignItems={"center"} p="0.6rem">
                  <Avatar />
                  <Flex direction={"column"}>
                    <Text fontWeight={"semibold"}> View the Getting Started Guide</Text>
                    <Text fontWeight={"md"} fontSize="xs">Get tips & best practices to organize all of your marketing on your new calendar.</Text>
                  </Flex>
                </Flex>
              </GridItem>
            </Grid>
          </Box>
          <Box border="2px solid green" w="20% "></Box>
        </Flex>
      </Box>
      <Box mt="1rem" w="99%" p="0.5rem" border={"2px solid"} h="700px" borderRadius={"10px"}>

      </Box>
    </Box>
  )
}

export default Main