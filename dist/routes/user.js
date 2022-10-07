"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var routes = express_1["default"].Router();
var userController_1 = require("../controller/userController");
var profileController_1 = require("../controller/profileController");
var postController_1 = require("../controller/postController");
var categoryController_1 = require("../controller/categoryController");
routes.get("/", function (req, res) {
    res.send("Hello Prisma");
});
routes.post("/register", userController_1.Register);
routes.post("/login", userController_1.Login);
routes.post("/createprofile", profileController_1.createProfile);
routes.post("/createpost", postController_1.createPost);
routes.post("/addcategory", categoryController_1.addCategory);
// routes.post('/categoriesonposts', categoryOnPost);
exports["default"] = routes;
//# sourceMappingURL=user.js.map