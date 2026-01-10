const fs = require("fs");
const path = require("path");

// Read File ######################################################################

// Read a text file
// fs.readFile("data.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log("Some error occurs :", err);
//   } else {
//     console.log("data : ", data);
//   }
// });

// Using path module to get the path of the file
// const filepath = path.join(__dirname, "/data.txt");

// File inside database folder
// const filepath = path.join(__dirname, "/database/userData.txt");

// fs.readFile(filepath, "utf-8", (err, data) => {
//   if (err) {
//     console.log("Some error occurs :", err);
//   } else {
//     console.log("data : ", data);
//   }
// });
// .................................................................................

// Reading a JSON File
// const filepath1 = path.join(__dirname, "/database/user-data.json");

// fs.readFile(filepath1, "utf-8", (err, data) => {
//   if (err) {
//     console.log("Some error occurs :", err);
//   } else {
//     // console.log("data : ", data, typeof(data));

//     newData = JSON.parse(data);
//     console.log("data : ", newData, typeof newData);
//   }
// });

// .....................................................................
// Write File #############################################################################

// Writing in a text file
// fs.writeFile("data.txt", "Bye... I am going..", (err) => {
//   if (err) {
//     console.log("Some error:", err);
//   } else {
//     console.log("Written Successful");
//   }
// });

// ......................................................
// Writing a JSON file

const filepath2 = path.join(__dirname, "/database/employee-data.json");

const val = [
  {
    empName: "Sam",
    empAge: 23,
    empSalary: 50000,
  },
  {
    empName: "Danny",
    empAge: 25,
    empSalary: 70000,
  },
];
fs.writeFile(filepath2, JSON.stringify(val), (err) => {
  if (err) {
    console.log("error: ", err);
  } else {
    console.log("Written Successfully");
  }
});
