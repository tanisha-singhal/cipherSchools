import { Text, Select, Button } from "@chakra-ui/react";
import React from "react";
import classes from "./ProfessInfo.module.css";
function ProfessInfo() {
  return (
    <div className={classes.top}>
      <div className={classes.headline}>
        <h1>PROFESSIONAL INFORMATION</h1>
        <Button colorScheme="orange" size="xs">
          Edit
        </Button>
      </div>
      <div className={classes.sec}>
        <section className={classes.input}>
          <Text>Highest education</Text>
          <Select width={325}>
            <option value="option1">Primary</option>
            <option value="option2">Secondary</option>
            <option value="option3">Higher Secondary</option>
            <option value="option4">Graduation</option>
            <option value="option5">Post Graduation</option>
          </Select>
        </section>
        <section className={classes.input}>
          <Text>What do you do currently?</Text>
          <Select width={325}>
            <option value="option1">Schooling</option>
            <option value="option2">Teaching</option>
            <option value="option3">College Student</option>
            <option value="option4">Job</option>
            <option value="option5">Freelancing</option>
          </Select>
        </section>
      </div>
    </div>
  );
}

export default ProfessInfo;
