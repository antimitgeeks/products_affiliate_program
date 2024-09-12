const shortid = require('shortid');
const db = require("../models");
const Affiliate = db.affiliate;
const Users = db.users
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
