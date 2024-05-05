let textShow = document.getElementById("text");

textShow.innerText = "Helllo it's Me Rahul";

// Pure JS

const elem = document.createElement("h1");
elem.innerHTML = "Hello World from JS ";

// finding node where to put element
const roots = document.getElementById("showJs");

roots.appendChild(elem);

// adding para
const newElem = document.createElement("p");
newElem.innerHTML = "this contain my own autobiography";
roots.appendChild(newElem);

// adding button
const btn = document.createElement("button");
// adding style also
btn.style.backgroundColor = "white";
btn.innerHTML = "Click Here";
roots.appendChild(btn);

// creating element in react  //

//   const heading = React.createElement('tag we want' ,{an object to give attributes to the tag} , "content inside tag")

//   const heading = React.createElement("h1", {}, "Hello world from React");
//   const root = ReactDOM.createRoot(document.getElementById("root"));
//   root.render(heading );

//   const btns  = React.createElement('button' , {id : 'btn2'} , 'Hello React')
//   const but = ReactDOM.createRoot(document.getElementById('btnId'));
//   but.render(btns)

//   console.log(btns)
//an react element i.e an object not html element

//  IMP  - root takes only one argument

// creating nested elemnets like

{
  /* <div id="parent">
   <div id="child">
       <h1></h1>
       <h2></h2>

   </div>
</div> */
}

//reactElement(object) => html tag(browser understandng)

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { className: "heading1"}, "Hello this h1"),
    React.createElement("h2", { className: "heading2"}, "Hello this h2"),
    React.createElement('p' , {} , "Both above h1,h2 are childern of child div")
  ])
);

const root = ReactDOM.createRoot(document.getElementById("nestedElem"));

root.render(parent);
