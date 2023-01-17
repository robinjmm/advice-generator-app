const button = document.querySelector(".js-button");
const adviceText = document.querySelector(".js-card__advice");
const adviceNum = document.querySelector(".js-card__advice-num")

button.addEventListener("click", async (event) => {
	const response = await fetch("https://api.adviceslip.com/advice");
	const json = await response.json();
	const {id, advice} = json.slip;

	adviceText.innerText = advice;
	adviceNum.innerText = id;
});