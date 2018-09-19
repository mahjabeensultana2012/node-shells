const fs = require('fs');
module.exports =(fileName, done) =>{
  fs.readFile(fileName, 'utf8', (err,data )=>{
    if(err){
      throw err
    }
    else{
      done(data)
      //process.stdout.write("prompt > ");
    }
  })
}
