import { Box, Button, Heading, Image, Input, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import "./signup.css"
const SignupForm = () => {

    const changeShadow=()=>{
        let change=document.getElementById('colo')
        change.style.boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
    }
    const passShadow=()=>{
        let change=document.getElementById('dolo')
        change.style.boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
    }
    const emailShadow=()=>{
        let change=document.getElementById('solo')
        change.style.boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
    }




  return (
    <VStack padding="20px">
            <Box lineHeight="line-height: 170%;" height="80px" width="650px" >
                <Heading fontFamily="MuseoSans-700" color='#4b4b4b'
                    fontSize="40px" letterSpacing="-0.3px">
                    Create My Marketing Calendar
                    </Heading>
                <Text fontFamily="MuseoSans-300">Free for life. No credit card required.</Text>
            </Box>
            {/*  */}

            <Box bgColor="white" border="2px solid #e9e9e9" width="650px" height="700px" paddingTop="40px" display="flex" justifyContent="center" >

                <Box bgColor="white"  width="70%" height="90%" display="flex" flexDirection="column" alignItems="center" textAlign="left">
                <Text bgColor="white"  color="#7e7e7e" fontSize="12px" textAlign="left" marginBottom="2px" marginLeft="8px">Full Name</Text>
                    <Input id='colo' type="text"  textAlign="center" variant='unstyled' border="2px solid #E6E6E6;" 
                    height="42px" 
                    placeholder='Full Name' onFocus={changeShadow} _placeholderShown={{paddingLeft:"20px"}} marginBottom="20px" backgroundColor="white" outline="none"  paddingLeft="10px" />
               
               <Text bgColor="white"  color="#7e7e7e" fontSize="12px" textAlign="left" marginBottom="2px" marginLeft="8px">Email Address</Text>
               <Input id='dolo' type="email"  textAlign="center" variant='unstyled' border="2px solid #E6E6E6;" 
                    height="42px" 
                placeholder='Email Address' onFocus={passShadow} marginBottom="20px" _placeholderShown={{paddingLeft:"20px"}} backgroundColor="white" outline="none"  paddingLeft="10px" />   
               

               <Text bgColor="white"  color="#7e7e7e" fontSize="12px" textAlign="left" marginBottom="2px" marginLeft="8px">Password</Text>
               <Input id='solo' type="email" variant='unstyled' border="2px solid #E6E6E6;" 
                    height="42px" textAlign="center"
                placeholder='Password(minimum 8 characters)' _placeholderShown={{paddingLeft:"20px"}} onFocus={emailShadow} backgroundColor="white" outline="none"  paddingLeft="10px" />   
               
               <Button width="100%" marginTop="20px" color="white" backgroundColor="#d17760" 
                    _hover={{background:"#f37e5d"}} 
                    >Sign Up</Button>
                <br />
                
                <Text marginTop="10px" marginBottom="10px" bgColor="white">OR</Text>

        <Box bgColor="white"  marginBottom="15px" width="70%" border="1px solid black" height="42px" display="flex" justifyContent="center" 
         alignItems="center" gap="10px" _hover={{backgroundColor:"#f5f5f5",cursor:"pointer" }}>
            <Image width="30px" src='https://cdn-icons-png.flaticon.com/512/2991/2991148.png' />
            <Text  bgColor="white">Sign Up with Google</Text>
        </Box>
        
        <Box bgColor="white"  marginBottom="15px" width="70%" border="1px solid black" height="42px" display="flex" justifyContent="center" 
         alignItems="center" gap="10px" _hover={{backgroundColor:"#f5f5f5",cursor:"pointer" }}>
            <Image width="30px" src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png' />
            <Text bgColor="white" >Sign Up with Facebook</Text>
        </Box>

        <Box bgColor="white"  width="70%" border="1px solid black" height="42px" display="flex" justifyContent="center" 
         alignItems="center" gap="10px" _hover={{backgroundColor:"#f5f5f5",cursor:"pointer" }}>
            <Image width="30px" src='https://media.idownloadblog.com/wp-content/uploads/2018/07/Apple-logo-black-and-white.png' />
            <Text bgColor="white" >Sign Up with Apple</Text>
        </Box>

            
        </Box>
                
        </Box>

    </VStack>
  )
}

export default SignupForm