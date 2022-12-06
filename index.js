import { writeFile, readFile } from 'node:fs';
import { exit } from 'node:process';

const me = {
    firstName : "shneor",
    lastName: "amramy",
    age: 34
}
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
    
