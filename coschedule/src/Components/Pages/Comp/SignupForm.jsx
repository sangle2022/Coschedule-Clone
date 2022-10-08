import { Box, Button, Heading, Image, Input, Stack, StyledStepper, Text, useToast, VStack } from '@chakra-ui/react'
import React, { useReducer  } from 'react'
import {useDispatch, useSelector} from "react-redux"

import {useNavigate} from "react-router-dom"
import { register } from '../../../Redux/AuthReducer/action'


const initialState = {
    name: "",
    email: "",
    password:""
  };
  
const reducer = (state, action) => {
    switch (action.type) {
      case "name":
        return { ...state, name: action.payload };
      
      case "email":
        return { ...state, email: action.payload };
      case "password":
        return { ...state, password: action.payload };
      
  
      default:
        return state;
    }
  };


const SignupForm = () => {

  const [state, setState] = useReducer(reducer, initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast =useToast()

  const symb_email="@."

  const signupHandle = () => {
    let naav=state.name
    if(naav.length==0){
      return toast({
        title: 'Name cannot be empty',
        description: 'Please Enter Your Name',
        status: 'error',
        isClosable: true,
        position:'top',
      }) 
    }
    let funda=state.email
    // console.log(funda)
    // console.log(symb_email);
    if(!funda.includes('@') || !funda.includes('.') || !funda.includes('com') ){
      return toast({
        title: 'Email type is incorrect',
        description: 'Please enter right email',
        status: 'error',
        isClosable: true,
        position:'top',
      }) 
    }
    let pascode=state.password
    console.log(pascode);
    if(!((pascode.includes('!') || pascode.includes('@') || pascode.includes('&') || pascode.includes('^') || pascode.includes('*') 
    || pascode.includes('/') || pascode.includes('?')) && (pascode.includes('1')) ) ) {
      return toast({
        title: 'Password must be strong',
        description: 'Password must contain any symbol and must contain any number @,#,1,2 etc',
        status: 'error',
        isClosable: true,
        position:'top',
      }) 
    }
    dispatch(register(state)).then((r) => {
    console.log(r)
      toast({
        title: 'Account Created Successfully',
        description: 'Youre being redirected to login page',
        status: 'success',
        isClosable: true,
        position:'top',
      }) 
      setTimeout(() => {
         navigate("/login", { replace: true })  
      }, 1000); 
    });
  };

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
    <VStack padding="20px" >
            <Box lineHeight="line-height: 170%;" height="80px" width="650px" >
                <Heading fontFamily="MuseoSans-700" color='#4b4b4b'
                    fontSize="40px" letterSpacing="-0.3px">
                    Create My Marketing Calendar
                    </Heading>
                <Text fontFamily="MuseoSans-300">Free for life. No credit card required.</Text>
            </Box>
            {/*  */}

            <Box boxShadow='2xl' bgColor="white" border="2px solid #e9e9e9" width="650px" height="700px" paddingTop="40px" display="flex" justifyContent="center" >

                <Box bgColor="white"  width="70%" height="90%" display="flex" flexDirection="column" alignItems="center" textAlign="left">
                <Text bgColor="white"  color="#7e7e7e" fontSize="12px" textAlign="left" marginBottom="2px" marginLeft="8px">Full Name</Text>
                    <Input id='colo' type="text"  textAlign="center" variant='unstyled' border="2px solid #E6E6E6;" 
                    height="42px" value={state.name} onChange={(e)=>setState({type:"name", payload:e.target.value})}
                    placeholder='Full Name' onFocus={changeShadow} _placeholderShown={{paddingLeft:"20px"}} marginBottom="20px" backgroundColor="white" outline="none"  paddingLeft="10px" />
               
               
               <Text bgColor="white"  color="#7e7e7e" fontSize="12px" textAlign="left" marginBottom="2px" marginLeft="8px">Email Address</Text>
               <Input id='dolo' type="email"  textAlign="center" variant='unstyled' border="2px solid #E6E6E6;" 
                    height="42px"  value={state.email} onChange={(e) =>
                      setState({ type: "email", payload: e.target.value })
                    }
                placeholder='Email Address' onFocus={passShadow} marginBottom="20px" _placeholderShown={{paddingLeft:"20px"}} backgroundColor="white" outline="none"  paddingLeft="10px" />   
               

               <Text bgColor="white"  color="#7e7e7e" fontSize="12px" textAlign="left" marginBottom="2px"
                marginLeft="8px">Password</Text>

               <Input id='solo' type="password" variant='unstyled' border="2px solid #E6E6E6;" 
                    height="42px" textAlign="center" value={state.password}
                    onChange={(e) =>
                      setState({ type: "password", payload: e.target.value  })
                    }
                placeholder='Password(minimum 8 characters)' _placeholderShown={{paddingLeft:"20px"}} onFocus={emailShadow} backgroundColor="white" outline="none"  paddingLeft="10px" />   
               
               <Button disabled={state.password.length>=7?false:true} width="100%" marginTop="20px" color="white" backgroundColor="#d17760" 
                    _hover={{background:"#f37e5d"}}  onClick={signupHandle}
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