import { Text, Select,Button} from "@chakra-ui/react";
import React from "react";
import classes from './ProfessInfo.module.css';
function ProfessInfo() {
  return (
    <div className={classes.top}>
      <section className={classes.headline}>
      <h1>PROFESSIONAL INFORMATION</h1>
      <Button colorScheme='orange' size='xs'>Edit</Button>
      </section>
      <section className={classes.sec}>
        <section>
        <Text>Highest education</Text>
        <Select width={300}>
          <option value="option1">Primary</option>
          <option value="option2">Secondary</option>
          <option value="option3">Higher Secondary</option>
          <option value="option4">Graduation</option>
          <option value="option5">Post Graduation</option>
        </Select>
        </section>
        <section>
        <Text>What do you do currently?</Text>
        <Select width={300}>
          <option value="option1">Schooling</option>
          <option value="option2">Teaching</option>
          <option value="option3">College Student</option>
          <option value="option4">Job</option>
          <option value="option5">Freelancing</option>
        </Select>
        </section>
    </section>
    </div>
  );
}

export default ProfessInfo;
