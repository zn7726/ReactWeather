var names = ['A', 'B', 'C'];

names.forEach(function (name) {
  console.log('forEach', name);
});

names.forEach((name) => console.log('arrow', name));

var returnMe = (name) => name + '!';
names.forEach((name) => console.log(returnMe(name)));

console.log("\n");

var person = {
  name: 'abc',
  greet: function(){
    names.forEach((name) => // this works
    // names.forEach(function (name) {  <== this does NOT work

    // anonymous function has its own 'this', while arrow function uses it's parents 'this'

      console.log(this.name + ' says hi to ' + name)
    );
  },
  age: 30
}

person.greet();

function add(a,b){
  return a+b;
}

//add statement
var addStatement = (a, b) => {return a+b};

//add operation
var addOperation = (a, b) => a+b;

console.log(addStatement(3,5));
console.log(addOperation(3,4));
