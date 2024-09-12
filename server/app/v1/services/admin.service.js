const shortid = require('shortid');
const db = require("../models");
const Affiliate = db.affiliate;
const jwt = require('jsonwebtoken');
const fs = require('fs')
const path=require('path')

exports.allUsers = async (req, res, shortId) => {
    try {
        const token = req.headers.authorization.split(' ')[1]
        const userId = jwt.decode(token).id
        console.log(req.file);
        const details = { ...req.body, userId, url: req.file.originalname }
        details.shortId = shortId
        const host = await req.headers.host
        details.shortUrl = `${host}${process.env.BASE_URL}/affiliate/${shortId}`

        const result = await Affiliate.create(details)
        if (result) {
            return {
                status: true,
                result: result
            }
        }
        else {
            return {
                status: false
            }
        }

    } catch (error) {
        console.log(error)
        return {
            status: false,
            result: error
        }
    }
}
