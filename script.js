const modal = document.querySelector(".modal");
const modalImg = document.querySelector("img");
const modalX = document.querySelector(".modal-x")
const message = document.querySelector(".message");
const upsideDownBtn = document.querySelector(".upside-down");
const wearyBtn = document.querySelector(".weary");
const interviewBtn = document.querySelector(".interview");

upsideDownBtn.addEventListener("click", () => {
    modalImg.src = "img/cheer-up-be-happy.gif";
    message.innerText = "Keep going!";
    modal.classList.remove("hide");
});

wearyBtn.addEventListener("click", () => {
    modalImg.src = "img/i-believe-in-you.gif";
    message.innerText = "Keep going!";
    modal.classList.remove("hide");
});

interviewBtn.addEventListener("click", () => {
    modalImg.src = "img/jonah-hill-excited.gif";
    message.innerText = "GO CRUSH IT!!!";
    modal.classList.remove("hide");
});

modalX.addEventListener("click", () => {
    modal.classList.add("hide");
});