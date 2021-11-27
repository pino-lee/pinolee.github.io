let myImage = document.querySelector("img");

myImage.onclick = function(){
    let mySrc = myImage.getAttribute("src");
    if(mySrc === "images/2.webp"){
        myImage.setAttribute("src","images/1.jpg");
    }else{
        myImage.setAttribute("src", "images/2.webp");
    }
}
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName(){
    let myName = prompt("请输入你的名字");
    if (myName === null || !myName) {
        setUserName();
    } else {
        localStorage.setItem("name",myName);
        myHeading.textContent = myName+"真是太帅了";
    }
    
}
if (!localStorage.getItem("name")) {
    setUserName();
} else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = storedName+"确实帅";
}
myButton.onclick = function(){
    setUserName();
}
