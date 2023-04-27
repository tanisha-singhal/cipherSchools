import { Input,Button,FormControl,FormLabel } from '@chakra-ui/react'
import React,{useState} from 'react'
import classes from './Password.module.css'
import EditPassword from './EditPassword'
function Password() {
  const [newPassword,setNewPassword]=useState();
  const [oldPassword,setOldPassword]=useState();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={classes.div}>
     <section className={classes.headline}>
      <h1>PASSWORD & SECURITY</h1>
      <Button colorScheme='orange' size='xs' onClick={handleOpenModal}>Change</Button>
      <EditPassword 
      isOpen={isModalOpen} 
      onClose={handleCloseModal}
      newPassword={newPassword}
      oldPassword={oldPassword}
      >
      <h2>Change Password</h2>
        <FormControl id="newPassword">
        <FormLabel>New Password</FormLabel>
        <Input
          placeholder="Enter new password"
          onChange={(e) => setNewPassword(e.target.value)}
        />
        </FormControl>
        <FormControl id="oldPassword">
        <FormLabel>Old Password</FormLabel>
        <Input
          placeholder="Enter Old Password"
          onChange={(e)=>setOldPassword(e.target.value)}
        />
      </FormControl>

      </EditPassword>
      </section>
      <section className={classes.input} >
      <label>Password</label> 
      <Input type={"password"} placeholder='***********'/>
      </section>

    </div>
  )
}

export default Password