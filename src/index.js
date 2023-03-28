const express= require("express")
const { default: mongoose } = require("mongoose")
const app=express()
const route=require("./route/route")

app.use(express.json())

mongoose.set('strictQuery', false);

mongoose.connect("mongodb+srv://SourabhPatil1392:Patils1392@newproject.orvb1ly.mongodb.net/blockChain",{
    useNewurlParser:true
})
.then(()=>console.log("Mongodb is connected"))
.catch ( err => console.log(err) )

app.use("/",route)

app.listen(3000 , ()=>{
    console.log("Express app running on port 3000")
})

