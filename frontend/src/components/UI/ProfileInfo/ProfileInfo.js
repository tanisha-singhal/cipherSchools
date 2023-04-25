import { Avatar, Button } from '@chakra-ui/react'
import React from 'react'
import classes from './ProfileInfo.module.css'
function ProfileInfo(props) {
  return (
    <div className={classes.div}>
        <section className={classes.sec}> 
        <Avatar name={props.name} margin={5} src='https://bit.ly/broken-link'/>
        <section>
        <div>Hello,</div>
        <div><b>{props.name}</b></div>
        <div>{props.email}</div>
        </section>
        </section>
        <section>
        <Button colorScheme='orange' variant='ghost'>followers</Button>
        </section>
    </div>
  )
}

export default ProfileInfo