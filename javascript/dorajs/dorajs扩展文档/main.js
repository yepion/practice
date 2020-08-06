const express = require("express");
const path = require("path");
const net = require('net');
const { isSubscribed } = require("./assets/common.js")
if (typeof $dora == 'undefined') {
  process.exit(-1)
}
isSubscribed();
console.info('恭喜，你的插件运行成功!')

async function portInUsed(port) {
  return new Promise((resolve, reject) => {
    let server = net.createServer().listen(port);
    server.on('listening', function() {
      server.close();
      resolve(port);
    });
    server.on('error', function(err) {
      if (err.code == 'EADDRINUSE') {
        port++;
        reject(err);
      }
    });
  });
}

const tryUsePort = (port, callback) => {
  portInUsed(port).then((port) => {
    callback(port);
  }).catch((err) => {
    // console.log(port + " ====被占用====：\n");
    port++;
    tryUsePort(port, callback);
  })
}

// 测试
tryUsePort(port = 12000, (newProt) => {
  // console.log(port + " ====端口：" + newProt + "可用====\n");
  let app = express(); //执行express返回封装对象
  app.use(express.static(path.join(__dirname, "docs")));
  app.listen(newProt, function() {
    console.log("服务已开启", newProt)
    $storage.put("port", newProt)
  })
});
