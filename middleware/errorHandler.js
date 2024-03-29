const {constants} = require("../constants")
const errorHandler = (err,req,res,next) => {
    const statusCode = res.statusCode ? res.statusCode : 500
    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            res.json({
                tile:"Validation Failed", 
                message: err.message, 
                stackTrace: err.stack,
            })
        case constants.NOT_FOUND:
            res.json({
                title: "Not Found",
                message: err.message, 
                stackTrace: err.stack,
            })
        case constants.UNAUTHRORIZED:
            res.json({
                title: "Un authorized",
                message: err.message, 
                stackTrace: err.stack,
            })
        case constants.FORBIDDEN:
            res.json({
                title: "Forbidden",
                message: err.message, 
                stackTrace: err.stack,
            })
        case constants.SERVER_ERROR:
            res.json({
                title: "Server error",
                message: err.message, 
                stackTrace: err.stack,
            })
        default:
            console.log("No Error, All good!")
            break;
    }
}

module.exports = errorHandler


