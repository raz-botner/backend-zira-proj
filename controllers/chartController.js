
const chartModel = require('../models/chartModel')

exports.findAll = function(req,res){

    chartModel.find({},(err,data)=>{

        if(err){
            console.log(err)
            res.status(400).send(err.message)
        }
        res.send(data)
    })
}

exports.findOne = async function(req,res){
    try{
        let chart=await chartModel.findOne({id:req.params.id}).exec();
        res.send(chart)
      }
      catch(err){
        res.status(400).send(err.message);
      } 
}