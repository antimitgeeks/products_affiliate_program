const db = require("../models");
const Invoice=db.invoice;

exports.createInvoice=async (body)=>{
    try {
        
        const result=await Invoice.create({...body})
        return {
            status:true,
            result:result
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

