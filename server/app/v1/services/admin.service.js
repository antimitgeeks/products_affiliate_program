const shortid = require('shortid');
const db = require("../models");
const Affiliate = db.affiliate;
const Users = db.users
const AffiliateAssign = db.affiliateAssign
// const Users
const jwt = require('jsonwebtoken');
const fs = require('fs')
const path = require('path')
const { Op, where } = require('sequelize');

exports.allUsers = async () => {
    try {
        const result = await Users.findAll({
            attributes: ["id", "email", "country", "city", "address", "companyName", "companyNumber"]
        })
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

exports.notAssignedCustomers = async (affiliateId) => {
    const affiliateDetails = await AffiliateAssign.findAll({ where: { affiliateId }, attributes: ['userId'] });
    const assignedUserIds = affiliateDetails.map(detail => detail.userId);

    const result = await Users.findAll({
        where: {
            id: {
                [Op.notIn]: assignedUserIds.length > 0 ? assignedUserIds : [0]
            }
        }
    });
    return result;
}