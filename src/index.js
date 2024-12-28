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

const addToDo = (text) => {
	store.dispatch({ type: ADD_TODO, text });
};

const deleteToDo = (e) => {
	const id = e.target.parentNode.id;
	store.dispatch({ type: DELETE_TODO, id });
};

const paintToDos = () => {
	const toDos = store.getState();
	ul.innerHTML = "";
	toDos.forEach((toDo) => {
		const li = document.createElement("li");
		const btn = document.createElement("button");
		btn.innerText = "DEL";
		btn.addEventListener("click", deleteToDo);
		li.id = toDo.id;
		li.innerText = toDo.text;
		li.appendChild(btn);
		ul.appendChild(li);
	});
};

store.subscribe(paintToDos);

const onSubmit = (e) => {
	e.preventDefault();
	const toDo = input.value;
	input.value = "";
	addToDo(toDo);
};

form.addEventListener("submit", onSubmit);
