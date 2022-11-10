exports.getData = (req,res,next)=>{
    res.status(200).json({
        status : 'ok',
        message : 'this will be future routes'
    })
}
