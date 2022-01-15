// const h1 = document.getElementById("demo") ;
// h1.innerHTML="HI ! I am Akbor";

// console.log(document.getElementsByTagName("p"))
// // function myH1(){
// //     const h1 = document.getElementById("demo") ;
// // h1.innerHTML="HI ! I am Akbor";

    
// // }




// const h2 =document.querySelector("#h2");
// h2.innerHTML =Date()

// const myimg = document.querySelector("#img");
// myimg.src= "pic5.jpg"


//  function MoveFunc( ) {
//      const animationDiv = document.querySelector("#animation");
//      let position = 0;

//      const Interval =setInterval(frame,5);
      
//      function frame(){
//        if(position<350){
//         position++;
//         animationDiv.style.top=position + "px";
//         animationDiv.style.left=position + "px";
//        }else{
//             clearInterval(Interval);
//        }
//      }
//  }


//  MoveFunc();



//  function MoveAnimate (){
//      const animate = document.querySelector("#animation");
//      let pos = 0;

//      const Interval = setInterval(frame,5);

//      function frame(){
//        if(pos <350){
//         pos++;
//         animate.style.top= pos + "px";
//         animate.style.left= pos + "px";
//        }else{
//            clearInterval(Interval);
//        }
//      }
//  }



// function FormalFunc() {
//     console.log("hello world");
// }


// function CasualFunc(){
//     console.log("What's Up");
// }


// function Greet (type){
//     if(type==="Formal"){
//         FormalFunc();
//     }else if(type==="Casual"){
//         CasualFunc()
//     }
// }

// Greet("Casual",FormalFunc,CasualFunc);


// const arr1 = [1,2,3,4];
// const arr2 = [];

// for(let i=0; i<arr1.length;i++){
//     arr2.push(arr1[i] *3);
// }

// console.log(arr2);


// const arr3 = arr1.map((item)=>{
//     return item*4
// })

//  console.log(arr3);


// Without higher order function 

// const BirthYear= [1998,1997,2000,2012,1995];
// const Age = [];

// for(let i=0; i<BirthYear.length;i++){
//    let age  = 2020 - BirthYear[i];
//    Age.push(age);
// }
// console.log(Age);




// with higher order function 


// // 
// const BirthYear= [1998,1997,2000,2012,1995];

// let age = BirthYear.map((item)=>{
//      let Age = 2020 - item;
//      return Age
// })

// console.log(age);



// Our Own Higher Order Function 


// const Language = ["javascript", "Php", "java", "Ruby", "Python"];

// function MapForEach(arr,fn){
//     let newArr = [];
//     for(let i=0;i<arr.length;i++){
//         newArr.push(fn(arr[i]));
//     }
//     return newArr;
// }

// const newlen = MapForEach(Language,function(item){
//     return item.length;
// })

// console.log(newlen);




