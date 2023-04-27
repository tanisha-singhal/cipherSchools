import React from 'react'
import classes from './EditPassword.module.css';
import axios from 'axios';
import { CloseIcon} from '@chakra-ui/icons';
import { useToast } from '@chakra-ui/react';
function EditPassword(props) {
    const { isOpen, onClose,newPassword,oldPassword, children } = props;
     const user=JSON.parse(localStorage.getItem("user"));
     const toast=useToast();
    const updatePassword=async ()=>{
      if (!newPassword || !oldPassword) {
        toast({
          title: "Please Fill all the feilds",
          status: "warning",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
        return;
      }
       await axios.post(`${process.env.REACT_APP_API_LINK}/api/user/updatePassword/${user._id}`,{newPassword,oldPassword},{
        headers:{
            tokenId:localStorage.getItem("userInfo"),
        }
       }).then(function (res){
            console.log(res);
            toast({
              title: "Password Updated.",
              status: "success",
              duration: 5000,
              isClosable: true,
              position: "bottom",
            });
       }).catch(function (err){
        toast({
          title: "Error Occured",
          description:err.response.data.error,
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
        console.log(err);

       })
       
       }
    
    if (!isOpen) {
        return null;
      }
  return (
    <div className={classes.modalOverlay}>
      <div className={classes.modal}>
        <button className={classes.modalClose} onClick={onClose}>
        <CloseIcon />
        </button>
        {children}
        <div className={classes.modalButtons}>
          <button onClick={onClose}>Cancel</button>
          <button onClick={updatePassword}>Update</button>
        </div>
      </div>
    </div>
  )
}

export default EditPassword