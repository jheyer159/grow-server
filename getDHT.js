const PythonShell = require('python-shell');
const dht = './resources/GrovePi/Software/Python/grove_dht_pro.py'
 
var get = function(){
   PythonShell.run( dht, function (err, results) {
    if (err) throw err;
    // received a message sent from the Python script (a simple "print" statement) 
    console.log(results);
   })
}

module.exports = get
