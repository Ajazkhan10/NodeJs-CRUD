const fs = require("fs");

function logRequest(fileName) {
  return (req, res, next) => {
    fs.appendFile(
      fileName,
      `\nRequest Method: ${req.method} Ip:${req.ip} Request URL: ${
        req.url
      } Time: ${new Date().toISOString()}\n`,
      (err) => {
        if (err) console.log(err);
        next();
      }
    );
  };
}


module.exports = logRequest;