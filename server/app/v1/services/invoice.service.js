const db = require("../models");
const Invoice = db.invoice;

exports.createInvoice = async (body) => {
    try {

        const result = await Invoice.create({ ...body })
        return {
            status: true,
            result: result
        }
    }

    catch (error) {
        console.log(error)
        return {
            status: false,
            result: error
        }
    }
}

exports.getInvoiceList = async (id) => {

    try {

        const result = await Invoice.findAll({
            where: {
                userId: id
            }
        })

        if (result.length > 0) {
            return {
                status: true,
                result: result
            }
        }
        else {
            return {
                status: false,

            }
        }

    }

    catch (error) {
        console.log(error)
        return {
            status: false,
            result: error
        }
    }

}


exports.updateStatus = async (id, status) => {
    try {

        const isExist = await Invoice.findByPk(id)
        if (isExist) {

            const result = await Invoice.update(
                { status: status },
                {
                    where: {
                        id: id,
                    },
                },
            );

            return {
                status: true,
                result: result
            }
        }
        else {
            return {
                status: false,

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
