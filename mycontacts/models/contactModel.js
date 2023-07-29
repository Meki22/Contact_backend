const mongoose = require("mongoose");

const contactschema = () =>{
    name:{
        type: string 
        require: [true, "please enter your name "]
    }
    email:{
        type: string 
        require: [true, "please enter your email address "]
    }
    phone:{
        type: string 
        require: [true, "please enter your phone number "]
    }
    {timelapse:true
    }
    
}
module.exports = ("contact" ,contactschema);