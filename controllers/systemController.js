const systemModel = require('../models/systemModel')

exports.findAll = function(req,res){

    systemModel.find({},(err,data)=>{

        if(err){
            console.log(err)
            res.status(400).send(err.message)
        }
        res.send(data)
    })
}