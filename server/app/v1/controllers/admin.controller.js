const service = require('../services/admin.service')
const { sendResponse } = require("../utils/sendResponse.js");
const { SuccessMessage, ErrorMessage } = require("../constants/messages.js");
const statusCode = require("../constants/statusCodes.js");

exports.allUsers = async (req, res) => {
    console.info('********************************all Users API**********************');
    try {

        const result = await service.allUsers()

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

exports.notAssignedCustomers = async (req, res) => {
    try {
        const affiliateId = req.params.id
        const result = await service.notAssignedCustomers(affiliateId);
        return sendResponse(res, statusCode.OK, true, SuccessMessage.FETCH, result)
    } catch (error) {
        console.error(error);
        return sendResponse(res, statusCode.INTERNAL_SERVER_ERROR, false, ErrorMessage.INTERNAL_SERVER_ERROR, error?.errors);
    }
}

exports.affiliateListAssign = async (req, res) => {
    try {
        const afiliateId = req.params.id
        const users = await service.affiliateListAssign(afiliateId);
        if (users.status == false && users.status) {
            return sendResponse(res, statusCode.INTERNAL_SERVER_ERROR, false, ErrorMessage.INTERNAL_SERVER_ERROR, error?.errors);

        }
        return sendResponse(res, statusCode.OK, true, SuccessMessage.FETCH, users?.result)

    } catch (error) {
        console.error(error);
        return sendResponse(res, statusCode.INTERNAL_SERVER_ERROR, false, ErrorMessage.INTERNAL_SERVER_ERROR, error?.errors);
    }
}

exports.userAffiliates = async (req, res) => {
    try {
        const userId = req.params.id
        const result = await service.userAffiliates(userId);
        return sendResponse(res, statusCode.OK, true, SuccessMessage.FETCH, result)

    } catch (error) {
        console.error('Error in all affiliate  list assign api : ', error);
        return sendResponse(res, statusCode.INTERNAL_SERVER_ERROR, false, ErrorMessage.INTERNAL_SERVER_ERROR, error?.errors);
    }
}