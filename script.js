let textShow = document.getElementById("text");

textShow.innerText = "Helllo it's Me Rahul";

// Pure JS

const elem = document.createElement("h1");
elem.innerHTML = "Hello World from JS ";

// finding node where to put element
const roots = document.getElementById("showJs");

roots.appendChild(elem);

// adding para
const newElem  = document.createElement('p')
newElem.innerHTML = 'this contain my own autobiography'
roots.appendChild(newElem)

// adding button 
const btn  = document.createElement('button')
// adding style also
btn.style.backgroundColor = 'white'
btn.innerHTML = "Click Here"
roots.appendChild(btn)


