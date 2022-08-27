import {
    Box,
    Text,
    Img,
    Button,
    Divider,
    Flex,
    Grid,
    GridItem,
    Heading,
    Spacer,
    Stack,
   
    HStack,
    Icon
    
  } from "@chakra-ui/react";
//   import {Search2Icon} from"@chakra-ui/icons";
//   import { useNavigate } from "react-router-dom";

  
  function Navbar() {
    // const navigate = useNavigate();
  
    return (
      // xs - xsmall
      // sm - small
      // md - medium
      // lg - large
      // xl - xlarge
      // 2xl - xxlarge
      <Box>
        <HStack margin="6%" gap="3rem" my="3rem" >
          <Text size={"2xl"}  fontSize={"2rem"}>CoSchedule</Text>
          {/* <Text onClick={()=>navigate("/product")}>Products</Text> */}
          <Text>Products</Text>
          <Text>WhyCoSchedule</Text>
          <Text>Resourecs</Text>
          <Text>Pricing</Text>
          <Spacer />
          
          {/* <Text >Support</Text> */}
          {/* <HStack > */}
          {/* <Icon as={Search2Icon} ></Icon> */}
         <Text >Sign In</Text>
         <Text>Get A Demo</Text>
         <Button color={"white"} backgroundColor={"#F37e5d"}>Create My Calendar</Button>
            {/* </HStack> */}
          {/* <HStack > */}
          {/* <Img src="https://www.optimizely.com/contentassets/19e2441ca72d4ea9a3f17e5f3a92bd16/login.svg"/> */}
          {/* <Text onClick={()=>navigate("/login")}>Login</Text> */}
          {/* </HStack> */}
          {/* <Button onClick={()=>navigate("/registration")} borderRadius="20px" width="150px" color="white" backgroundColor="blue" >Get Started </Button> */}

          
        </HStack>
        
        
          
         
         
      </Box>
    );
  }
  
  export default Navbar;
  