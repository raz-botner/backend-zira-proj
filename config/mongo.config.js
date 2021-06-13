let mongoose = require("mongoose")
// mongoose.set('returnOriginal', false)

mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGO_PASS}@cluster0.y6nb2.mongodb.net/${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority`, {useNewUrlParser:true, useUnifiedTopology: true})
mongoose.connection.on("connected",()=>console.log("Mongo database connected"))
mongoose.connection.on("error",(err)=>console.log(err))

