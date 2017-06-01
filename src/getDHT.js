var PythonShell = require('python-shell');
//var pyshell = new PythonShell('lib/GrovePi/Software/Python/grove_dht_pro.py');
var pyshell = new PythonShell('test.py');

export default function pGet(){
  console.log( "exports")
  return new Promise( function(resolve, reject){
    pyshell.on('message', function (message) {
      // received a message sent from the Python script (a simple "print" statement) 
      console.log(message)
      resolve(message)
    })

    // end the input stream and allow the process to exit 
    pyshell.end(function (err) {
      if (err) reject(err)
    })
  })
}



