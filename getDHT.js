const PythonShell = require('python-shell');
const pyshell = new PythonShell('./resources/GrovePi/Software/Python/grove_dht_pro.py');
 
pyshell.on('message', function (message) {
    // received a message sent from the Python script (a simple "print" statement) 
    console.log(message);
});
        
// end the input stream and allow the process to exit 
pyshell.end(function (err) {
    if (err) throw err;
    console.log('DHT closed.');
 });
