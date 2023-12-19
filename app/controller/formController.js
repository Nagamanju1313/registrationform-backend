const Transaction = require('../modal/formModal')

exports.formResponses = async (req, res, next)=>{
    console.log("Res"+JSON.stringify(req.body))
    let result = await Transaction.formResponses(req.body)
    res.send(result)
}