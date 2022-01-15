

const P=document.querySelector("#p");
P.innerHTML = `${MyFunc("SM Akbor", SubFunc)}`

 function MyFunc (name,fn){
     console.log(name + fn())
 }


function SubFunc() {
    return ("is a student.")
    
}

//MyFunc("SM Akbor", SubFunc);


 