const jwt = require('jsonwebtoken');
const USER= require('../modals/userSchema');
const secretKey= process.env.KEY

const authenticate = async(req,res,next)=>{
    try{
      const token = req.cookies.Amazonweb;

      const verifyToken = jwt.verify(token,secretKey);
      console.log(verifyToken,'verifytoken');

      const rootUser = await USER.findOne({_id:verifyToken._id,"tokens.token":token})
      // console.log(rootUser,'rootuser');

      if(!rootUser){throw new Error('user not found')};

      req.token = token;
      req.rootUser= rootUser;
      req.userId = rootUser._id;

      next();
    } catch(error){
         res.status(401).send('unautherised: No token provided')
         console.log(error.messege)
    }
}

module.exports = authenticate;