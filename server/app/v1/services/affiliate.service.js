const shortid = require('shortid');
const db = require("../models");
const Affiliate = db.affiliate;

//add affiliate 
exports.addAffiliate = async (req, res, shortId) => {
    try {
        const details = { ...req.body }
        details.shortId = shortId
        details.shortUrl = `${process.env.AFFILIATE_LINK}:${process.env.PORT}${process.env.BASE_URL}/affiliate/${shortId}`

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

//short link id generate
exports.shortLink = async (req, res, link) => {
    try {
        const urls = {};

        const shortId = shortid.generate();

        urls[shortId] = link;
        return shortId
    } catch (error) {   
        console.log(error)
        return false
    }
}

// redirect short url link
exports.redirectShortLink = async (req, res) => {
    try {
        const shortId = req.params.id
        console.log("short id is :",shortId);
        const result = await Affiliate.findOne({ where: { shortId: shortId } });
        console.log("result is:",result);
        const url = result.link
        if (result) {
            return {
                status: true,
                result: url
            }
        } else {
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