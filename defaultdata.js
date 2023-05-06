const Products = require('./modals/productsSchema');

const productsdata = require("./constant/productsdata");

const DefaultData = async()=>{
    try{
        await Products.deleteMany({});
     const storeData = await Products.insertMany(productsdata);
     console.log("DATASTORED");
    }catch(error){
       console.log('error ==',error.message);
    }
}

module.exports = DefaultData;