import React from 'react'
import NavBar from '../UI/NavBar/NavBar'
import classes from './ProfilePage.module.css'
import About from '../UI/About/About'
import Progressmap from '../UI/Progressmap/Progressmap'
import WebLinks from '../UI/WebLinks/WebLinks'
import ProfessInfo from '../UI/ProfessInfo/ProfessInfo'
import Password from '../UI/Password/Password'
import Interests from '../UI/Interests/Interests'
import ProfileInfo from '../UI/ProfileInfo/ProfileInfo'
function ProfilePage() {
  return (
    <div className={classes.profile}>
      <section><NavBar name="tanisha"/></section>
      <section className={classes.userDetails}><ProfileInfo name="Tanisha" email="tanusinghal1000@gmail.com"/></section>
      <section className={classes.aboutme}><About/></section>
      <section className={classes.ciphermap}><Progressmap/></section>
      <section className={classes.weblinks}><WebLinks/></section>
      <section className={classes.profesional}><ProfessInfo/></section>
      <section className={classes.security}><Password/></section>
      <section className={classes.interests}><Interests/></section>
    </div>
  )
}

export default ProfilePage
