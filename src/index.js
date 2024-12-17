const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const handleAdd = () => {
	console.log("add");
};
const handleMinus = () => {
	console.log("Minus");
};
add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);
