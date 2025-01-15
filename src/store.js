import { createStore } from "redux";
import { createAction, createReducer } from "@reduxjs/toolkit";
const ADD = "ADD";
const DELETE = "DELETE";

const addToDo = createAction("ADD");
const deleteToDo = createAction("DELETE");

// const reducer = (state = [], action) => {
// 	switch (action.type) {
// 		case addToDo.type:
// 			console.log(action);
// 			return [
// 				{ text: action.payload, id: Date.now() },
// 				...state,
// 			];
// 		case deleteToDo.type:
// 			return state.filter((toDo) => toDo.id !== action.payload);
// 		default:
// 			return state;
// 	}
// };

// state를 mutate하거나, 새로운 state 리턴하거나 할수있음
const reducer = createReducer([], (builder) => {
	builder
		.addCase(addToDo, (state, action) => {
			state.push({ id: Date.now(), text: action.payload });
		})
		.addCase(deleteToDo, (state, action) => {
			return state.filter((toDo) => toDo.id !== action.payload);
		});
});

const store = createStore(reducer);

export const actionCreators = {
	addToDo,
	deleteToDo,
};

export default store;
