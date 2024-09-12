const shortid = require('shortid');

const db = require("../models");
const { Op, where } = require('sequelize');
const ClickAndPurchases = db.ClickAndPurchases;
const Affiliate = db.affiliate;



//add click and purchases services
exports.addClickAndPurchases = async (req, res, type, affiliateId) => {
    try {
        const isExistAffiliate = await Affiliate.findOne({ where: { id: affiliateId } })
        if (!isExistAffiliate) {
            return {
                status: false,
                isExist: false
            }
        }
        const result = await ClickAndPurchases.create({ type: type, userId: isExistAffiliate.userId, affiliateId: affiliateId })
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
exports.getClickAndPurchasesList = async (req, res, type, id, name) => {
    try {
        const isAffiliateExist = await Affiliate.findOne(
            {
                where:
                {
                    [Op.and]: [
                        { userId: id },
                        { name: name }
                    ]
                }
            })

        if (isAffiliateExist == null) {
            return {
                status: false,
                isExist: false
            }
        }
        const result = await ClickAndPurchases.findAll(
            {
                where:
                {
                    [Op.and]: [
                        { affiliateId: isAffiliateExist.id },
                        { type: type }
                    ]
                }
            }
        )
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

exports.updateClickAndPurhcases = async (req, res, affiliateId, type) => {
    try {
        const affiliate = await Affiliate.findOne({ where: { id: affiliateId } });
        if (type == "Click") {
            const clickToUpdate = affiliate.clickCount + 1
            const updatedResult = await Affiliate.update(
                { clickCount: clickToUpdate },
                {
                    where: {
                        id: affiliate.id,
                    },
                }
            );
            return updatedResult
        } else {
            const purchaseToUpdate = affiliate.purchases + 1
            const updatedResult = await Affiliate.update(
                { purchases: purchaseToUpdate },
                {
                    where: {
                        id: affiliate.id,
                    },
                }
            );
            return updatedResult
        }
    } catch (error) {
        console.log(error)
        return {
            status: false,
            result: error
        }
    }
}

