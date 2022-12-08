// const axios=require("axios")
// const coinModel = require("../model/coinModel")

// const getCoins= async function(req,res){
// try{
//     let options = {
//         method: "get",
//         url:`http://api.coincap.io/v2/assets`
//     }
//     let result = await axios(options)
//     // res.status(200).send({msg:"True",data:result.data})
//     //  for(let i=0;i<result.length;i++){
//     //     let data={
//     //          symbol:result.data.symbol,
//     //          name:result.data.name,
//     //          marketCapUsd:result.data.marketCapUsd,
//     //          priceUsd:result.data.priceUsd
//     //     }
//         let createCoin=await coinModel.create(result.data)
//         return res.status(200).send("Created")
//      }

// catch(err){
//     return res.status(500).send({err:err.message})
// }

// }



const mongoose = require("mongoose")
const coinmodel = require ("../model/coinModel")
let axios =require('axios')

let getcoins = async  (req, res)=>{
    try {
        let options = {
            method: 'get',
            url: `https://api.coincap.io/v2/assets`
        }
        let result = await axios(options);
       
        let data = result.data.data
        let sortedcoins = data.sort((a,b)=> a.changePercent24Hr-b.changePercent24Hr)
        await coinmodel.deleteMany()
        let create = await coinmodel.create(data)
        return res.status(200).send({ data: sortedcoins })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}
module.exports.getCoins=getcoins
