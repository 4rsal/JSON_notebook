// console.log('app.js starts...')
//if node_modules was lost/ or I got a file from somewhere, just> npm install. this will install all the required packages. SUPER handy! :D
//the node_modules must be ignored in git. .gitignore...

const fs = require('fs');  //since we are no longer need to change th fs, we use const. instead of var.
const _ = require('lodash');  //_ is a common const name for lodash module. lodash is very common apparently in node community
const yargs = require('yargs');

const notes = require('./notes.js')

const titleOption = {
  describe: "Title of note",
  demand: "true",
  alias: "t"
};

const bodyOptions = {
  describe: 'Body of the note',
  demand: true,
  alias: 'b'
};


//console.log(process)
//yargs.command().command().command().help().argv
var argv = yargs
          .command('add', 'adding a new note to the json file', {
          title: titleOption,
          body: bodyOptions
          })
          .command('remove', 'Removing the requested title from JSON file',{
            title: titleOption
          })
          .command('list', 'Listing all the notes in the JSON file')
          .command('read', 'Reading the requested note from the JSON file',{
            title: titleOption
          })
          .help()
          .argv
var command = argv._[0]; //process.argv[2] OR argv._[0]

if(command === 'add'){
  var note = notes.add(argv.title, argv.body);
  if(note){
    console.log('new note(via title) created.')
    notes.logNote(note);
  }
  else
    console.log('title exists.');

}else if (command === 'list') {
  var allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} note(s)`);
  allNotes.forEach((note)=>notes.logNote(note));

}else if(command === 'read'){
  var note = notes.getNote(argv.title);
  if(note){
    console.log('The note(via title) found.')
    notes.logNote(note);
  }else{
      console.log('NOT FOUND!')
  }

}else if(command === 'remove'){
  var removed = notes.removeNote(argv.title);
  var message = removed ?'Removed':"Not Removed"
  console.log(message);

}else{
  console.log("Command not recognized.");
}

// var commands = []
// for(var i = 2; i < process.argv.length; i++){
//   commands.push(process.argv[i]);
// }
// for(var i = 0; i < commands.length; i++){
//   console.log(commands[i]);
// }
