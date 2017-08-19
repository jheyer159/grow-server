var Watcher = require("../src/watcher.js");

describe("Watcher", function(){

    it("is instantiated with data", function(){
        var options = {
            "type": "temp",
            "low": "22",
            "high": "85",
            "lowFunc": "off",
            "highFunc": "on"
        }
        options = JSON.stringify(options)
        var watcher = new Watcher(options)
        expect(watcher.activate()).toBe(options)
    })
})