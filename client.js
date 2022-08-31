const net = require("net");
const { host, port } = require("./conststant");
const connect = function() {
  const conn = net.createConnection({
    host,
    port
  });
  conn.on("connect", () => {
    console.log("GAME ON! ");
  });
  conn.write("Name: HPB");
  conn.on("data", message => {
    console.log("data:", message);
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = { connect };
