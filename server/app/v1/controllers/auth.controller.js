const service = require("../services/auth.service");
const { sendResponse } = require("../utils/sendResponse.js");
const { SuccessMessage, ErrorMessage } = require("../constants/messages.js");
const statusCode = require("../constants/statusCodes.js");

// login controller
exports.login = async (req, res) => {
    console.info('***************************************************Login Api************************************************');
    try {
        const details = req.body;
        const result = await service.login(details);
        if (!result.status) {
            return sendResponse(res, statusCode.BAD_REQUEST, false, result.message);
        }
        return sendResponse(res, statusCode.OK, true, SuccessMessage.LOGIN, result.message);
    } catch (error) {
        console.error('Error in login api : ', error);
        return sendResponse(res, statusCode.INTERNAL_SERVER_ERROR, false, ErrorMessage.INTERNAL_SERVER_ERROR, error?.errors);
    }
};

//  register controller
exports.register = async (req, res) => {
    console.info('***************************************************Register Api************************************************');
    try {
        const details = req.body;
        const uniqueId = await service.generateId()
        const result = await service.register(details,uniqueId);
        return sendResponse(res, statusCode.OK, true, `${details.role} ${SuccessMessage.CREATED}`, result);
    } catch (error) {
        console.error('Error in register api : ', error);
        return sendResponse(res, statusCode.INTERNAL_SERVER_ERROR, false, ErrorMessage.INTERNAL_SERVER_ERROR, error?.errors);
    }
};


exports.updatePassword=async (req,res)=>{
    console.info('********************************************************Update Password*********************************************')
    try {
        const id=req.params.id
        const oldPassword=req.body.oldPassword
        const newPassword=req.body.newPassword
        // console.log(id, oldPassword,newPassword);
        const result=await service.updatePassword(id,oldPassword,newPassword)
        if(!result.status){
            return sendResponse(res,statusCode.BAD_REQUEST,false,result.message)
        }

        return sendResponse(res,statusCode.OK,true,result.message,result)


    } catch (error) {
        console.error('Error in update Password api : ', error);
        return sendResponse(res,statusCode.INTERNAL_SERVER_ERROR,false, ErrorMessage.INTERNAL_SERVER_ERROR, error?.errors)
    }
}
