import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });



const letter_1 = await rl.question('what is your name? ');
console.log(`hello ${letter_1}`)