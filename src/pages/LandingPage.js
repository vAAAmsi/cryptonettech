import { Button, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const LandingPage = () => {
  const router = useNavigate();
  return (
    <Flex w="100%" h="100vh" bg="#0c111c" flexDir="column" justifyContent="space-between" alignItems="center" >
        <Flex></Flex>
        <Flex flexDir="column" justifyContent='center' alignItems="center" gap="10px">
            <Image borderRadius="10px" boxSize="150px" src='/cryptonetlogo.jpeg' alt='q' />
            <Text color="white" textAlign='center' >Cryptonet Technologies Assignment</Text>
            <Button onClick={() => router('/userdetails')} bg="black" border='1px solid white' _hover={{bg:"gray.100",color:'black'}} color="white">Get Started</Button>
        </Flex>
        <Flex mb={5} flexDir="row" gap={1}>
            <Text 
             color="gray"
             display="flex"
             gap="4px"
            >
                Designed and implemented by
            </Text>
            <Link to="https://github.com/vAAAmsi" target='_blank'
            >
            <Text color="gray" textDecor="underline"> {" "}vAAmsi</Text>
            </Link>
        </Flex>
    </Flex>
  )
}

export default LandingPage;