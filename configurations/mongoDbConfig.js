//Test db URL link: https://cloud.mongodb.com/v2/602ddad640058172dab8bdc8#clusters
const {MongoClient} = require("mongodb")
// Remote URL STRING to Remote MongoDB
const urlString = "mongodb+srv://jamesnguyendev:Nguyen@2021@stockwatch.beebw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

function DbContext() {
}

DbContext.testConnection = async function(){
    const client = new MongoClient(urlString)
    try{
        await client.connect()

        const db = client.db("StockWatch")
        await db.command({ping: 1})
        console.log("Connected Succesfully")
    } finally { 
        await client.close()
    }
}

module.exports = DbContext


