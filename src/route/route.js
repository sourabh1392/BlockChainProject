const express=require("express")
const router=express.Router()
const controller=require("../controller/controller")

router.get("/assets",controller.getCoins)

module.exports=router