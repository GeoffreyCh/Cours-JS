// SELECTEURS //

// document.querySelector("h4").style.background = "yellow";

// const baliseHTML = document.querySelector("h4");

// console.log(baliseHTML)

// baliseHTML.style.background = "yellow"


// CLICK EVENT //

const questionContainer = document.querySelector(".click-event");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2");
const response = document.querySelector("p");


questionContainer.addEventListener("click", () => {
    questionContainer.classList.toggle("question-clicked");
});

btn1.addEventListener("click", () => {
    response.classList.add("show-response")
    response.style.background = "green";
}) 

btn2.addEventListener("click", () => {
    response.classList.add("show-response")
    response.style.background = "red";
}) 



// MOUSE EVENT //

const mousemove = document.querySelector(".mousemove");

window.addEventListener("mousemove", (e) => {
    mousemove.style.left = e.pageX + "px";
    mousemove.style.top = e.pageY + "px";
});

window.addEventListener("mousedown", () => {
    mousemove.style.transform = "scale(2) translate(-25%, -25%)";
})

window.addEventListener("mouseup", () => {
    mousemove.style.transform = "scale(1) translate(-50%, -50%)";
})




// KEYPRESS EVENT //

const keypressContainer = document.querySelector(".keypress");
const key = document.getElementById("key");

document.addEventListener("keypress", (e) => {
    key.textContent = e.key;    

    if (e.key === "g") {
        keypressContainer.style.background = "pink"
    } else if (e.key === "p") {
        keypressContainer.style.background = "teal"
    } else {
        keypressContainer.style.background = "black"
    }
});



