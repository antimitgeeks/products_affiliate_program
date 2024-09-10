const { AdminDetails } = require("../constants/constants");
const { SuccessMessage, ErrorMessage } = require("../constants/messages.js");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');
const emailConfig = require('../config/email');
const emailTemplates = require('../utils/emailTemplate.js');
const ShortUniqueId = require('short-unique-id');

const db = require("../models");
const Users = db.users;



// login service 
exports.login = async (details) => {
    // check email password for Npo
    
    // check email exist or not for admin 
    const user = await Users.findOne({ where: { email: details.email } });
    // log(user)
    if (!user) {
        return { status: false, message: `User ${ErrorMessage.NOT_FOUND}` };
    }
    // Compare password
    const isPasswordValid = await bcrypt.compare(details.password, user.password);
    if (!isPasswordValid) {
        return { status: false, message: `${ErrorMessage.INVALID_CREDENTIAL}` };
    }
    // create jwt token for admin
    const token = jwt.sign(
        { id: user.id, email: user.email, role: user.role },
        process.env.JWT_SECRET_KEY,
        { expiresIn: process.env.JWT_EXPIRE_TIME }
    );
    return { status: true, message: { accessToken: token } };
}

//  register service
exports.register = async (details,userId) => {
    const data  = {...details,userId}
    const userDetails = await Users.create(data);
    // remove password
    delete userDetails.dataValues.password;
    return userDetails;
}

exports.generateId = async()=>{
    const uid = new ShortUniqueId({ length: 10 })
    return uid.rnd()
}


exports.updatePassword=async (id,oldPassword,newPassword)=>{

     const user = await Users.findOne({ where: { id:id } });
    if(!user){
        return { status: false, message: `User ${ErrorMessage.NOT_FOUND}` };
    }

    const isPasswordValid = await bcrypt.compare(oldPassword,user.password)

    if(!isPasswordValid){
        return { status: false, message: `User ${ErrorMessage.INVALID_CREDENTIAL}` };
    }
    console.log("user:", isPasswordValid);
    const newHashPass=await  this.genHashPassword(newPassword)
    const result=await Users.update({
        password:newHashPass
     },{where:{
        id:id
     }})

     return {
        status:true,message:`password ${SuccessMessage.UPDATE}`
     }

}


exports.genHashPassword=async (password)=>{
    if (password) {
        const salt = await bcrypt.genSalt(10);
      return   password = await bcrypt.hash(password, salt);
    }
}

