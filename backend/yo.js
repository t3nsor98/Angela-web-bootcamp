const fs = require("fs");

// fs.writeFile("message.txt", "Hello world, This is node.js", (err) => {
//     if(err) throw err;
//     console.log("The file has been saved!");
// })

fs.readFile("./message.txt", (err, data) => {
    if(err) throw err;
    console.log(data.toString());
})