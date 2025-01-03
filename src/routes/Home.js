import React from "react";
import { useState } from "react";

function Home() {
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
			<ul></ul>
		</>
	);
}

export default Home;
