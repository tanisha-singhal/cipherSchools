const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  interests:{
    type: Array,
  },
  followers:{
    type:Array,
    default:[
        {
            name:'Tanisha',
            email:'tanu@gmail.com'
        },
        {
            name:'Neetu',
            email:'neetuS@gmail.com'
        },
        {
            name:'Vivek',
            email:'v@gmail.com'
        },
        {
            name:'Tarang',
            email:'t@gmail.com'
        },
        {
            name:'Umang',
            email:'u@gmail.com'
        }
    ]
  }
});
const User = mongoose.model("user", UserSchema);
module.exports = User;
