console.log("Hello World");
//alert("Siriporn");

var name = "Siriporn"
let Age = 21;

console.log("My name is " + name);

name = [5,6,7];
name[0] = 10;
name[2] = "Pan";

document.getElementById("content").innerHTML = name;

var users = '{"name":""Pan","name":"Green"}';
var json = JSON.parse(users);
console.log(json);

emp = { name: "mark", name: "f", name: "gn"};
console.log(emp);
console.log(emp.name[2]);

if(name != 5){
    console.log("True");
}else{
    console.log("False, name is 5");
}

for(i =1; i<5 ; i++){
    console.log(i);
}

console.log(Add(5,3));
function Add(A,B) {
    c = A +B;
    return c;
}