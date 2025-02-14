const fs = require("fs");
const path = require("path");
const HomeModel = require("../models/HomeModel");
let getApiData = require("../data/homes.json");
const rootDir = require("../utils/pathUtil");
const { json } = require("stream/consumers");
exports.getHome = (req, res, next) => {
  res.render("home", { pageTitle: "Home Page" });
};

exports.getApiJson = (req, res, next) => {
  return res.json(getApiData);
};

exports.postApiJson = (req, res, next) => {
  console.log(req.body);
  //old getApiData remain as it is and push the new data
  getApiData.push(req.body);
  fs.writeFile(
    path.join(rootDir, "data", "homes.json"),
    JSON.stringify(getApiData, null, 2),
    (error, data) => {
      console.log("File Writing Concluded", error);
      return res.json(getApiData);
    }
  );
};
exports.getContact = (req, res, next) => {
  res.render("contact", { pageTitle: "Add Home Page" });
};

exports.postContact = (req, res, next) => {
  console.log(req.body);
  const { name, email, phone } = req.body;
  const home = new HomeModel(name, email, phone);
  home.save();
  res.render("homeAdded", {
    pageTitle: "Home Added Successfully",
    currentPage: "homeAdded",
  });
};

exports.getHomes = (req, res, next) => {
  HomeModel.fetchAll((registeredHomes) =>
    res.render("home", {
      registeredHomes: registeredHomes,
      pageTitle: "Homes List",
      currentPage: "Home",
    })
  );
};
