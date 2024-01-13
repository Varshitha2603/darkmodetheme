"use strict"

let btn = document.querySelectorAll("#darkmode_btn");
let para = document.querySelectorAll(".p1");
let title = document.querySelector("#head");
btn.forEach((button) => {
    button.addEventListener("click", () => {
        if(button.innerHTML == "Dark Mode")
        {
            button.innerHTML = "Light Mode";
            document.body.classList.add(`active`);
            title.classList.add(`active2`);
            button.classList.add(`active3`);
            para.forEach((content) => {
                content.classList.add(`active2`);
            });
        }
        else
        {
            button.innerHTML = "Dark Mode";
            document.body.classList.remove(`active`);
            title.classList.remove(`active2`);
            button.classList.remove(`active3`);
            para.forEach((content) => {
                content.classList.remove(`active2`);
            });
        }
    });  
});