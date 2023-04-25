import { Input,Button } from '@chakra-ui/react'
import React from 'react'
import classes from './Password.module.css'
function Password() {
  return (
    <div className={classes.div}>
     <section className={classes.headline}>
      <h1>PASSWORD & SECURITY</h1>
      <Button colorScheme='orange' size='xs'>Change</Button>
      </section>
      <section className={classes.input} >
      <label>Password</label> 
      <Input type={"password"} placeholder='***********'/>
      </section>

    </div>
  )
}

export default Password