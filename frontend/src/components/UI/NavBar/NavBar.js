import { Avatar } from '@chakra-ui/react'
import {BellIcon, HamburgerIcon} from '@chakra-ui/icons'
import React from 'react'
import classes from './NavBar.module.css'
import { Select } from '@chakra-ui/react'
function NavBar(props) {
  return (
    <header className={classes.header}>
        <section className={classes.hamburger}><HamburgerIcon/></section>
        <h1 className={classes.title}>CipherSchools</h1>
        <Select placeholder="Browse" size='sm' width={100}>
        <option value='appDev'>App Development</option>
        <option value='webdev'>Web Development</option>
        <option value='gamedev'>Game Development</option>
        <option value='datastruc'>Data Structures</option>
        <option value='programming'>Programming</option>
        <option value='others'>Others</option>
        </Select>
        <div className={classes.notif}><BellIcon size='sm'/></div>
        <div className={classes.avatar}><Avatar size='xs' name={props.name} src='https://bit.ly/broken-link' /></div>
    </header>
  )
}

export default NavBar
