import "@styles/styles.scss";
import "@fontawesome/fontawesome.min.css";
import "@fontawesome/brands.min.css";

const button = document.querySelector(".js-button");
const adviceText = document.querySelector(".js-card__advice");
const adviceNum = document.querySelector(".js-card__advice-num")

button.addEventListener("click", async (event) => {
    const response = await fetch("https://api.adviceslip.com/advice");
    const {slip} = await response.json();
    const {id, advice} = slip;

    adviceText.innerText = advice;
    adviceNum.innerText = id;
});