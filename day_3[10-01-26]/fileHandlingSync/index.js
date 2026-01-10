const fs = require("fs");
const path = require("path");

const filepath = path.join(__dirname, "/database/data.txt");
const data = fs.readFileSync(filepath, "utf-8");
console.log(data);

const filepath2 = path.join(__dirname, "/database/user-data.json");
const dataJson = fs.readFileSync(filepath2, "utf-8");
console.log(JSON.parse(dataJson));

// Write The File in SYnchronous File
