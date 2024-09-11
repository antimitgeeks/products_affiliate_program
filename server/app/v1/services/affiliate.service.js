const shortid = require('shortid');
const db = require("../models");
const Affiliate = db.affiliate;
const jwt = require('jsonwebtoken');
const fs = require('fs')
const path=require('path')
//add affiliate 
exports.addAffiliate = async (req, res, shortId) => {
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
        const result = await Affiliate.findOne({ where: { shortId: shortId } });
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

//get affiliate services
exports.getAffiliate = async (req, res) => {
    try {

        const result = await Affiliate.findAll({
            order: [
                ['id', 'DESC'],
            ]
        });


        result.forEach(obj => {


            
            
            // else {
            //     console.log("/tmp/myfile does not exist!");
            // }



            if (obj.dataValues.url !== null && obj.dataValues.url !== undefined){

                const dir = path.join(__dirname,"..")
                const newpath=  `${dir}/utils/images/${obj.dataValues.url}`

            if (fs.existsSync(`${newpath}`)) {

                obj.dataValues.url = req.hostname + '/' + obj.dataValues.url
                console.log(obj.dataValues.url);
                console.log("/tmp/myfile exists!");
                }

                
   
            }
            
        });


        if (result) {
            return {
                status: true,
                result: result
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