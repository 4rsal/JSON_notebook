//JSON obj -> String  #JSON.stringify(obj)
//String -> JSON obj  #JSON.parse(string)
const fs = require('fs')

var originalNote = {
  title: 'some title',
  body: 'some body'
};
var originalNoteString = JSON.stringify(originalNote)
fs.writeFileSync('notes.json',originalNoteString);

var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);



// var obj = {
//   name: 'Arsalan'
// };
// console.log(obj)
// console.log(JSON.stringify(obj))
//
// var personString = '{"name":"Arsalan", "age":"27", "Status":"Married"}'
// console.log(personString);
// var person = JSON.parse(personString);
// console.log(person.Status);
