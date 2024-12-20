import { createStore } from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

//state를 절대 변형하지 말고 값이 추가된 새로운 state를 리턴할것

const reducer = (state = [], action) => {
	switch (action.type) {
		case ADD_TODO:
			return [...state, { text: action.text, id: Date.now() }];
		case DELETE_TODO:
			return [];
		default:
			return state;
	}
};

const store = createStore(reducer);

store.subscribe(() => console.log(store.getState()));

const onSubmit = (e) => {
	e.preventDefault();
	const toDo = input.value;
	input.value = "";
	store.dispatch({ type: ADD_TODO, text: toDo });
};

form.addEventListener("submit", onSubmit);
