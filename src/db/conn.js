const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://dataweban:QWERTY@cluster0.rvjf2ak.mongodb.net/", {
    //useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=> {
    console.log("connection succesfull");
}).catch((error)=>{
    console.log(error)
})