// Core Modules
const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/pathUtil");
const db = require("../utils/dbConfig");
module.exports = class HomeModel {
  constructor(title, img_url, price) {
    this.title = title;
    this.img_url = img_url;
    this.price = price;
  }

  // insert to db mysql
  save() {
    return db.execute(
      "INSERT INTO `products` (`title`, `price`, `img_url`) VALUES (?, ?, ?)",
      [this.title,this.price, this.img_url]
    );
  }

  // save() {
  //   HomeModel.fetchAll((registeredHomes) => {
  //     registeredHomes.push(this);
  //     const homeDataPath = path.join(rootDir, "data", "homes.json");
  //     fs.writeFile(homeDataPath, JSON.stringify(registeredHomes), (error) => {
  //       console.log("File Writing Concluded", error);
  //     });
  //   });
  // }
  // static fetchAll(callback) {
  //   const homeDataPath = path.join(rootDir, "data", "homes.json");
  //   fs.readFile(homeDataPath, (err, data) => {
  //     callback(!err ? JSON.parse(data) : []);
  //   });
  // }

  // from db
  static fetchAll() {
    return db.execute("SELECT * FROM `products`");
  }
};
