// // // let string = prompt("tell me ur name!");

// // // let regExp = /Y/i;

// // // console.log(string.match(regExp));

// // // const letter = "AaAbBbCcC";

// // // const regExp = /ab/gi;
// // // // const regExp = new RegExp("b", "gi");

// // // console.log(letter.match(regExp));

// // const letter = "12a35s35d640f78g92sa30x2z";

// // const regExp = /\w/g;

// // console.log(letter.match(regExp));
// // console.log(letter.replace(regExp, "*"));

// const phoneInput = document.querySelector(".phoneInput");
// const phoneCheck = document.querySelector(".phoneCheck");
// const phoneResult = document.querySelector(".phoneResult");

// const phoneRegExp = /^\+996 \d{3} \d{2}-\d{2}-\d{2}$/;

// phoneCheck.addEventListener("click", () => {
//   if (phoneRegExp.test(phoneInput.value)) {
//     phoneResult.innerText = "ok";
//     phoneResult.style.color = "green";
//   } else {
//     phoneResult.innerText = "not ok";
//     phoneResult.style.color = "red";
//   }
// });

// let num = 0;

// const count = () => {
//   num++;
//   console.log(num);
//   if (num < 500) {
//     count();
//   }
// };
// count();

const people = {
  John: {
    age: 25,
    parents: {
      Kelly: {
        age: 50,
        parents: {
          Logan: {
            age: 75,
            parents: {
              Logan: {
                age: 75,
                parents: {
                  Logan: {
                    age: 75,
                    parents: {
                      Logan: {
                        age: 75,
                        parents: {
                          Logan: {
                            age: 75,
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
      Tony: {
        age: 55,
      },
    },
  },
  Sam: {
    age: 15,
    parents: {
      Jean: {
        age: 40,
      },
    },
  },
};

const parentsList = (obj) => {
  if (obj.parents) {
    for (let key in obj.parents) {
      console.log(key);
      parentsList(obj.parents[key]);
    }
  } else {
    console.log("no such key");
  }
};

for (let key in people) {
  parentsList(people[key]);
}
