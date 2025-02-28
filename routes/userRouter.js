const path = require("path");
const express = require("express");
//local module
const homeController = require("../controllers/homeController");

const userRouter = express.Router();

userRouter.get("/", homeController.getHome);
userRouter.get("/", homeController.getHomes);
userRouter.get("/api/getdata", homeController.getApiJson);
userRouter.post("/api/getdata", homeController.postApiJson);
userRouter.get("/add-home", homeController.getContact);
userRouter.post("/add-home", homeController.postContact);
userRouter.get("/home-detail/:id", homeController.getHomeDetail);

module.exports = userRouter;
