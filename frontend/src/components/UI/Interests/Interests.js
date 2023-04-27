import React from 'react'
import classes from './Interests.module.css'
import { Button } from '@chakra-ui/react'
function Interests() {
  return (
    <div className={classes.div}>
      <section className={classes.headline}>
      <h1>INTERESTS</h1>
      <Button colorScheme='orange' size='xs'>Edit</Button>
      </section>
    </div>
    
  )
}

export default Interests
