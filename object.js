const obj ={
    name:"SM Akbor",
    age:22,
    country:"Bangladesh"
}

function MyObj(){
    console.log(obj.name);
}
MyObj()




function song(callback){
    console.log("la la la la")
     callback();
}

function meow(){
    console.log("meow meow meow");
}

  song(meow)
 








