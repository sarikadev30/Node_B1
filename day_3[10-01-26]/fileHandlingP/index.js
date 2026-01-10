const fspromise = require("fs/promises");
const path = require("path");

// Read File ##########################################################

// Text File
const filepath = path.join(__dirname, "/database/data.txt");

// fspromise
//   .readFile(filepath, "utf-8")
//   .then((data) => {
//     console.log("data: ", data);
//   })
//   .catch((err) => {
//     console.log("err: ", err);
//   });

// ...................................................
// JSON File

const filepath2 = path.join(__dirname, "/database/user-data.json");

// fspromise
//   .readFile(filepath2, "utf-8")
//   .then((data) => {
//     console.log(JSON.parse(data));
//   })
//   .catch((err) => {
//     console.log("err:", err);
//   });
// ..........................................................................

// Write File #############################################################

// text file
const filePath3 = path.join(__dirname, "/database/db.txt");

// fspromise
//   .writeFile(filePath3, "Hi I am writing using fs Promise api")
//   .then(() => {
//     console.log("Written successfully");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// writing json file
const filePath4 = path.join(__dirname, "/database/emp-data.json");

// let value = {
//   name: "Sunny",
//   age: 67,
// };

// fspromise
//   .writeFile(filePath4, JSON.stringify(value))
//   .then(() => {
//     console.log("Written successfully");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Append data to file #...........................................
// fspromise
//   .appendFile(filePath3, "Added To existing File")
//   .then(() => {
//     console.log("Written successfully");
//   })
//   .catch((err) => {
//     console.log(err);
//   });
