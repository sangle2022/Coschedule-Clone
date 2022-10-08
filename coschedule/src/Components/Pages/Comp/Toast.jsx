import { useToast } from '@chakra-ui/react'
import React from 'react'

const Toast = () => {
    const toast=useToast()
  return (
    toast({
        title: 'Sign In Successfully',
        description: "Lets Plan Your Day",
        status: 'success',
        duration: 800,
        isClosable: true,
        position:'top',
      }) 
  )
}

export default Toast