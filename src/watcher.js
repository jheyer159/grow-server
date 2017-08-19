const dht = require("./getDHT")

var Watcher = function(options){
    options = JSON.parse(options)
    this.type = options.type;
    this.low = options.low
    this.high = options.high
    this.lowFunc = options.lowFunc
    this.highFunc = options.highFunc
}

Watcher.prototype.activate = function(){
    var json = { 
        "type": this.type,
        "low": this.low,
        "high": this.high,
        "lowFunc": this.lowFunc,
        "highFunc": this.highFunc
    }
    return JSON.stringify(json)
}


//types possible

module.exports = Watcher