
const { raw } = require("express");
const db = require("../models");
const Invoice = db.invoice;
const { Op } = require('sequelize')
const sequelize = require('sequelize')
exports.getOverviews = async (req, res, id) => {
    try {


        const month = parseInt(req.body.month);
        const year = parseInt(req.body.year);

        // First day of the given month
        const first_date = new Date(Date.UTC(year, month - 1, 1, 0, 0, 0));
        const last_date = new Date(Date.UTC(year, month, 0, 23, 59, 59, 999))

        const paid = await Invoice.findAll({
            attributes: [[sequelize.fn("SUM", sequelize.col("commission")),'paidSum']],
            where: {
                [Op.and]: [
                    {
                        createdAt: {
                            [Op.between]: [first_date, last_date],
                        },
                    },
                    {
                        userId: id,
                    },
                    { [Op.not]: [{ status: 'Cancel' }] }
                ],
            },
            raw: true
        });
        const pending = await Invoice.findAll({
            attributes: [[sequelize.fn("SUM", sequelize.col("commission")),'pendingSum']],

            where: {
                [Op.and]: [
                    { userId: id },
                    { status: "Pending" }
                ]
            },
            raw: true
        })

        const total = await Invoice.findAll({
            attributes: [[sequelize.fn("SUM", sequelize.col("commission")), "sum"]],

            where: {
                [Op.and]: [
                    { userId: id },
                    { status: "Paid" }
                ]
            },
            raw: true
        })
        console.log(total, "total")
        console.log(pending, "pending")
        return {
            paid:paid[0].paidSum,
            pending:pending[0].pendingSum,
            total:total[0].sum
        }


    } catch (error) {
        console.log(error)
        return {
            status: false,
            result: error
        }
    }
}