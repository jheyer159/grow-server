const express = require("express")
const app = express()
import dht from "./src/getDHT"

app.listen("8888", ()=>{
    console.log("Listening on 8888...")
})

app.get("/", (req, res) => {
    let temp = "55"
    let humd = "55"

    async function tick() {
        let pGet = await dht()
        return pGet
    }

    tick().then( data => {
        console.log( data )
    })

    //create json for client
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


