// console.log('notes.js starts...')


//module is a awesome thing! kinda similar to public/private classes in java
//try console.log(module) to see it's elements

module.exports.khanandeh = 'Haydeh';

// module.exports.addNote = () =>{
//   console.log('addNote()')
//   return 'new note';
// };
const fs = require('fs');

var fetchNote=() => {
  try{
    var notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  }catch (e){
    return [];
  }
}

var saveNote= (notes)=>{
    fs.writeFileSync('notes-data.json',JSON.stringify(notes));
}


var add = (title,body)=>{
  var notes = fetchNote();
  var note = {
    title: title, //or just title
    body: body    //or just body
  }
    // var duplicateNote = notes.filter((note)=> {
    //     return note.title === title;
    //   });
  var duplicateNote = notes.filter((note)=>note.title === title);
  if(duplicateNote.length === 0){
    notes.push(note);
    saveNote(notes);
    return note;
  }
}

var getAll= ()=>{
   return fetchNote();
}

var getNote = (title) => {
  var notes = fetchNote();
  var filteredNotes = notes.filter((note) => note.title === title)
  return filteredNotes[0];
}

var removeNote= (title)=>{
  var notes = fetchNote();
  var filteredNotes = notes.filter( (note) => note.title !== title )
  saveNote(filteredNotes);
  return notes.length !== filteredNotes.length
}

var logNote= (note)=>{
  debugger;
  console.log('----')
  console.log(`title: ${note.title}`)
  console.log(`body: ${note.body}`)
}


//ES6 allows to simply right add, sub, etc... instead of add: add (if names similar)
module.exports = {
  add,
  getAll,
  getNote,
  removeNote,
  logNote
}
