const fs = require('fs');
const { argv } = require('process');
let gender = "";
//Read Keylogger File
fs.readFile(`./${process.argv[2]}`, 'utf-8', (err,data) => {
    if (err) {
        console.error(err);
        return;
    }
    getGender(data);
    fixarray(data.split("\r\n"));
});

function getGender(data){
    var gend = data.split("\"");
    gend = gend[1].split(":");
    gender = gend[1].trim();
}

// Delete First Lines
function fixarray(data) {
    for (let i=0; i<8; i++) {
        data.shift();
    }
    datastr(data);
}

// Create Data Structure
function datastr(data) {
    let arr=[];
    data.forEach(element => {
        if(element){
        let tmp = element.split(',');
        arr.push({
            key:tmp[0],
            date:tmp[1],
            time:tmp[2],
            press:tmp[3].substring(1,3)
        })
    }
    });
    let final={
        table:arr,
        gender:gender
    };
    let test = JSON.stringify(final, null, 4);
    fs.writeFile('./data/output.json', test, 'utf-8', err => {
        if (err) {
            console.error(err);
        }
    });
}