import { background, Box, Button, Heading, Image, Input, Stack, Text, VStack, Spacer, Flex } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./login.css"
export default function Sidebar() {

    const [disable , setDisable]=useState(true)
    const [mail, setMail]=useState('')
    const [pass, setPass]=useState('')
    const navigate=useNavigate()

    const handleSign=()=>{
        navigate("/signup")
    }




  return (
    <VStack width="600px" height="105vh" backgroundColor="white" padding="20px" boxShadow="rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" >
        <Box
           
            width="80%" height="100%">
          
        <Image marginBottom="70px" width="220px"
        marginLeft="100px" marginTop="30px"
        src="https://accounts.coschedule.com/img/cos-logo-horz.svg" alt="" />
        <Text color="#7e7e7e" fontSize="12px" textAlign="left" marginBottom="5px" marginLeft="8px">EMAIL ADDRESS</Text>
        <Input type="email" variant='unstyled' border="2px solid #E6E6E6;" 
        height="42px" value={mail} onChange={(e)=>setMail(e.target.value)}
        placeholder='Email Address' backgroundColor="white" outline="none"  paddingLeft="10px" />

        <Text color="#7e7e7e" fontSize="12px" textAlign="left"
        marginTop="10px"
        marginBottom="5px" marginLeft="8px">PASSWORD</Text>
        <Input variant='unstyled' border="2px solid #E6E6E6;" 
        height="42px"
        placeholder='Password' backgroundColor="white" outline="black"  paddingLeft="10px"
        value={pass} onChange={(e)=>setPass(e.target.value)}
         />

        <Button width="100%" marginTop="20px" color="white" backgroundColor="#d17760" 
        _hover={{background:"#f37e5d"}} disabled={(mail.length >=5  && pass.length >=5?false:disable)}
        >Sign In</Button>

        <Text marginTop="10px" marginBottom="10px">OR</Text>

        <Box marginBottom="15px" width="100%" border="1px solid black" height="42px" display="flex" justifyContent="center" 
         alignItems="center" gap="10px" _hover={{backgroundColor:"#f5f5f5",cursor:"pointer" }}>
            <Image width="30px" src='https://cdn-icons-png.flaticon.com/512/2991/2991148.png' />
            <Text>Continue with Google</Text>
        </Box>
        
        <Box marginBottom="15px" width="100%" border="1px solid black" height="42px" display="flex" justifyContent="center" 
         alignItems="center" gap="10px" _hover={{backgroundColor:"#f5f5f5",cursor:"pointer" }}>
            <Image width="30px" src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png' />
            <Text>Continue with Facebook</Text>
        </Box>

        <Box width="100%" border="1px solid black" height="42px" display="flex" justifyContent="center" 
         alignItems="center" gap="10px" _hover={{backgroundColor:"#f5f5f5",cursor:"pointer" }}>
            <Image width="30px" src='https://media.idownloadblog.com/wp-content/uploads/2018/07/Apple-logo-black-and-white.png' />
            <Text>Continue with Apple</Text>
        </Box>

    {/* Text Box */}
        <Box width="100%" height="42px" display="flex" justifyContent="center" fontSize="12px" marginTop="35px"
         alignItems="center" gap="10px" >
            <Spacer />
            <Spacer />
            
            <Text onClick={handleSign}><span className="text_hover">Need an account</span> </Text>
            <Spacer />
            <Text>|</Text>
            <Spacer/>
           <Text><span className='text_hover'>Forgot your Password </span> </Text>
            <Spacer />
            <Spacer />
          
        </Box>

        </Box>
    </VStack>
  )
}
