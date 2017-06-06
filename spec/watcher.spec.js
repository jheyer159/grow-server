var Watcher = require("../src/watcher");

describe("Watcher", function(){

    it("is instantiated", function(){
        var watcher = new Watcher({
            "type": "temp",
            "low": "22",
            "high": "85",
            "lowFunc": "off",
            "highFunc": "on"
        })
        expect(watcher.activate()).toBe(true)
    })
})