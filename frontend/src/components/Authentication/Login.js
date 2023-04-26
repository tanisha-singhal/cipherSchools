import React, {useState} from 'react'
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
  //useToast,
  Text
} from "@chakra-ui/react";
import classes from './Login.module.css'
import { Link } from 'react-router-dom';
import axios from "axios";
import { useNavigate } from "react-router-dom";


function Login() {
  //const toast = useToast();
  const navigate = useNavigate ();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  
  const SubmitHandler = async () => {
    await axios
        .post(
          "http://localhost:5000/api/user/login",
          { email, password}
        )
        .then(function(res) {

          localStorage.setItem("userInfo", res.data.authToken);
        
          navigate("/profile");
        })
        .catch(function (error){
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
