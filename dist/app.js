"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.app = void 0;
var http_1 = __importDefault(require("http"));
var https_1 = __importDefault(require("https"));
var server;
var protocol = "http";
server = http_1["default"].createServer(function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Request-Method", "*");
    res.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET");
    res.setHeader("Access-Control-Allow-Headers", "*");
});
if (protocol == "https") {
    server = https_1["default"].createServer();
}
exports.app = server;
//# sourceMappingURL=app.js.map