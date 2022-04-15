const os = require('os');
const process = require('process');

module.exports = function(req, res) {

    const obj = {
        arch: os.arch(),
    }

    res.json(obj)
};