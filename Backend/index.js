const express=require('express');
const mongoose=require('mongoose');
const {URL} = require('./secret');
const cors=require('cors');
const app=express();
app.use(express.json());
app.use(cors());
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