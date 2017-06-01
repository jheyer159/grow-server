const express = require("express")
const app = express()
import dht from "./src/getDHT"

app.listen("8888", ()=>{
    console.log("Listening on 8888...")
})

app.get("/", (req, res) => {
    let json = {
        "temperature": false,
        "humidity": false
    }

    dht().then( data => {
        console.log( data )
        dataJSON = JSON.parse(data[0])
        let temp = dataJSON.temp
        let humd = dataJSON.hum
        console.log( "temp" + temp)
        console.log( "hum" + hum )
        json.temperature = temp
        json.humidity = hum
        console.log( json )
    })
    .catch( e => {
        console.error( e )
    })

    //create json for client

    res.send(JSON.stringify(json) )
})

function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min
}


