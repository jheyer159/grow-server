//var PythonShell = require('python-shell')
const GrovePi = require('node-grovepi').GrovePi

var Commands = GrovePi.commands
var Board = GrovePi.board

var DHTDigitalSensor = GrovePi.sensors.DHTDigital

var board = new Board({
    debug: true,
    onError: function(err) {
      console.error(new Date() + ": Board error: " + err)
    },
    onInit: function(res) {
      if (res) {
        console.log('GrovePi Version :: ' + board.version())

        var dhtSensor = new DHTDigitalSensor(2)
        console.log('DHT (start watch)')
        dhtSensor.on('change', function(res) {
          console.log('DHT onChange value=' + res)
        })
        dhtSensor.watch()
      }
    }
  })

board.init()



/*
module.exports = function (){
    return new Promise( (resolve, reject) => {
    /*PythonShell.run('lib/GrovePi/Software/Python/grove_dht_pro.py', function (err, results) {
      if (err) reject( err )
      resolve( results )
      

    })
}
*/



