var PythonShell = require('python-shell')

module.exports = function (){
  return new Promise( (resolve, reject) => {
    PythonShell.run('lib/GrovePi/Software/Python/grove_dht_pro.py', function (err, results) {
      if (err) reject( err )
      resolve( results )
    })
  })
}



