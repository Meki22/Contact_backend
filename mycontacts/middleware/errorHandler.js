const {constants} = require("../constants");

const errorHandler = (err,req,res,next) =>{

    const statusCode = res.statusCode ? res.statusCode : 500;
    switch(statusCode){
      
        case constants.FORBIDEEN:
            res.json({title :"Validation error  ", message: err.message , stackTrace : err.stack});
            break;
            case constants.NOT_AUTHORAIZED:
                res.json({title :"not found ", message: err.message , stackTrace : err.stack});
            break;
            case constants.SERVER_ERROR:
                res.json({title :"not found ", message: err.message , stackTrace : err.stack});
            break;
            case constants.Validity_ERROR:
                res.json({title :"not found ", message: err.message , stackTrace : err.stack});
            break;
            case constants.NOT_FOUND:
                res.json({title :"not found ", message: err.message , stackTrace : err.stack});
            break;
            default:
                console.log("no errors great job");
                break;
            
    }
   

    
};
module.exports = errorHandler;