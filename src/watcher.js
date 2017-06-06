import dht from "./src/getDHT"

var Watcher = function(options){
    this.type = options.type;
    this.low = options.low
    this.high = options.high
    this.lowFunc = options.lowFunc
    this.highFunc = options.highFunc
}

Watcher.prototype.activate = function(){
    return true
}

module.exports = Watcher