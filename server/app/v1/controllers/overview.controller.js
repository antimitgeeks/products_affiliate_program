const overviewService = require("../services/overview.service.js");
const { sendResponse } = require("../utils/sendResponse.js");
const { SuccessMessage, ErrorMessage } = require("../constants/messages.js");
const statusCode = require("../constants/statusCodes.js");

const { decode } = require('jsonwebtoken')


exports.getOverviews = async (req, res) => {
    try {
        const token = req.header('authorization').split(' ')[1]
        const id = decode(token).id
        const result = await overviewService.getOverviews(req, res, id)
        const { paid, pending, total } = result
        if (result.status) {
            return sendResponse(res, statusCode.OK, true, SuccessMessage.FETCH, { paid, pending, total });
        }
        else{
        return sendResponse(res, statusCode.INTERNAL_SERVER_ERROR, false, ErrorMessage.INTERNAL_SERVER_ERROR);

        }
    } catch (error) {
        console.log(error);
        return sendResponse(res, statusCode.INTERNAL_SERVER_ERROR, false, ErrorMessage.INTERNAL_SERVER_ERROR, error?.errors);

    }
}