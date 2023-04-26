import { Avatar,Button} from '@chakra-ui/react'
import React from 'react'
import classes from './ProfileInfo.module.css'
import { Link } from 'react-router-dom';
// import axios from 'axios'
function ProfileInfo(props) {
  

  return (
    <div className={classes.div}>
        <section className={classes.sec}> 
        <Avatar name={props.user.name} margin={5} src='https://bit.ly/broken-link'/>
        <section>
        <div>Hello,</div>
        <div><b>{props.user.name}</b></div>
        <div>{props.user.email}</div>
        </section>
        </section>
        <section>
        <Button variant='ghost' colorScheme='orange'><Link to="/Followers">Followers</Link></Button>
        </section>
    </div>
  )
}

export default ProfileInfo