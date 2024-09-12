//models
const Invoice  = require('../models/invoice.model.js')
//service
const service = require("../services/invoice.service");
//response handler
const { sendResponse } = require("../utils/sendResponse.js");
const { SuccessMessage, ErrorMessage } = require("../constants/messages.js");
const statusCode = require("../constants/statusCodes.js");
const { decode } = require('jsonwebtoken');

exports.createInvoice = async(req,res)=>{
    try{
       
        const result=await service.createInvoice(req.body)
        if (result.status == false && result.result) {
            return sendResponse(res, statusCode.INTERNAL_SERVER_ERROR, false, ErrorMessage.INTERNAL_SERVER_ERROR);
        }
        if (result.status == true && result.result) {
            return sendResponse(res, statusCode.OK, true, `Invoice ${SuccessMessage.CREATED}`,result);

        }
        return sendResponse(res, statusCode.BAD_REQUEST, false, ErrorMessage.BAD_REQUEST);

        
        

    }catch(error){
        console.error('Error In Create Invoice', error);
        return sendResponse(res, statusCode.INTERNAL_SERVER_ERROR, false, ErrorMessage.INTERNAL_SERVER_ERROR, error?.errors);
 
    }
}

exports.userInvoiceList=async (req,res)=>{

    try{
        const id=req.params.id
        const result=await service.getInvoiceList(id)
        if (result.status == false && result.result) {
            return sendResponse(res, statusCode.INTERNAL_SERVER_ERROR, false, ErrorMessage.INTERNAL_SERVER_ERROR);
        }
        if (result.status == true && result.result) {
            return sendResponse(res, statusCode.OK, true, `Invoice list ${SuccessMessage.FETCH}`,result);

        }
        return sendResponse(res, statusCode.BAD_REQUEST, false, ErrorMessage.BAD_REQUEST);

        
        

    }catch(error){
        console.error('Error In Create Invoice', error);
        return sendResponse(res, statusCode.INTERNAL_SERVER_ERROR, false, ErrorMessage.INTERNAL_SERVER_ERROR, error?.errors);
 
    }

}