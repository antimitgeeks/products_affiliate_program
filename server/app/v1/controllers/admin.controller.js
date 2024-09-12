const service=require('../services/admin.service')
const { sendResponse } = require("../utils/sendResponse.js");
const { SuccessMessage, ErrorMessage } = require("../constants/messages.js");
const statusCode = require("../constants/statusCodes.js");

exports.allUsers=async (req,res)=>{
    console.info('********************************all Users API**********************');
    try {
        
        const result=await service.allUsers()

        if (result.status) {
            return sendResponse(res, statusCode.OK, true, SuccessMessage.FETCH, result)

        }
        else if (result.status == false && !result.result) {
            sendResponse(res, statusCode.BAD_REQUEST, false, ErrorMessage.BAD_REQUEST)
        }
        else if (result.status == false && result.result) {
            return sendResponse(res, statusCode.INTERNAL_SERVER_ERROR, false, ErrorMessage.INTERNAL_SERVER_ERROR)
        }

    } catch (error) {
        console.error('Error in all users api : ', error);
        return sendResponse(res, statusCode.INTERNAL_SERVER_ERROR, false, ErrorMessage.INTERNAL_SERVER_ERROR, error?.errors);
    }
}