const express = require('express')
const app = express()

app.listen("8888", ()=>{
    console.log("Listening on 8888...")
})

app.get("/", (req, res) => {
    let dht = require("../src/getDHT.js")()
    //console.log("dht: ", dht)
    let temp = getRandomInt( 55, 56 )
    let humd = getRandomInt( 55, 56 )
    let json = {
        "temperature": temp,
        "humidity": humd
    }
    res.send(JSON.stringify(json) )
})

function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min
}


