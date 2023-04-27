import React from 'react'
import { CloseIcon } from '@chakra-ui/icons';
import classes from './EditProfile.module.css';
import axios from 'axios';
function EditProfile(props) {
    const { isOpen, onClose,name,email, children } = props;
    if (!isOpen) {
        return null;
      }
      const handleUpdate = async () => {
        await axios
          .post("http://localhost:5000/api/user/updateProfile",{name,email},{
            headers:{
                tokenId:localStorage.getItem("userInfo"),
              
            }
          })
          .then(function (res) {
            console.log(res);
            
          })
          .catch(function (error) {
            console.log(error);
          });
          
      };

  return (
    <div className={classes.modalOverlay} onClick={onClose}>
      <div className={classes.modal}>
        <button className={classes.modalClose} onClick={onClose}>
          <CloseIcon />
        </button>
        {children}
        <div className={classes.modalButtons}>
          <button onClick={onClose}>Cancel</button>
          <button onClick={handleUpdate}>Update</button>
        </div>
      </div>
    </div>
  )
}

export default EditProfile