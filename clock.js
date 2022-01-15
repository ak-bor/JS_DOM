 
 
 
//  function clock(){
     
//  var dateTime = new Date();
//  const hr = dateTime.getHours()
//  const min = dateTime.getMinutes();
//  const sc = dateTime.getSeconds();
 
//     const h1 = document.querySelector(".h1");
//     const btn = document.querySelector(".btn");
//     h1.innerHTML = `${hr}:${min}:${sc}`;
//     btn.addEventListener('click',()=>{

//     })
   
//  }
 
 
// setInterval(clock,1000);


var x = 50;

function mainscope(){
   
    var y=56;
    function innerScope(){
        console.log(x+y);
    }
    innerScope()
}

mainscope();

const a= 10;
let promise = new Promise((resolve,reject)=>{
    if(a>18){
        resolve("You can access ")
    }else{
        reject("YOu are child")
    }
})
const newPromise = promise.then((value)=>{
    console.log(value)
   
})
.catch((err)=>{
    console.log(err)
})
console.log(newPromise)