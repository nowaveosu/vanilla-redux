import { createStore } from "redux";
import {
	configureStore,
	createAction,
	createReducer,
	createSlice,
} from "@reduxjs/toolkit";

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

// const addToDo = createAction("ADD");
// const deleteToDo = createAction("DELETE");
// // state를 mutate하거나, 새로운 state 리턴하거나 할수있음
// const reducer = createReducer([], (builder) => {
// 	builder
// 		.addCase(addToDo, (state, action) => {
// 			state.push({ id: Date.now(), text: action.payload });
// 		})
// 		.addCase(deleteToDo, (state, action) => {
// 			return state.filter((toDo) => toDo.id !== action.payload);
// 		});
// });

//createSlice는 createAction과 createReducer 대체가능
const toDos = createSlice({
	name: "toDosReducer",
	initialState: [],
	reducers: {
		add: (state, action) => {
			state.push({ id: Date.now(), text: action.payload });
		},
		remove: (state, action) => {
			return state.filter((toDo) => toDo.id !== action.payload);
		},
	},
});

//redux developer tools 사용가능
const store = configureStore({ reducer: toDos.reducer });

//createSlice 내 action사용
export const { add, remove } = toDos.actions;

export default store;
