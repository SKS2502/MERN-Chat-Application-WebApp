import React, { useEffect } from 'react';
import {Container, Box,Text} from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
// import {sign} from "../components/authentication/sign";
import Login from "../components/authentication/Login";
import Sign from '../components/authentication/Sign';
import { useHistory } from 'react-router-dom';


const Home = () => {

  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) history.push("/chats");
  }, [history]);


  return  <Container maxW='xl' centerContent>
    <Box
      d="flex"
      justifyContent="center"
      p={3}
      bg={"white"}
      w="100%" // width
      m="40px 0 15px 0" // marginnpm start
      borderRadius="lg"
      borderWidth="1px"
    >
    <Text fontSize='4xl' fontFamily="Work sans" color ="black" textAlign="center" >Talk-A-Tive</Text>
    </Box>
    <Box       
      bg={"white"}
      p={4}
      w="100%" // width
      // m="40px 0 15px 0" // margin
      borderRadius="lg"
      color="black"
      borderWidth="1px">
      
    <Tabs variant='soft-rounded' colorScheme='red'>
  <TabList mb="1em">
    <Tab width="50%">Login</Tab>
    <Tab width="50%">Sign Up</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
    <Login />
    </TabPanel>
    <TabPanel>
      <Sign />
    </TabPanel>
  </TabPanels>
</Tabs>

    </Box>

  </Container>
}

export default Home;
