const shortid = require('shortid');
const { Sequelize } = require('sequelize');

const db = require("../models");
const Affiliate = db.affiliate;
const Users = db.users
const AffiliateAssign = db.affiliateAssign
const ClickAndPurchases = db.ClickAndPurchases
// const Users
const jwt = require('jsonwebtoken');
const fs = require('fs')
const path = require('path')
const { Op, where } = require('sequelize');

exports.allUsers = async (req) => {
    try {

        const page = parseInt(req.body.page) || 1;  // Default to page 1
        const limit = parseInt(req.body.limit) || 10;  // Default to 10 items per page
        const offset = (page - 1) * limit;
        const query = req.body.search || "";

        const result = await Users.findAndCountAll({
            limit: limit,
            offset: offset,
            where: {
                role: 'customer',
                [Op.or]: {
                    email: {
                        [Op.like]: `${query}%`,
                    },
                    userId: {
                        [Op.like]: `${query}%`,
                    },
                    companyName: {
                        [Op.like]: `${query}%`,
                    },
                },
            },
            include: {
                model: AffiliateAssign,
                attributes: ['affiliateId'],
            },
            order: [['createdAt', 'DESC']],
            attributes: [
                "id", "email", "country", "city", "address", "userId", "companyName", 'isActive', 'commisionByPercentage', 'createdAt'
            ],
            distinct: true,
        });
        let allUsers = []
        // First map for getting affiliateAssigns
        const finalResult = await Promise.all(result.rows.map(async (user) => {
            // Fetch the email once per user
            const userData = await Users.findOne({
                where: { id: user.id }
            });
        
            // Map over the affiliateAssigns of each user
            const affiliateAssigns = await Promise.all(user.affiliateAssigns.map(async (assign) => {
                // Perform the query to get affiliate assignments
                const affiliateResult = await AffiliateAssign.findAll({
                    where: {
                        [Op.and]: [
                            { userId: user.id },
                            { affiliateId: assign.affiliateId }
                        ]
                    }
                });
            
                // Calculate the length (number of results)
                const affiliateCount = affiliateResult.length;
            
                // Return all results, adding affiliateCount to the first object of each set
                return affiliateResult.map((result, index) => ({
                    ...result.toJSON(),  // Spread the original affiliate assignment data
                    id: userData.id,
                    email: userData.email,  // Attach only the email from the user
                    userId: userData.userId,
                    country: userData.country,
                    city: userData.city,
                    address: userData.address,
                    companyName: userData.companyName,
                    isActive: userData.isActive,
                    commisionByPercentage: userData.commisionByPercentage,
                }));
            }));
            
            const flattenResult = (affiliateAssigns.flat())
            return {
                affiliateAssign: affiliateAssigns.flat(),  
                affiliateCount:flattenResult.length
            };
            
            
        }));
        
        // console.log(finalResult);
        
    
        

        // console.log(allUsers, "---------------allUsers");

        // Now flatten the results if needed (since it's nested arrays)
        const flattenedResults = finalResult.flat();

        console.log(flattenedResults, "Flattened Final Result");

        return {
            status: true,
            result: flattenedResults
        }
        // const b = 
        // if(result){
        //     finalResult = result.map(async(i)=>{
        //             await AffiliateAssign.findOne({
        //                 where:{
        //                     userId:i.id
        //                 }
        //             })
        //     })
        // }

        if (result) {
            await result?.rows?.map(async (user) => {
                // console.log(user.id,"=============user")
                // console.log(user.dataValues.affiliateAssigns,"=============affilaite assign id ")
                const b = []
                const a = user.dataValues.affiliateAssigns.map((i) => {
                    return b.push(i.affiliateId)
                })
                // console.log(a,"a")
                // console.log(b)
                const c = await a.map(async (i) => {
                    // Return the result of the async function so that map returns a promise
                    return await AffiliateAssign.findAll({
                        where: {
                            [Op.and]: [
                                { userId: user.id },
                                { affiliateId: i }
                            ]
                        }
                    });
                });

                // Use Promise.all() to wait for all promises to resolve
                const d = Promise.all(c).then((e) => {
                    return e;
                }).catch((err) => {
                    console.error(err); // Catch any errors from the promises
                });
                // console.log(d,"===d")
                // console.log(assignAffiliate,'assign affiliate')
                const affiliateCount = user.affiliateAssigns.length;
                user.dataValues.affiliateCount = affiliateCount;
                user.dataValues.assignedAffilaite = assignAffiliate
                // delete user.dataValues.affiliateAssigns
            });

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

//not assigned
exports.notAssignedCustomers = async (affiliateId, req) => {
    try {

        const page = parseInt(req.body.page) || 1;  // Default to page 1
        const limit = parseInt(req.body.limit) || 10;  // Default to 10 items per page
        const offset = (page - 1) * limit;
        const query = req.body.search || ""

        const affiliateDetails = await AffiliateAssign.findAll({

            where: {
                affiliateId

            }, attributes: ['userId']

        });
        const assignedUserIds = affiliateDetails.map(detail => detail.userId);

        const result = await Users.findAndCountAll({
            limit: limit,
            offset: offset,
            where: {
                id: {
                    [Op.notIn]: assignedUserIds.length > 0 ? assignedUserIds : [0]
                },
                [Op.or]: {
                    email: {
                        [Op.like]: `${query}%`,
                    },
                },

                role: 'customer'
            },
            order: [['createdAt', 'DESC']],
            distinct: true
        });
        if (result) {
            return {
                status: true,
                result: result
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


exports.affiliateListAssign = async (id, req) => {
    try {

        const page = parseInt(req.body.page) || 1;  // Default to page 1
        const limit = parseInt(req.body.limit) || 10;  // Default to 10 items per page
        const offset = (page - 1) * limit;
        const query = req.body.search || ""

        const allAdminAffiliates = await AffiliateAssign.findAndCountAll({
            limit: limit,
            offset: offset,
            where:
            {
                affiliateId: id
            },
            include: [
                {
                    model: Users,
                    where: {
                        [Op.or]: {
                            email: {
                                [Op.like]: `${query}%`,
                            },
                        }

                    }
                }
            ],
            distinct: true
        })
        if (allAdminAffiliates) {
            return {
                status: true,
                result: allAdminAffiliates
            }
        }

        return {
            status: false,

        }

    } catch (error) {
        console.log(error)
        return {
            status: false,
            result: error
        }
    }
}

exports.userAffiliates = async (userId, req) => {
    try {

        const page = parseInt(req.body.page) || 1;  // Default to page 1
        const limit = parseInt(req.body.limit) || 10;  // Default to 10 items per page
        const offset = (page - 1) * limit;
        const query = req.body.search || ""

        const user = await Users.findOne({ where: { id: userId } });
        if (!user) {
            return {
                status: false,
            }
        }
        const assignAffiliateDetails = await AffiliateAssign.findAndCountAll({

            limit: limit,
            offset: offset,

            where: {
                userId,
            },
            include: [
                {
                    model: Affiliate,
                    where: {
                        [Op.or]: {
                            name: {
                                [Op.like]: `${query}%`,
                                // [Op.like]: {shortId:`${query}%`}
                            },
                            shortId: {
                                [Op.like]: `${query}%`
                            }
                        },
                    },
                    require: true
                }
            ],
            order: [
                ['createdAt', 'DESC'],
            ],
            distinct: true
        });



        const uniqueId = user.userId
        assignAffiliateDetails["uniqueId"] = uniqueId

        assignAffiliateDetails?.rows.forEach(obj => {


            if (obj.dataValues.affiliate.imageUrl !== null && obj.dataValues.affiliate.imageUrl !== undefined) {

                const dir = path.join(__dirname, "..")
                const newpath = `${dir}/utils/images/${obj.dataValues.affiliate.imageUrl}`

                if (fs.existsSync(`${newpath}`)) {

                    obj.dataValues.affiliate.imageUrl = req.hostname + '/' + obj.dataValues.affiliate.imageUrl

                }



            }

        });

        if (assignAffiliateDetails) {
            return {
                status: true,
                result: assignAffiliateDetails
            }
        }
        return {
            status: false
        }


    } catch (error) {
        console.log(error)
        return {
            status: false,
            result: error
        }

    }
}


exports.deleteAffiliate = async (affiliateId, req) => {

    try {
        const isExist = await Affiliate.findOne({ where: { id: affiliateId } })
        if (!isExist) {
            return {
                status: false,
                isExist: false
            }
        }
        const deletedData = await Affiliate.destroy({ where: { id: affiliateId } })
        if (deletedData) {
            return {
                status: true,
                result: deletedData
            }
        }
        return {
            status: false
        }
    } catch (error) {
        console.log(error)
        return {
            status: false
        }
    }
}


//
exports.userDetails = async (userId) => {
    const result = await Users.findOne(
        {
            where: { id: userId },
            attributes: { exclude: ["password"] }
        })
    return result
}


exports.deleteAffiliateAssign = async (assignedAffilaiteId) => {


    const deletedClickAndPurchases = await ClickAndPurchases.destroy({
        where: { assignAffiliateId: assignedAffilaiteId }
    })

    const deletedAssigned = await AffiliateAssign.destroy({
        where: { id: assignedAffilaiteId }
    })

    if (deletedAssigned) {
        return true
    }

    return false


}

//update user status 
exports.updateUserStatus = async (userId, status) => {

    let updatedUserStatus
    if (status != undefined) {
        updatedUserStatus = await Users.update(
            { isActive: status },
            {
                where: {
                    id: userId
                }
            })
    }

    if (updatedUserStatus) {
        return {
            status: true
        }
    }
    return {
        status: false
    }
}
//update user status 
exports.updateCommission = async (userId, commision) => {

    let updatedUserStatus = await Users.update(
        { commisionByPercentage: commision },
        {
            where: {
                id: userId
            }
        })


    if (updatedUserStatus) {
        return {
            status: true
        }
    }
    return {
        status: false
    }
}


exports.assignedUsers = async (affiliateId, req) => {

    try {

        const page = parseInt(req.body.page) || 1;  // Default to page 1
        const limit = parseInt(req.body.limit) || 10;  // Default to 10 items per page
        const offset = (page - 1) * limit;
        const query = req.body.search || ""

        let result = await AffiliateAssign.findAndCountAll(

            {

                limit: limit,
                offset: offset,
                where: {
                    affiliateId: affiliateId
                },
                include: [{
                    model: Users,
                    attributes: { exclude: ['password'] },
                    where: {
                        [Op.or]: {
                            email: {
                                [Op.like]: `${query}%`,
                            },

                            city: {
                                [Op.like]: `${query}%`,
                            },
                            country: {
                                [Op.like]: `${query}%`,
                            }

                        },
                    }
                }]
            })


        if (AffiliateAssign) {
            return {
                status: true,
                result: result,
            }
        }

    } catch (error) {
        return {
            status: false,
            result: error
        }
    }

}

//update afffilite type
exports.updateAffiliateType = async (affiliateId, details) => {

    const result = await details.map(async (i) => {
        await AffiliateAssign.update(
            { type: i.type },
            {
                where: {
                    [Op.and]: [
                        { userId: i.userId },
                        { affiliateId: affiliateId }

                    ]
                }
            }
        )
    })



    if (result) {
        return {
            status: true
        }
    }
    return {
        status: false
    }
}

exports.bulkDeleteAffiliateAssign = async (details) => {

    const deletedAssigned = await details.map(async (i) => {
        console.log(i)
        const deletedClickAndPurchases = await ClickAndPurchases.destroy({
            where: { assignAffiliateId: i }
        })

        const deletedAssigned = await AffiliateAssign.destroy({
            where: { id: i }
        })
    })


    if (deletedAssigned) {
        return true
    }

    return false

}