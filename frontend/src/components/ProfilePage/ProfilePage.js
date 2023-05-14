import React, { useEffect, useState } from 'react'
import NavBar from '../UI/NavBar/NavBar'
import classes from './ProfilePage.module.css'
import About from '../UI/About/About'
import Progressmap from '../UI/Progressmap/Progressmap'
import WebLinks from '../UI/WebLinks/WebLinks'
import ProfessInfo from '../UI/ProfessInfo/ProfessInfo'
import Password from '../UI/Password/Password'
import Interests from '../UI/Interests/Interests'
import ProfileInfo from '../UI/ProfileInfo/ProfileInfo'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

function ProfilePage() {

  const [user,setUser]=useState({
    name: "",
    email: "",
    password: "",
    interest: [],
    followers: []
  });
  const navigate=useNavigate();
  
  
  useEffect(()=>{
    if(localStorage.getItem("userInfo")){
      const tokenId=localStorage.getItem("userInfo");
     
      async function fetchUser(){
        try {
          await axios.get(`${process.env.REACT_APP_API_LINK}/api/user/getUser`,{
            headers:{
              tokenId:tokenId,
            }
          }).then((res)=>{
                 const data=res.data;
                 setUser(data);
                //  console.log(user);
                 
          });
          //console.log(data.data);
          

        } catch (error) {
          console.log(error);
        }
      }
      fetchUser();
    }else{
      navigate('/');
    }
  },[navigate]);

  return (
    <div className={classes.profile}>
      {localStorage.setItem("user",JSON.stringify(user))}
      <section><NavBar user={user}/></section>
      <section className={classes.userDetails}><ProfileInfo user={user}/></section>
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
