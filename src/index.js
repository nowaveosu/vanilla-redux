import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

//reducer
const countModifier = (count = 0, action) => {
	if (action.type === "ADD") {
		return count + 1;
	} else if (action.type === "MINUS") {
		return count - 1;
	} else {
		return count;
	}
};

//1. store 만들기, reducer 넣어줘야함
const countStore = createStore(countModifier);

//action에 부르기
countStore.dispatch({ type: "ADD" });
countStore.dispatch({ type: "ADD" });
countStore.dispatch({ type: "MINUS" });

console.log(countStore.getState());
