const heading = document.querySelector(".heading");
const ulItem = document.querySelector("#Ulitem");
heading.innerHTML = "Hello World";
ulItem.style.listStyle= "none";
ulItem.style.color= "orange";
ulItem.style.fontSize= "25px";

const createElement = document.createElement("p");
createElement.className="para";
createElement.id="para";
createElement.innerText= "i am web developer"
 heading.appendChild(createElement)






const createh2 = document.createElement("h2");
createh2.className ="heading2";
createh2.id = "heading2";
createh2.innerText= "Hi I am SM Akbor ";
heading.appendChild(createh2);
 