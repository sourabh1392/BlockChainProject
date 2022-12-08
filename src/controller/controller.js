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
