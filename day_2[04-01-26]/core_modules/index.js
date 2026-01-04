// OS - CORE MODULE
// const os = require("os");
// console.log(os.version());
// console.log(os.cpus());
// console.log(os.type());

// PATH - CORE MODULE

const path = require("path");
// console.log(
//   path.extname(
//     // "C:UserssarikDesktopdsaFreelancing\nodejsB1_Nodeday_1[03-01-26]index.js"
//     "C:UserssarikDesktopdsaFreelancing\nodejsB1_Nodeday_1[03-01-26]Readme.md"
//   )
// );

// let dirName = path.dirname(
//   "C:UserssarikDesktopdsaFreelancing\nodejsB1_Nodeday_1[03-01-26]index.js"
// );
// console.log(dirName);

console.log(
  path.isAbsolute(
    // "C:UserssarikDesktopdsaFreelancing\nodejsB1_Nodeday_1[03-01-26]index.js"
    "C:UserssarikDesktopdsaFreelancing\nodejsB1_Nodeday_1[03-01-26]Readme.md"
  )
);
