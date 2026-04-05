h1 = document.querySelector("h1");

// setTimeout(()=>{
//     h1.style.color = "red";
// },1000)

// setTimeout(()=>{
//     h1.style.color = "yellow";
// },2000)

// -----------------------Callback Hell problem------------------------------
// function changecolor(color, delay, nextColorChange) {
//   setTimeout(() => {
//     h1.style.color = color;
//     if (nextColorChange) nextColorChange();
//   }, delay);
// }

// changecolor("red", 1000, () => {
//   changecolor("orange", 1000, () => {
//     changecolor("Pink", 1000, () => {
//       changecolor("Purple", 1000, () => {
//         changecolor("blue", 1000);
//       });
//     });
//   });
// });

// function savetoDb(data) {
//   let internetSpeed = Math.floor(Math.random() * 10) + 1;

//   if (internetSpeed > 4) {
//     console.log("your data was saved");
//   } else {
//     console.log("internet speed is low. Data is not saved");
//   }
// }

// savetoDb("Coder Master");

// function savetoDb(data, success, failure) {
//   let internetSpeed = Math.floor(Math.random() * 10) + 1;

//   if (internetSpeed > 4) {
//     success();
//   } else {
//     failure();
//   }
// }

// savetoDb(
//   "Coder Master",
//   () => {
//     console.log("success : your data was saved");
//     savetoDb(
//       "hello world",
//       () => {
//         console.log("success2 : your data was saved");
//         savetoDb(
//           "Yashpal bhati",
//           () => {
//             console.log("success3 : your data was saved");
//           },
//           () => {
//             console.log("failure3: internet speed is low, data is not saved");
//           },
//         );
//       },
//       () => {
//         console.log("failure2 : internet speed is low.");
//       },
//     );
//   },
//   () => {
//     console.log("failure : internet speed is low. Data is not saved");
//   },
// );

// function savetoDb(data) {
//   return new Promise((resolve, reject) => {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;

//     if (internetSpeed > 4) {
//       resolve("success: data was saved");
//     } else {
//       reject("failure : weak connection");
//     }
//   });
// }

// let request = savetoDb("Coder Master"); // request = promise object
// request
//   .then(() => {
//     console.log("promise was resolved");
//     console.log(request);
//   })
//   .catch(() => {
//     console.log("promise was rejected");
//   });

// let request = savetoDb("Coder Master"); // request = promise object
// request
//   .then(() => {
//     console.log("data1 saved. promise was resolved");
//     savetoDb("codeing kro").then(() => {
//       console.log("data2 saved");
//     });
//   })
//   .catch(() => {
//     console.log("promise was rejected");
//   });

// let request = savetoDb("Coder Master"); // request = promise object
// request
//   .then((res) => {
//     console.log("data1 saved. promise was resolved");
//     console.log("result of promise ", res);
//     return savetoDb("codeing kro"); // yaha par jo result aayega uss par next then apply ho jayega
//   })
//   .then(() => {
//     console.log("data2 saved");
//     console.log("result of promise ", res);
//   })
//   .catch((err) => {
//     console.log("promise was rejected");
//     console.log("result of promise ", err);
//   });

// async function greet() {
//   throw "weak connection";
//   // return "Hello world";
// }

// greet()
//   .then((res) => {
//     console.log("promise was resolved");
//     console.log("result was :", res);
//   })
//   .catch((err) => {
//     console.log("promise was rejected with err :", err);
//   });

// function getNum() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let num = Math.floor(Math.random() * 10) + 1;
//       console.log(num);
//       resolve();
//     }, 1000);
//   });
// }

// async function demo() {
//   await getNum();
//   await getNum();
//   await getNum();
//   await getNum();
//   getNum();
// }

function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let num = Math.floor(Math.random() * 5) + 1;
      if (num > 3) {
        reject("promise rejected");
      }

      h1.style.color = color;
      console.log(`color changed to ${color}!`);
      resolve("color changed");
    }, delay);
  });
}
async function demo() {
  try {
    await changeColor("red", 1000);
    await changeColor("orange", 1000);
    await changeColor("green", 1000);
    await changeColor("blue", 1000);
  } catch (err) {
    console.log("error caught");
  }
  let num = 4;
  console.log("num =", 3);
  console.log("nnew number :", num + 3);
}
