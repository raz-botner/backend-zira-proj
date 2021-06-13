const mongoose = require('mongoose')
const Schema = mongoose.Schema

var ChartsSchema = new Schema ({

    id:{type: Number, required:true},
    series:{type:Array , required:true }

},{ versionKey: false })

module.exports =mongoose.model('charts', ChartsSchema);
