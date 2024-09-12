//models
const Invoice  = require('../models/invoice.model.js')
//service
const service = require("../services/auth.service");
//response handler
const { sendResponse } = require("../utils/sendResponse.js");
const { SuccessMessage, ErrorMessage } = require("../constants/messages.js");
const statusCode = require("../constants/statusCodes.js");
const { decode } = require('jsonwebtoken');

exports.createInvoice = async(req,res)=>{
    try{
        const token =  req.header['authorization'].split(' ')[1]
        const id = decode(token).id
        console.log(id)
        
        

    }catch(error){
        console.error('Error In Create Invoice', error);
        return sendResponse(res, statusCode.INTERNAL_SERVER_ERROR, false, ErrorMessage.INTERNAL_SERVER_ERROR, error?.errors);
 
    }
}