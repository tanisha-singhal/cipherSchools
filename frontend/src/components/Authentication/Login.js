import React, {useState,useEffect} from 'react'
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Card,
  CardHeader,
  Heading,
  CardBody,
  CardFooter,
  useToast,
  Text
} from "@chakra-ui/react";
import classes from './Login.module.css'
import { Link } from 'react-router-dom';
import axios from "axios";
import { useNavigate } from "react-router-dom";


function Login() {
  const toast = useToast();
  const navigate = useNavigate ();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  useEffect(()=>{
    if(localStorage.getItem("userInfo")){
      localStorage.removeItem("userInfo");
      localStorage.removeItem("user");
    }
  },[]);
  
  const SubmitHandler = async () => {
    if (!email || !password) {
      toast({
        title: "Please Fill all the feilds",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      return;
    }
    await axios
        .post(
          `${process.env.REACT_APP_API_LINK}/api/user/login`,
          { email, password}
        )
        .then(function(res) {
          toast({
            title: "Login Successful",
            status: "success",
            duration: 5000,
            isClosable: true,
            position: "bottom",
          });
          localStorage.setItem("userInfo", res.data.authToken);
        
          navigate("/profile");
        })
        .catch(function (error){
          toast({
            title: "Error Occured",
            description:error.response.data.error,
            status: "error",
            duration: 5000,
            isClosable: true,
            position: "bottom",
          });
          console.log(error);
          
        })
  };

  return (
    <div className={classes.card}>
    <Card padding={10}>
      <CardHeader>
        <Heading size='md'>LOGIN</Heading>
      </CardHeader>
      <CardBody>
      <FormControl id="email" isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          placeholder="Enter Your Email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>
      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
          <Input
            type={"password"}
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
          />
       </FormControl>
        <Button
        colorScheme="orange"
        width="100%"
        style={{ marginTop: 15 }}
        onClick={SubmitHandler}
        //isLoading={loading}
      >
        Login
      </Button>
      </CardBody>
      <CardFooter>
        <Text>Don't have a account?<span><Link className={classes.register} to="/Register">Create One</Link></span></Text>
      </CardFooter>
    </Card>
    </div>
  )
}

export default Login
