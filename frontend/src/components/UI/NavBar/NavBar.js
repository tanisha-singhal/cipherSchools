import { Avatar, Button } from "@chakra-ui/react";
import { BellIcon, HamburgerIcon } from "@chakra-ui/icons";
import React from "react";
import classes from "./NavBar.module.css";
import { Select } from "@chakra-ui/react";
import { Link } from "react-router-dom";
function NavBar(props) {
  const logoutHandler = () => {
    localStorage.removeItem("userInfo");
    localStorage.removeItem("user");
  };
  //console.log(props);
  return (
    <header className={classes.header}>
      <section className={classes.section}>
        <HamburgerIcon className={classes.hamburger} />
        <h1 className={classes.title}>CipherSchools</h1>
        <Select placeholder="Browse" size="sm" width={100}>
          <option value="appDev">App Development</option>
          <option value="webdev">Web Development</option>
          <option value="gamedev">Game Development</option>
          <option value="datastruc">Data Structures</option>
          <option value="programming">Programming</option>
          <option value="others">Others</option>
        </Select>
      </section>
      <section  className={classes.section}>
        <div className={classes.notif}>
          <BellIcon size="sm" />
        </div>
        <div className={classes.avatar}>
          <Avatar
            size="xs"
            name={props.user.name}
            src="https://bit.ly/broken-link"
          />
        </div>
        <Link to="/" onClick={logoutHandler}>
          <Button colorScheme="orange" size="xs" marginLeft={2}>
            LogOut
          </Button>
        </Link>
      </section>
    </header>
  );
}

export default NavBar;
