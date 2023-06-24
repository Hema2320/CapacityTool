const mongoose = require("mongoose");

const DB ="mongodb+srv://Hema2320:Hema2320@cluster0.kag8j.mongodb.net/capacityToolss"

mongoose.connect(DB,{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=> console.log("DataBase Connected")).catch((err)=>{
    console.log(err);
})