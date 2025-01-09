import React from "react";
import { useState } from "react";
import { connect } from "react-redux";

// connect: component와 redux store을 연결, component는 props로 redux state를 받음
// mapStateToProps: store의 state를 props로 변환하는 함수, state를 받아 props객체로 리턴
// getState는 state 전달 (ex: state를 store에서 Home으로 전달)
// dispatch는 store이나 reducer에게 메시지 전달
// connect는 getState, dispatch중에 고를수있음

function Home({ toDos }) {
	const [text, setText] = useState("");
	function onChange(e) {
		setText(e.target.value);
	}
	function onSubmit(e) {
		e.preventDefault();
		console.log(text);
		setText("");
	}
	return (
		<>
			<h1>To Do</h1>
			<form onSubmit={onSubmit}>
				<input type="text" value={text} onChange={onChange} />
				<button>Add</button>
			</form>
			<ul>{JSON.stringify(toDos)}</ul>
		</>
	);
}

function mapStateToProps(state) {
	return { toDos: state };
}

export default connect(mapStateToProps)(Home);
