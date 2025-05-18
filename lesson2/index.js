const fs = require('fs');

// fs.writeFile('demo1.txt', "My name is mohona", (err) => {
//  if(err){
//     console.log(error)
//  }else{
//     console.log("Successfull");
//  }
// })

// fs.appendFile('demo1.txt', "i am a software developer", (err) => {
//  if(err){
//     console.log(error)
//  }else{
//     console.log("Successfull");
//  }
// });

// fs.readFile('demo1.txt', 'utf-8', (err, data) => {
//  if(err){
//     console.log(err);
//  }else{
//     console.log(data);
//  }
// });


// fs.rename('demo1.txt', 'demos.txt', (err) => {
//  if(err){
//     console.log(err);
//  }else{
//     console.log("Successful");
//  }
// });

// fs.unlink('demos.txt', (err) => {
//  if(err){
//     console.log(err);
//  }else{
//     console.log("successful");
//  }
// });

fs.exists('demos.txt', (result) => {
 if(result){
    console.log("found");
 }else{
    console.log("not found");
 }
});





