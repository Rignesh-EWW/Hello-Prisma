import http from "http";
import https from "https";

var server: any;

let protocol = "http";

server = http.createServer(function (req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Request-Method", "*");
  res.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET");
  res.setHeader("Access-Control-Allow-Headers", "*");
});

if (protocol == "https") {
  server = https.createServer();
}

export const app = server;
