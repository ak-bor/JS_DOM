var myObject = {
    name: "SM Akbor",
    age: 23,
    getName : function (fn){
      
        
         var xyz= ()=>{
           return `${this.name} is ${fn()} years old .`;
        }
        return xyz();
    }
}


function myFunc (){
    return 25
}



 console.log(myObject.getName(myFunc));
 //console.log(result)