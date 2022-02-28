const os = require('os');
const process = require('process');

module.exports = function(req, res) {

    const obj = {
        arch: os.arch(),
        cpus: os.cpus(),
        endianness: os.endianness(),
        freemem: os.freemem(),
        getPriority: os.getPriority(),
        homedir: os.homedir(),
        hostname: os.hostname(),
        loadavg: os.loadavg(),
        platform: os.platform(),
        release: os.release(),
        tmpdir: os.tmpdir(),
        totalmem: os.totalmem(),
        type: os.type(),
        uptime: os.uptime(),
        version: os.version(),
        userInfo: os.userInfo(),
        networkInterfaces: os.networkInterfaces(),
        
        arch: process.arch,
        argv: process.argv,
        argv0: process.argv0,
        channel: process.channel,
        // channel: process.channel.ref(),
        // channel: process.channel.unref(),
        // chdir: process.chdir(directory),
        config: process.config,
        connected: process.connected,
        cpuUsage: process.cpuUsage(),
        cwd: process.cwd(),
        debugPort: process.debugPort,
        env: process.env,
        execArgv: process.execArgv,
        execPath: process.execPath,
        exitCode: process.exitCode,
        getegid: process.getegid,
        geteuid: process.geteuid,
        getgid: process.getgid,
        getgroups: process.getgroups,
        getuid: process.getuid,
        hrtime: process.hrtime(),
        memoryUsage: process.memoryUsage(),
        noDeprecation: process.noDeprecation,
        pid: process.pid,
        platform: process.platform,
        ppid: process.ppid,
        title: process.title,
        uptime: process.uptime(),
        version: process.version,
        versions: process.versions,
    }

    res.json(obj)
};