let span = document.createElement("span");
span.innerHTML = "it will change red when hover the content"
span.className = "main"

let break1 = document.createElement("br")
//document.body.append(span,break1);

let button = document.createElement("button");
button.setAttribute("type","button");
//button.setAttribute("onclick","foo()");
button.addEventListener("click",foo);
button.innerHTML= "Click Me"
document.body.append(span,break1,button);

function foo(){
    let ele = prompt();
    let ele1 = document.createElement("p")
    ele1.innerHTML = ele
    document.body.append(ele1);
 }

 