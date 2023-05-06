const express = require('express');
// const bodyParser = require('body-parser')
const router = new express.Router();
const Products = require('../modals/productsSchema.js');
const USER = require('../modals/userSchema')
const bcrypt = require('bcryptjs')
const authenticate = require('../middleware/authenticate.js')

// get productdata api
router.get('/getproducts', async (req, res) => {
    try {
        const productsdata = await Products.find();
        console.log('console the data' + productsdata);
        res.status(201).json(productsdata)
    } catch (error) {
        console.log('error' + error.message);
    }
})

// GET INDIVIDUAL DATA

router.get("/getproductsone/:id", async (req, res) => {
    try {
        const { id } = req.params;
        //  console.log(id)
        const individualdata = await Products.findOne({ id: id })
        res.status(201).json(individualdata)
    } catch {
        res.status(400).json(individualdata)
        console.log("error" + error.message);
    }
});

// POST REGISTER DATA

router.post("/register", async (req, res) => {
    console.log(req.body)
    const { fname, email, mobile, password, cPassword } = req.body;

    if (!fname || !email || !mobile || !password || !cPassword) {
        res.status(422).json({ error: "fill all the data" });
        console.log("All fields mandatory")
    }

    try {
        const preUser = await USER.findOne({ email: email })

        if (preUser) {
            res.status(422).json({ error: 'This user is already present' })
        } else if (password !== cPassword) {
            res.status(422).json({ error: 'Password and cPassword not match' })
        } else {
            const finalUser = new USER({
                fname, email, mobile, password, cPassword
            })

            // PASSWORD HASHING ===>

            const storeData = await finalUser.save();
            console.log(storeData);
            res.status(201).json(storeData);
        }


    } catch (error) {
        console.log("error =>> ", error.message);
    }
});

// LOGIN USER API

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        res.status(400).json({ error: "fill all the data" })
    }

    try {
        const userLogin = await USER.findOne({ email: email });
        //  res.send(userLogin)

        if (userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password);
            console.log(userLogin, 'find user')
            // TOKEN GENERATION

            const token = await userLogin.generateAuthtoken();
            console.log(token)

            // GENERATE COOKIE

            res.cookie('Amazonweb',token,{
                expires:new Date(Date.now() + 900000),
                httpOnly:true
            })
            if (!isMatch) {
                res.status(400).json({ resp: " notdone" })
            } else {
                res.status(201).json(userLogin)
            }
        }else{
            res.status(400).json({ resp: "Invalid details" })
        }
    } catch (error) {
        res.status(400).json({ error: `catch error ==>${error.message}` })
    }
})


// ADDING DATA INTO CART

router.post('/addcart/:id',authenticate,async(req,res)=>{
    try{
     const {id} = req.params;
     const cart = await Products.findOne({id:id});
     console.log(cart,'cart value');

     const userContact = await USER.findOne({_id:req.userId});
     console.log('usercontact==========',userContact);

     if(userContact){
        const cartData = await userContact.addCartData(cart);
        await userContact.save();
        console.log('cart Data ========', cartData)
        res.status(201).json(userContact)
     }else{
        res.status(401).json({res:'invalid-addcart_id'})
     }
    }catch(error){
      console.log(error.message)
      res.status(401).json({res:'invalid-addcart_id--'})
    }
})

// GET CART DETAILS

router.get('/cartdetails',authenticate,async(req,res)=>{
    try{
          const user = await USER.findOne({_id : req.userId});
          res.status(201).json(user);
    }catch(error){
          console.log('router cartdetail error-------',error.message);
    }
})

// GET VALID USER DETAIL

router.get('/validUser',authenticate,async(req,res)=>{
    try{
          const validUserOne= await USER.findOne({_id:req.userId});
          res.status(201).json(validUserOne);
    }catch(error){
          console.log('router cartdetail error-------',error.message);
    }
})

//  REMOVE ITEM FROM CART
 router.delete('/remove/:id', authenticate,async(req,res)=>{
    try{
     const {id} = req.params;
     req.rootUser.carts = req.rootUser.carts.filter((currVal)=>{
        return currVal.id != id;
     })
     req.rootUser.save();
     res.status(201).json(req.rootUser);
     console.log('item removed')
    }catch(error){
        console.log('delete error'+ error);
        res.status(400).json(req.rootUser);

    }
 })


 // LOGOUT API

 router.get('/logout',authenticate,(req,res)=>{
    try{
      req.rootUser.tokens = req.rootUser.tokens.filter((curEl)=>{
        return curEl.token !== req.token;
      });
      res.clearCookie('Amazonweb',{path:'/'})

      req.rootUser.save();
      res.status(201).json(req.rootUser.tokens)
      console.log('User Logged Out')
    }catch(error){
         console.log('error',error)
    }
 })
module.exports = router;