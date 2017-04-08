const PythonShell = require('python-shell');
const dht = './resources/GrovePi/Software/Python/grove_dht_pro.py'
 
PythonShell.run( dht, function (message) {
    if (err) throw err;
    // received a message sent from the Python script (a simple "print" statement) 
    console.log(message);
});
