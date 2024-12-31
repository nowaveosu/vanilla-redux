import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

number.innerText = 0;

const ADD = "ADD";
const MINUS = "MINUS";

//reducer , 리턴하는게 state가 됨
const countModifier = (count = 0, action) => {
	switch (action.type) {
		case ADD:
			return count + 1;
		case MINUS:
			return count - 1;
		default:
			return count;
	}
};

//1. store 만들기, reducer 넣어줘야함
const countStore = createStore(countModifier);

const onChange = () => {
	number.innerText = countStore.getState();
};

//change를 store에서 감지하는법 : subscribe
countStore.subscribe(onChange);

//reducer에게 action보내는법: dispatch
const handleAdd = () => {
	countStore.dispatch({ type: ADD });
};
const handleMinus = () => {
	countStore.dispatch({ type: MINUS });
};

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);
