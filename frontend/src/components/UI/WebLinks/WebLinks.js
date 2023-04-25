import React from "react";
import { Button, SimpleGrid, Box, Text } from "@chakra-ui/react";
import linkedin from "../../icons/linkedin.svg";
import Github from "../../icons/Github.svg";
import Instagram from "../../icons/Instagram.svg";
import Facebook from "../../icons/Facebook.svg";
import Twitter from "../../icons/Twitter.svg";
import Website from "../../icons/Website.svg";

import classes from "./WebLinks.module.css";
function WebLinks() {
  return (
    <div className={classes.weblinks}>
      <section className={classes.headline}>
        <h1>ON THE WEB</h1>
        <Button colorScheme="orange" size="xs">
          Edit
        </Button>
      </section>
      <SimpleGrid minChildWidth='120px' spacingX='200px' spacingY='40px'>
        <Box d="flex" flex-direction="column">
          <Text marginBottom={2}>Linkedin</Text>
          <div className={classes.input}>
            <img className={classes.img} src={linkedin} alt="linkedin" />
            <input className={classes.inp} type="text" placeholder="Linkedin" />
          </div>
        </Box>

        <Box d="flex" flex-direction="column">
          <Text marginBottom={2}>GitHub</Text>
          <div className={classes.input}>
            <img className={classes.img} src={Github} alt="GitHub" />
            <input className={classes.inp} type="text" placeholder="GitHub" />
          </div>
        </Box>

        <Box d="flex" flex-direction="column">
          <Text marginBottom={2}>Facebook</Text>
          <div className={classes.input}>
            <img className={classes.img} src={Facebook} alt="Facebook" />
            <input className={classes.inp} type="text" placeholder="Facebook" />
          </div>
        </Box>

        <Box d="flex" flex-direction="column">
          <Text marginBottom={2}>Twitter</Text>
          <div className={classes.input}>
            <img className={classes.img} src={Twitter} alt="Twitter" />
            <input className={classes.inp} type="text" placeholder="Twitter" />
          </div>
        </Box>

        <Box d="flex" flex-direction="column">
          <Text marginBottom={2}>Instagram</Text>
          <div className={classes.input}>
            <img className={classes.img} src={Instagram} alt="Instagram" />
            <input className={classes.inp} type="text" placeholder="Instagram" />
          </div>
        </Box>

        <Box d="flex" flex-direction="column">
          <Text marginBottom={2}>Website</Text>
          <div className={classes.input}>
            <img className={classes.img} src={Website} alt="Website" />
            <input className={classes.inp} type="text" placeholder="Your Website" />
          </div>
        </Box>
      </SimpleGrid>
    </div>
  );
}

export default WebLinks;
