import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { writeFile, writeFileSync, readFile ,readFileSync } from 'node:fs';
import { exit } from 'node:process';


function reverseString(str) {
  let needToReverse = true;
  if (needToReverse) {
  return str.split("").reverse().join("");
  } else {
    return str;
  }
}

const rl = readline.createInterface({ input, output });


const round1 = {
  name: "",
  age: "פ",
  userName: "",
  id: "", 
  letter : "",  
  gimatria: "פ",
  wordOfTwo: ""
}

// let fileData;

// let data1 = readFileSync("./me.json")


// readFile("./me.json", (err, data) => {
//   if (err) {
//     console.error(err);
//     exit(2);
//   }
// })

// if 




const name_1 = await rl.question(reverseString('   מה שמך?    '));
round1.name = name_1;
console.log(reverseString(`שלום ${name_1}`) )



while (isNaN(round1.age)) {
  let gimatria_2 = await rl.question(reverseString('    בן כמה אתה?   '));
  round1.age = gimatria_2
  if (isNaN(round1.age)){
    console.log(reverseString("הכנס מספר בלבד בבקשה.."))
  } else {
    round1.userName = round1.name + round1.age;
    console.log(reverseString(`שם המשתמש שלך הוא:   ${round1.userName}`) );
  }
}

const letter = await rl.question(reverseString('   איזה אות אתה בוחר?   '));
round1.letter = letter
console.log(reverseString(`בחרת ${round1.letter}`))



while (isNaN(round1.gimatria)) {
  let gimatria_2 = await rl.question(reverseString('   מה הגימטריא של האות?   '));
  round1.gimatria = gimatria_2;
  if (isNaN(round1.gimatria)){
    console.log(reverseString("הכנס מספר בלבד בבקשה.."))
  } else {
    console.log(round1.gimatria, reverseString(`בחרת ` ))
  }
}


while (round1.wordOfTwo.length < 2 || round1.wordOfTwo[0] !== round1.letter) {
  let wordOfTwo_3 = await rl.question(reverseString('   הכנס מילה בת שתי אותיות המתחילה באות שבחרת:    '));

  round1.wordOfTwo = wordOfTwo_3  
}
console.log(reverseString(`התשובה שלך:  ${wordOfTwo_3}`));


rl.close();

fileData.game.push(round1)

function fileAsync () {
    writeFile("./me.json" , fileData , (err)=> {
      if (err) {
        console.log(err)
        exit(1);
      }
      readFile("./me.json", (err, data) => {
        if (err) {
          console.error(err);
          exit(2);
        }
        console.log("%s", data)
        
      })
    })
}

fileAsync()



// const me = {
//     firstName : "shneor",  
//     lastName: "amramy",
//     age: 34
// }


// function fileSync () {
//     writeFileSync("./me.json" , JSON.stringify(me))
//     const data = readFile("./me.json")
//     console.log(data)
// }

// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });
//   readline.question('Who are you?', name => {
//   console.log(`Hey there ${name}!`);
//   readline.close();
// });