const os = require('os');

module.exports = function(req, res) {
    console.log(os.arch())
    console.log(os.cpus())
    console.log(os.endianness())
    console.log(os.freemem())
    console.log(os.getPriority())
    console.log(os.homedir())
    console.log(os.hostname())
    console.log(os.loadavg())
    console.log(os.platform())
    console.log(os.release())
    console.log(os.tmpdir())
    console.log(os.totalmem())
    console.log(os.type())
    console.log(os.uptime())
    console.log(os.version())
    console.log(os.userInfo())
    console.log(os.networkInterfaces())

    res.send('See console')
};