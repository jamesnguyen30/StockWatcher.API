function BaseApiResponse(status, statusCode, message){
    this.status = status
    this.statusCode = statusCode 
    this.message = message 
}
function ApiResponse(status, statusCode, message, data) {
    BaseApiResponse.call(this, status, statusCode, message)
    this.data = data
}

exports.successResponse = function (res, message) { 
    var status = 1
    var statusCode = 200
    var response = new BaseApiResponse(status, statusCode, message)
    return res.status(statusCode).json(response)
}

exports.successResponseWithData = (res, message, data) => {
    var status = 1
    var statusCode = 200
    var response = new ApiResponse(status, statusCode, message, data)

    return res.status(statusCode).json(response)
}

exports.errorResponse = function (res, message) { 
    var status = 1
    var statusCode = 500 
    var response = new BaseApiResponse(status, statusCode, message)
    return res.status(statusCode).json(response)
}