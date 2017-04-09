const express = require('express')
const app = express()
//import dht from "./getDHT"
const dht = require('./getDHT')

var babel = require("babel-core");
import { transform } from 'babel-core';
import * as babel from 'babel-core';


app.listen("8888", ()=>{
    console.log("Listening on 8888...")
})


app.get("/", (req, res) => {
//    let dht = dht.get()
    let temp = getRandomInt( 10, 80 )
    let humd = getRandomInt( 15, 77 )
    let json = {
        "temperature": temp,
        "humidity": humd
    }
    res.send( json )
})

function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min
}
