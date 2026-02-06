
const checkRole=(req, res , next)=>{

    let userRole= req.user.role;

    try {
        if(userRole === 'admin'){
            next();
        } else {
            res.status(403).json({err:"Unauthorised to add products."})
        }
    } catch (error) {
        res.status(500).json({err:"Unable to authorise the role of user"})
    }
}


module.exports=checkRole;