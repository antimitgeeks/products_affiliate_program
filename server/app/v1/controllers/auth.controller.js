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
        const result = await service.register(details, uniqueId);
        return sendResponse(res, statusCode.OK, true, `User ${SuccessMessage.CREATED}`, result);
    } catch (error) {
        console.error('Error in register api : ', error);
        return sendResponse(res, statusCode.INTERNAL_SERVER_ERROR, false, ErrorMessage.INTERNAL_SERVER_ERROR, error?.errors);
    }
};


//get user profile
exports.getProfile = async (req, res) => {
    try {
        const result = await service.getUserProfile(req, res)
        if (result.status) {
            return sendResponse(res, statusCode.OK, true, `User Details${SuccessMessage.FETCH}`, result);
        }
        else if (result.status == false && result.result) {
            return sendResponse(res, statusCode.INTERNAL_SERVER_ERROR, false, ErrorMessage.INTERNAL_SERVER_ERROR, result.result);
        }
        else {
            return sendResponse(res, statusCode.BAD_REQUEST, false, ErrorMessage.BAD_REQUEST);

        }
    } catch (error) {
        console.log(error)
        return sendResponse(res, statusCode.INTERNAL_SERVER_ERROR, false, ErrorMessage.INTERNAL_SERVER_ERROR, error?.errors);

    }
}

//update profile
exports.updateProfile = async (req, res) => {
    try {
        const result = await service.updateProfile(req, res)
        console.log(result)
        if (result.status && result.result) {
            return sendResponse(res, statusCode.OK, true, `User Profile ${SuccessMessage.UPDATE}`);
        }
        if (result.status == false && result.result) {
            return sendResponse(res, statusCode.INTERNAL_SERVER_ERROR, false, ErrorMessage.INTERNAL_SERVER_ERROR, result.result);
        }
        if (result.status) {
            return sendResponse(res, statusCode.BAD_REQUEST, false, ErrorMessage.BAD_REQUEST);
        }
    } catch (error) {
        return sendResponse(res, statusCode.INTERNAL_SERVER_ERROR, false, ErrorMessage.INTERNAL_SERVER_ERROR, error?.errors);

    }
}