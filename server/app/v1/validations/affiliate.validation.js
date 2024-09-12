const schema=require('./schema/affiliate.schema.js')

const statusCode=require('../constants/statusCodes.js')

exports.addAffiliate=async (req,res,next)=>{
const {error}=schema.addAffiliateSchema.validate(req.body,{abortEarly:false})
if(error){
    res.status(statusCode.BAD_REQUEST).json({error:error.details[0].message});
}
else{
    next();
}
}
exports.affiliateParam=async (req,res,next)=>{
    const {error}=schema.paramAffiliateSchema.validate(req.params.id)
if(error){
    res.status(statusCode.BAD_REQUEST).json({error:error.details[0].message});
}
else{
    next();
}
}
