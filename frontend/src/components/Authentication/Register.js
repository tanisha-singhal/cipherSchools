import React,{useState} from 'react'

import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Card,
  CardHeader,
  Heading,
  CardBody,
  useToast
} from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import classes from './Register.module.css'

function Register() {
  const toast=useToast();
  const navigate=useNavigate();
  const [name,setName]=useState();
  const [email,setEmail]=useState();
  const [password,setPassword]=useState();

  const SubmitHandler=async ()=>{
    if (!name || !email || !password) {
      toast({
        title: "Please Fill all the feilds",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      return;
    }
      await axios.post('http://localhost:5000/api/user/register',{
        name:name,
        email:email,
        password:password
      }).then(function(res){
        console.log(res);
        toast({
          title: "Registration Successful",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
        localStorage.setItem("userInfo", res.data.authToken);
        navigate("/profile");
      }).catch(function(err){
        toast({
          title: "Error Occured",
          description: err.response.data.error,
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
        console.log(err);
      })
  }

  return (
    <div className={classes.register}>
      <Card padding={10}>
        <CardHeader>
        <Heading size='md'>REGISTER</Heading>
        </CardHeader>
        <CardBody>
      <FormControl id="name" isRequired>
        <FormLabel>Name</FormLabel>
        <Input
          placeholder="Enter Your Name"
          onChange={(e) => setName(e.target.value)}
        />
        </FormControl>
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
        Register
      </Button>
      </CardBody>
      </Card>
    </div>
  )
}

export default Register
