


function Dog(name,breed,color) {
    this.name= name;
    this.breed= breed;
    this.color = color;
    
}
Dog.prototype.bark =function (){
    return "woof!"
}



const dog1 = new Dog(
    "jack",
    "labrador",
    "black"
)

const dog2 = new Dog(
    "daisy",
    "jack Russell",
    "white"
)
// console.log( dog1.bark());



const Person = {
   name : "SM Akbor",
   age:23,
//    __proto__
}


const me = {
    __proto__:Person
}
//console.log(me.name)




const MyObj = {
    name : "SM Akbor",
    age :24,
    getName: function (){
        console.log(`${this.name} is ${ this.age} years old`)
    }

}


const MyObj2 =  Object.create(MyObj);
    // __proto__:MyObj
 


// MyObj2.getName()



function* generator(){
    yield "SM Akbor"
    console.log("hi i am gen")
}

const subGen = generator();

console.log(subGen)
console.log(subGen.next())
console.log(subGen.next())