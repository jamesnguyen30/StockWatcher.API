const User = require("../models/schemas/UserSchema")
const apiResponse = require("../helpers/apiResponse")

// function BookResponse(rawData) { 

// }

exports.allUserList = function(req,res) { 
    try{
        User.find({}, "_id name email password").then(users=>{
            console.log(users)
            if (users.length != 0){
                return apiResponse.successResponseWithData(res, "Success", users)
            } else {
                return apiResponse.successResponseWithData(res, "Success with empty set", [])
            }
        })
    } catch { 
        return apiResponse.errorResponse(res, "Failed")
    }
};

