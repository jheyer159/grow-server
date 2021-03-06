//test
const express = require("express")
const app = express()
const dht = require("./src/getDHT")

app.listen("8888", ()=>{
    console.log("Listening on 8888...")
})

app.get("/", (req, res) => {
    let json = {
        "temperature": false,
        "humidity": false
    }

    dht().then( data => {
        let now = new Date()
        console.log( now.toString() + "Request for DHT" )
        let dataJSON = JSON.parse(data[0])
        json.temperature = dataJSON.temp
        json.humidity = dataJSON.hum
        res.send(JSON.stringify(json) )
    })
    .catch( e => {
        console.error( e )
    })
})


