const express=require("express");
const router=express.Router();
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const User=require("../models/User");
const {JWT_SECRET}=require('../secret');
const fetchUser=require("../middleware/fetchUser");

router.post("/register",async (req,res)=>{
try {
    const user=await User.findOne({email:req.body.email});
        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password, salt)
            if (!user) {
                let user = await User.create({
                    name: req.body.name,
                    password: secPass,
                    email: req.body.email,
                });
                const data = {
                    user: {
                        id: user.id
                    }
                }
                const authToken = jwt.sign(data, JWT_SECRET);

                //res.send(req.body);
                res.json({ authToken })
                return;
            }

            res.send({ msg: "user already exist!" });
        }catch(error){
           console.log(error);
           res.status(500).send("Internal Server Error");
        }
    });


router.post("/login",async(req,res)=>{
   const {email,password}=req.body;
   try {
    let user=await User.findOne({email});
    if(!user){
        return res.status(400).json({error:"please try to login with correct credentials."})
    }
    const passwordCompare=await bcrypt.compare(password,user.password);
    if(!passwordCompare){
        return res.status(400).json({error:"please try to login with correct credentials."})
    }
    const data={
        user:{
            id:user.id
        }
    }
    const authToken=jwt.sign(data,JWT_SECRET);
    res.json(authToken)
   } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
   }
});

router.get("/followers/:id",fetchUser,async (req,res)=>{
    try {
        const user=await User.findById(req.params.id);
        if(!user){
            return res.status(404).send("Not Found");
        }
        const followers=user.followers;
        res.json(followers);
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
 
});

router.post("/updateProfile",fetchUser,async (req,res)=>{
    const {name,email}=req.body;
try {
    const update={
        name:name
    }
    const user=User.findOne({email});
    await user.updateOne(update);
    const updatedDoc=await User.findOne({email});
    res.json(updatedDoc);
   // await User.save();

} catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
}
});

router.post("/updateInterest/:id",fetchUser,async (req,res)=>{
    const {interests}=req.body;
    try {
        const user=await User.findById(req.params.id);
        if(!user){
            return res.status(404).send("Not Found");
        }
        const update={
            interests:interests
        }
        await user.updateOne(update);
        const updatedDoc=await User.findById(req.params.id);
        res.json(updatedDoc);
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }

});

router.post("/updatePassword/:id",fetchUser,async (req,res)=>{
    try {
   const {oldPassword,newPassword}=req.body;
   const user=await User.findById(req.params.id);
   if(!user){
    return res.status(404).send("Not Found");
   }
   const passCmp=await bcrypt.compare(oldPassword,user.password);
   if(!passCmp){
       return res.status(400).json({error:"Please Enter Correct Credentials"})
   }
   const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(newPassword, salt)
   const update={
    password:secPass
   }
    await user.updateOne(update);
    const updatedDoc=await User.findById(req.params.id);
    res.json(updatedDoc);
    } catch (error) {
     console.log(error);
     res.status(500).send("Internal Server Error");   
    }
});

module.exports=router;

