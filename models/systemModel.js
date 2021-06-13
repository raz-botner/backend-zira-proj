const mongoose = require('mongoose')
const Schema = mongoose.Schema

var systemSchema = new Schema ({

    data:{type: Array, required:true},
    lastValue:{type:String}

},{ versionKey: false })

module.exports =mongoose.model('systems', systemSchema);
