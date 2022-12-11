import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { writeFile, writeFileSync, readFile ,readFileSync } from 'node:fs';
import { exit } from 'node:process';


const round1 = {
  id: "", 
  letter : "",  
  gimatria: "",
  wordOfTwo: ""
}

let fileData;
readFile("./me.json", (err, data) => {
  if (err) {
    console.error(err);
    exit(2);
  }
  if (!data.game) {
    round1.id = 1;
  } else {
    fileData = data
    round1.id = data.game.id[-1] + 1;
  }

})

function reverseString(str) {
  return str.split("").reverse().join("")
}


const rl = readline.createInterface({ input, output });

// const test = await rl.question(reverseString(': הכנס אות בעברית '));

const letter_1 = await rl.question('enter your letter here ');
round1.letter = letter_1;
console.log(`your letter is: ${letter_1}`);



let answer_2 ="" ;
while (isNaN(answer_2)) {
  let gimatria_2 = await rl.question('what is the gimatria of the letter?');
  answer_2 = gimatria_2
}
round1.gimatria = answer_2;
console.log(`your answer is: ${answer_2}`);



let answer_3 = "";
while (answer_3.length < 2 || answer_3[0] !== letter_1) {
  let wordOfTwo_3 = await rl.question('enter a two letter word that starts with your letter: ');
  answer_3 = wordOfTwo_3  
}
round1.wordOfTwo = answer_3;
console.log(`your answer is: ${answer_3}`);


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