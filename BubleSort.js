// const a = [4,6,8,10,15,67,20];





// function BubleSort(a){
//     for(let i=0;i<a.length-1;i++){
//         let flag=0;
//         for(let j=0; j<a.length-1-i;j++){
//             if(a[j]>a[j+1]){
//                 let temp = a[j];
//                 a[j]=a[j+1];
//                 a[j+1] =temp;
//                 flag=1;
//             }
//         }
//         if(flag==0){
//             break;
//         }
//     }
//     return a;
    
// }

// console.log(BubleSort([ 10,4,34,6,8,10,56,15,67,20]));
// for(let i=0;i<a.length-1;i++){
//     let flag=0;
//     for(let j=0; j<a.length-1-i;j++){
//         if(a[j]>a[j+1]){
//             let temp = a[j];
//             a[j]=a[j+1];
//             a[j+1] =temp;
//             flag=1;
//         }
//     }
//     if(flag==0){
//         break;
//     }
// }

// console.log(a)




const MainArray=[1,4,3,6,4,7,3,75,57,85]


function BubleSort(arr){
   for(let i =0;i<arr.length-1;i++){
       for(let j=0;j<arr.length-1-i;j++){
           if(arr[j]<arr[j+1]){
               [arr[j],arr[j+1]]=[arr[j+1],]
               temp=arr[j]
               arr[j]=arr[j+1]
               arr[j+1]=temp
           }
       }
   }
   return arr;
}

console.log(BubleSort(MainArray))



