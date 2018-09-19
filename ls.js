
const fs = require('fs');
module.exports =(done) =>{
  fs.readdir('./', 'utf8', (err,data )=>{
    if(err){
      throw err
    }
    else{
      done(data.join('\n'))
      //process.stdout.write("prompt > ");
    }
  })
}
