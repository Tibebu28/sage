let bulb = "off";
function insertHTML () {
    document.getElementById("chengMe").style.fontsize = ""
    document.getElementById("chengMe").style.color = ""
    
}

function turnOn(){
    document.getElementById("bulb")
}
 //    object
const person = {
    firstName: "Tibebu",
    LastName: "Hailu",
    age: 19,
    height: 1.6,
    address: {
        country: "Ethiopia",
        city: "A.A",
        subCity: "YEKA",
        woreda: 3,
    },
    job: "student",
    Array: [1,3,5],
    fullName: function (){
        return this.firstName + "" + this.LastName
    }
}  
// array of object

let array = [
    {country: "Ethiopia", Capital: "A.A"},
    {country: "USA", Capital: "DC"},
    {country: "Egypt", Capital: "Charo"},
]
    
console.log("country :" + person.address.country)
console.log("fullName :" + person.fullName())
console.log("array :" + person.Array[2])
// array of object
console.log("array of objects :"+ " " +array[0].Capital)
// days

const today = new Date();
const someday = new Date(2025,7,28);
// someday.setFullYear(2100,0,14); // Jan 14, 2100

let text;
if(someday >today){
    text="Today is after July 28, 2025.";
}
else{
    text="Today is before July 28,2025.";
}
console.log(text);
// something

let value = 3;
(4>5)?value =true:value= false

// console.log("Ternary: ", value??"the value of value is undefine")