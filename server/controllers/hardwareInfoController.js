const os = require('os-utils');
const { io } = require("../../config");

const hardwareInfoController = {};

hardwareInfoController.getCPUInfo = async () => {
  setInterval(() => {
    os.cpuUsage((v) => {
      const stats = {
        timestamp: new Date().toISOString().split('T').join(' - ').slice(0, -1),
        cpuUsage: v * 100,
        cpuCount: os.cpuCount(),
        totalMem: os.totalmem(),
        freeMem: os.freemem(),
        memPercent: (1 - (os.freemem() / os.totalmem())) * 100
      };
      io.emit('send-hardware-info', stats);
    });
  }, 2000);
};
hardwareInfoController.getMemInfo = async () => {
};

module.exports = hardwareInfoController;
