function myFunc (){
    console.log("i am EventLoop!")
}

   function mySet(){
    setTimeout(()=>{
        console.log("I am event Looop 2 !")
      },5000)
   } 

function MyFunc2 (){
    console.log("I am event Loop 3 !")
}

// myFunc();
// mySet();
// MyFunc2();
// console.log("I am Akbor !")


const name = "Ladiya";
const age= 23;
const city = "san farncisko";

function getPersonInfo (){
    const name = "Subah";
    const age= 34;
    function secondFunc(){
      
      function thirdFunc(){
         
        return `${name} is ${age} years old and lives in ${city}`
          
      }
      return thirdFunc()
    }
    return secondFunc();
}

console.log(getPersonInfo());






