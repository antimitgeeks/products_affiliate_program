const shortid = require('shortid');
const db = require("../models");
const Affiliate = db.affiliate;
const Users = db.users
const AffiliateAssign = db.affiliateAssign
// const Users
const jwt = require('jsonwebtoken');
const fs = require('fs')
const path = require('path')

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

exports.affiliateListAssign = async (id) => {
    const Users = await Users.findAll()
//     const result = Users.map((i) => {
//         // const allAdminAffiliates = await AffiliateAssign.findAll(
//             // { where: { affiliateId: id },{ userId: i.id }}
//     )
// })

const assignListData = await Users.findAll({
    include: [

        { model: Affiliate, attributes: ['name'] }
    ]
})
console.log(assignListData);
    
    
}