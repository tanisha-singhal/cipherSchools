import { Avatar, Card,CardBody,Text } from '@chakra-ui/react'
import React, { useEffect, useState } from "react";
import axios from "axios";
function Followers() {
  const [followers, setFollowers] = useState([{}]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    async function getFollowers() {
      try {
        await axios
          .get(`http://localhost:5000/api/user/followers/${user._id}`, {
            headers: {
              tokenId: localStorage.getItem("userInfo"),
            },
          })
          .then((response) => {
            console.log(response.data);
            setFollowers(response.data);
          });
      } catch (error) {
        console.log(error);
      }
    }
    getFollowers();

  },[]);

  return (
    <div>
      <Text fontSize='50px' color='black' >Users Following You</Text>
      {console.log(followers)}
      {followers.map((follower,i)=>
           <Card margin={5} width={400} bgColor={'lightpink'}><CardBody><li key={i}><Avatar name= {follower.name} src='https://bit.ly/broken-link'/>{follower.name} - {follower.email}</li></CardBody></Card>
           
      )}
      {/* <Button onClick={getFollowers}>Get Followers</Button> */}
    </div>
  );
}

export default Followers;
