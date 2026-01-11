const { Jimp } = require("jimp");
const fs = require("fs");

async function compressAndConvert() {
  const img = await Jimp.read("image.png");
  await img.resize({ w: 256, h: 256 });
  await img.greyscale();

  const bufferData = await img.getBuffer("image/png");
  return bufferData;
}

// let imgComp = compressAndConvert();

// imgComp
//   .then((data) => {
//     data = data.toString("base64");
//     fs.writeFileSync("imag.txt", data, "utf-8");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

let newImg = fs.readFileSync("imag.txt", "utf-8");
// console.log(newImg);
let newData = Buffer.from(newImg, "base64");
fs.writeFileSync("compressedImg.png", newData);
