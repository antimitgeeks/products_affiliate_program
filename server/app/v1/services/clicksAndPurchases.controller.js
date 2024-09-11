const shortid = require('shortid');

const db = require("../models");
const { Op } = require('sequelize');
const ClickAndPurchases = db.ClickAndPurchases;
const Affiliate = db.affiliate;



//add click and purchases services
exports.addClickAndPurchases = async (req, res, type, affiliateId) => {
    try {
        console.log(affiliateId)
        const isExistAffiliate = await Affiliate.findOne({where:{ id: affiliateId }} )
        if (!isExistAffiliate) {
            return {
                status: false,
                isExist: false
            }
        }
        console.log(isExistAffiliate.userId)
        const result = await ClickAndPurchases.create({ type: type, userId: isExistAffiliate.userId ,affiliateId:affiliateId})
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

//get click and purchases list 
exports.getClickAndPurchasesList = async (req, res, type, id) => {
    try {
        console.log(id, "id")
        console.log(type, "type")

        const result = await ClickAndPurchases.findAll(
            {
                where:
                {
                    [Op.and]: [
                        { userId: id },
                        { type: type }
                    ]
                }
            }
        )
        console.log(result)
        if (!result) {
            return {
                status: false,
                isExist: false
            }
        }
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

