import React from 'react'

import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Card,
  CardHeader,
  Heading,
  CardBody
} from "@chakra-ui/react";

import classes from './Register.module.css'

function Register() {
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
          
        />
        </FormControl>
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
        Register
      </Button>
      </CardBody>
      </Card>
    </div>
  )
}

export default Register
