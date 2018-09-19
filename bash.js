//Output a prompt
//const pwd = require('./pwd');
//const ls = require('./ls');
const prompt = data => {
  console.log(data);
  process.stdout.write("> ");
}

process.stdout.write('prompt > ');

//The stdin 'data' event fires after a user types in a line
process.stdin.on('data', (data)=>{
  const entry = data.toString().trim();
  const [cmd,arg] = entry.split(' ')
  //remove the newline
  //process.stdout.write('You typed: ' + cmd);
  //process.stdout.write('\nprompt > ');
  switch(cmd){
    case "pwd":
     prompt(require('./pwd')(prompt));
      break;
    case "ls":
      require('./ls')(prompt);
      break;
    case "cat":
      require('./cat')(arg, prompt);
      break;
    default:
      process.stdout.write('not found');
  }

});

