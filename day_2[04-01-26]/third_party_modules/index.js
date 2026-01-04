const lodash = require("lodash");

const arr = [1, 2, 3, 4, 5, 6];

// console.log(lodash.reverse(arr));

// Deep Copy vs Shallow Copy

let obj = {
  a: 2,
  b: 4,
  c: "qwertyui",
  d: {
    e: 1,
    f: {
      h: 32,
      i: 12,
    },
    g: 45,
  },
};

// Shallow Copy (reference)
// let obj1 = obj;
// console.log(obj, obj1);

// obj1.b = "Meera";
// console.log(obj, obj1);

// ............................................................

// let obj2 = Object.assign({}, obj);
// console.log("obj:", obj, "obj2: ", obj2);

// obj2.a = "new a";
// // console.log("obj:", obj, "obj2: ", obj2);

// obj2.d.f.h = "new H";

// console.log("obj:", obj, "obj2: ", obj2);
// .............................................................

// let obj3 = { ...obj };

// console.log("obj:", obj, "obj3: ", obj3);
// obj3.c = 90;
// obj3.d.f.i = false;

// console.log("obj:", obj, "obj3: ", obj3);

// .............................................................

// DEEP COPY
// let obj4 = JSON.stringify(obj);
// obj4 = JSON.parse(obj4);

// console.log("obj:", obj, "obj4: ", obj4);
// obj4.b = "Hello";
// obj4.d.f.h = "Bye...";
// console.log("obj:", obj, "obj4: ", obj4);

// Deep Copy
let obj5 = lodash.cloneDeep(obj);
console.log(obj === obj5);

// ....................................................................................................
