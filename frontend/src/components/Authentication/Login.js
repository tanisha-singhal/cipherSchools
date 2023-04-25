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
  Text
} from "@chakra-ui/react";
import classes from './Login.module.css'
import { Link } from 'react-router-dom';

function Login() {
  // const [email, setEmail] = useState();
  // const [password, setPassword] = useState();
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
          
        />
      </FormControl>
      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
          <Input
            type={"password"}
            placeholder="Enter Password"
          />
       </FormControl>
        <Button
        colorScheme="orange"
        width="100%"
        style={{ marginTop: 15 }}
        //onClick={SubmitHandler}
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
