New! Keyboard shortcuts … Drive keyboard shortcuts have been updated to give you first-letters navigation
exports.signupValidator = (req,res,next) =>{
    const {name,email,password,bio,username} = req.body;

    if(req.body && name && email && password && bio && username){
        next()
    }else{
        res.status(404).send({msg:"all Input Fields are required"})
    }
}
