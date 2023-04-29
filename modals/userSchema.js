const mongoose= require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secretKey = process.env.KEY;

const userSchema = new mongoose.Schema({
    fname:{
        type:String, 
        required : true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('not valid email address')
            }
        }
    },
    mobile:{
        type:String, 
        required : true,
        unique: true,
        maxLength:10
    },
    password:{
        type: String,
        required: true,
        minLength:6
    },
    cPassword:{
        type: String,
        required: true,
        minLength:6
    },
    tokens:[
        {
            token:{
                 type:String,
                 require:true,
             }
       }
    ],
    carts: Array
});

userSchema.pre('save', async function(next){
    if(this.isModified('password')){
    this.password = await bcrypt.hash(this.password, 12);
    this.cPassword = await bcrypt.hash(this.cPassword, 12);
}
  next();
})

// TOKEN GENERATIOIN

userSchema.methods.generateAuthtoken = async function(){
    try{
        let token = jwt.sign({_id:this._id},secretKey);
        this.tokens = this.tokens.concat({token:token});
        await this.save();
        return token;
    }catch(error){
            console.log(error.message)
    }
}

// ADDING DATA TO CART

userSchema.methods.addCartData = async function(cart){
    try{
        this.carts = this.carts.concat(cart);
        await this.save();
        return this.carts
    }catch(error){
      console.log(error.message);
    }
}
const USER = new mongoose.model("USER", userSchema);


module.exports = USER;