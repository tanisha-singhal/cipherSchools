const express=require('express');
const mongoose=require('mongoose');
const {URL} = require('./secret');
const app=express();
app.use(express.json());

const PORT=5000;

mongoose.connect(URL)
.then(function(db){
    console.log("database connected");
})
.catch(function(err){
    console.log("error",err);
});

app.use("/api/user" , require("./routes/userRoutes"));

app.listen(PORT,()=>{
    console.log(`app listening at http://localhost:${PORT}`);
});