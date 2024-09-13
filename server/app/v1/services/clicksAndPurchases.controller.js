const shortid = require('shortid');

const db = require("../models");
const { Op, where } = require('sequelize');
const ClickAndPurchases = db.ClickAndPurchases;
const AffiliateAssign = db.affiliateAssign;
const Affiliate = db.affiliate;



//add click and purchases services
exports.addClickAndPurchases = async (req, res, type, assignId) => {
    try {
        const isExistAssignIdAffiliate = await AffiliateAssign.findOne({ where: { id: assignId } })
        if (!isExistAssignIdAffiliate) {
            return {
                status: false,
                isExist: false
            }
        }
        const result = await ClickAndPurchases.create({ type: type, userId: isExistAssignIdAffiliate.userId, assignAffiliateId: assignId })
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
        let result;
        if (type === 'Purchase') {
            result = await ClickAndPurchases.findAll({ where: { userId: id, type: "Purchase" } });
        } else {
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
            result = await ClickAndPurchases.findAll(
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
        }
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

exports.updateClickAndPurhcases = async (req, res, assignId, type) => {
    try {
        const assign = await AffiliateAssign.findOne({ where: { id: assignId } });
        if (type == "clicks") {
            const clickToUpdate = assign.clicks + 1
            const updatedResult = await AffiliateAssign.update(
                { clicks: clickToUpdate },
                {
                    where: {
                        id: assignId,
                    },
                }
            );
            return updatedResult
        } else {
            const purchaseToUpdate = assign.purchases + 1
            const updatedResult = await AffiliateAssign.update(
                { purchases: purchaseToUpdate },
                {
                    where: {
                        id: assignId,
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

