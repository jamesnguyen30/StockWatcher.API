//Test db URL link: https://cloud.mongodb.com/v2/602ddad640058172dab8bdc8#clusters
const {MongoClient} = require("mongodb")
const mongoose = require("mongoose")
// Remote URL STRING to Remote MongoDB
const connectionString = "mongodb+srv://jamesnguyendev:Nguyen@2021@stockwatch.beebw.mongodb.net/sample_mflix?retryWrites=true&w=majority"

mongoose.connect(connectionString, { useNewUrlParser: true }, (err)=>{
    if(err){
        console.log("Failed to connect to db")
    } else {
        console.log("Conncted to db")
    }

})
