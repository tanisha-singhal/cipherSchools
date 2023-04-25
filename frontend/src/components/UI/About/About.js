import React from 'react'
import { Textarea } from '@chakra-ui/react'
import { Button} from '@chakra-ui/react'
import classes from './About.module.css'
function About() {
  return (
    <div className={classes.about}>
        <section className={classes.headline}>
        <h1>ABOUT ME</h1>
        <Button colorScheme='orange' size='xs'>Edit</Button>
        </section>
        <Textarea placeholder="Add something about you."/>
    </div>
  )
}

export default About