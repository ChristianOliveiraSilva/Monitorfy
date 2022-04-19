const os = require('os');
const process = require('process');
var psList = require('ps-list'); // verificar se é possivel algo melhor

const obj = {
    arch: os.arch(),
    totalProcesses: 0,
    process: [],
}

module.exports = function(req, res) {

    psList().then(data => {
        obj.process = data
        obj.totalProcesses = data.length
        res.json(obj)
    });    
};