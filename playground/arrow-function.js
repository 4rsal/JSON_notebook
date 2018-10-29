//Statement Syntax of arrow Function
var square_StatementSyntax = (a)=>{
  return a*a;
}

//Expression Syntax of arrow function ->clear and 1 line
var square_ExpressionSyntax = a=>a*a;
//if more than 1 argument, paranteses are required: (a,b)=>

console.log(square_ExpressionSyntax(10));

var user = {
  name : "Arsalan",
  age: 27,
  occupation: "Junior Node Developer",
  sayHi: ()=>{
    console.log(arguments);
    console.log(`Hi I'm ${this.name}`)
  },

  //ES6 alternative function syntax. which works for this case
  sayHiAlt(){
    console.log(arguments); //the passed argument will be used. //if any
    console.log(`Hi I'm ${this.name}`);
  }
}


user.sayHi('Besh');
user.sayHiAlt('Besh')
