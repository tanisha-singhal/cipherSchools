import { Avatar, Button, FormControl,Input,FormLabel,Text } from "@chakra-ui/react";
import React, { useState } from "react";
import classes from "./ProfileInfo.module.css";
import { Link } from "react-router-dom";
import { EditIcon } from "@chakra-ui/icons";
import EditProfile from "./EditProfile";

// import axios from 'axios'
function ProfileInfo(props) {
  const [name,setName]=useState(props.user.name);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

 
  return (
    <div className={classes.div}>
      <section className={classes.sec}>
        <Avatar
          name={props.user.name}
          margin={5}
          src="https://bit.ly/broken-link"
        />
        <EditIcon onClick={handleOpenModal} />
        <section>
          <div>Hello,</div>
          <div>
            <b>{props.user.name}</b>
          </div>
          <div>{props.user.email}</div>
        </section>
      </section>
      <EditProfile
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        name={name}
        email={props.user.email}
      >
        <Text color='orange' fontSize='30px'>Profile Update</Text>
        <FormControl id="name">
        <FormLabel>Name</FormLabel>
        <Input
          placeholder={props.user.name}
          onChange={(e) => setName(e.target.value)}
          
        />
        </FormControl>
        <FormControl id="email">
        <FormLabel marginTop={2}>Email</FormLabel>
        <Input
          placeholder={props.user.email}
          disabled
          
        />
      </FormControl>
      </EditProfile>
      <section>
        <Button variant="ghost" colorScheme="orange">
          <Link to="/Followers">Followers</Link>
        </Button>
      </section>
    </div>
  );
}

export default ProfileInfo;
