
// var x =34;
// var Name = "SM Akbor";
// function mainScope (){
//     console.log(Name)
    
//     function subFunc (){
//         return `${Name} is ${x}.`
//     }
//     return subFunc()
// }

// console.log(mainScope());


// function foo(a){
//    var b = a *2;

//    function bar (c){
//       console.log(a,b,c);
//    }
//    bar(b*3)
// }

// foo(4)

// console.log("Start");

// Promise.resolve("Promise !")
//       .then(res => console.log(res))
      
//       console.log("End");



// const one = ()=>Promise.resolve("One");

// async function MyFunc (){
//     console.log("In Function");
//     const res = await one();
//     console.log(res);
// }
   
// console.log("Before function ");
// MyFunc();
// console.log("After Function");



// const arr = [ 2,4,5,6,7,9];

// const outPut = arr.map(double);

// function double (x){
//    return x*2
// }
// console.log(outPut);

// const arr3 = [4,5,8,9,2,7];

// const result = arr3.map(triple)
 

// function triple(x){
//     return x*3;
// }
// console.log(result);
//Map can not change main array 



        //filter method in javascript 



        // const arr = [2,3,4,6,8,9,5,7,11,34,67]

        // const outPut = arr.filter(isOdd)

        // function isOdd(x){
        //      return x%2;
         
        // }

        // console.log(outPut);


        // const result = arr.filter(isEven);

        // function isEven(x){
        //     return (x%2===0)
        // }
        // console.log(result);



//         const arr = [2,3,4,6,8,9,5,7,11,34,67];

//         function reduce (arr){
//             let sum = 0;
//             for (let i=0;i<arr.length;i++){
//                 sum=sum +arr[i];
//             }
//             return sum
//         }
     
//     //    console.log(reduce(arr));

//     const result = arr.reduce((acc,curr)=>{
//         acc = acc +curr;
//         return acc;
//     },0)

//    console.log(result)


//    const users = [
//        {FirstName:"SM", LastName:"Akbor", age:22},
//        {FirstName:"Yeakub", LastName:"Ali", age:19},
//        {FirstName:"Jahid", LastName:"Hasan", age:20}
//    ]
 


// const result = users.reduce((acc,curr )=>{
    
//     if(curr.age>20){
         
//          acc.push(curr.FirstName)
//      }
//      return acc
     
// },[])

// console.log(result);

// // function reduce (arr){
// //     if()
// // }

const users = [
    {
      name: "Van Batchelder",
      city: "London",
      birthYear: 1998
    },
    {
      name: "Winter Rubino",
      city: "Madrid",
      birthYear: null
    },
    {
      name: "Yusuf Shea",
      city: "Paris",
      birthYear: 1990
    },
    {
      name: "Zion Shively",
      city: "Alabama",
      birthYear: 2002,
    }
  ];

  
  const result = users.reduce((acc,curr)=>{
      if(curr.birthYear>1990){
          acc.push(curr.name)
      }
      return acc
  },[])


console.log(result)