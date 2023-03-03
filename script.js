const modal = document.querySelector(".modal");
const modalImg = document.querySelector("img");
const modalX = document.querySelector(".modal-x")
const message = document.querySelector(".message");
const buttons = document.querySelectorAll("button");



buttons.forEach(button => {
    button.addEventListener("click", () => {
        if(button.innerText === "🙃") {
            modalImg.src = "img/cheer-up-be-happy.gif";
            message.innerText = "Keep going!";
            modal.classList.remove("hide");
        } else if (button.innerText === "😩") {
            modalImg.src = "img/i-believe-in-you.gif";
            message.innerText = "You got this!";
            modal.classList.remove("hide");
        } else {
            modalImg.src = "img/jonah-hill-excited.gif";
            message.innerText = "GO CRUSH IT!!!";
            modal.classList.remove("hide");
        }
    });
    
}); 


modalX.addEventListener("click", () => {
    modal.classList.add("hide");
});