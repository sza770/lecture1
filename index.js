import { writeFileSync, readFileSync } from 'node:fs';
import { exit } from 'node:process';

const me = {
    firstName : "shneor",
    lastName: "amramy",
    age: 34
}

function fileSync () {
    writeFileSync("./me.json" , JSON.stringify(me))
    const data = readFile("./me.json")
    console.log(data)
}


function fileAsync () {
    writeFile("./me.json" , JSON.stringify(me), (err)=> {
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


const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Who are you?', name => {
    console.log(`Hey there ${name}!`);
    readline.close();
  });