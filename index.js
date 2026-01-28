const express = require('express');

const app = express();
const PORT = 3001;

app.get("/", (req,res) => {
	res.send(`
		<h1>Calculator App is UP! and running!</h1>	
		<h2> go to /<operation>?a=..&b=.. (add: available) </h2>	
	`);
})

app.get("/add", (req, res) => {
	const firstNumber = parseInt(req.query.a);
	const secondNumber = parseInt(req.query.b);
	res.send(`
		<h1> ${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber} </h1>	
	`)
})

app.listen(PORT , () => {
	console.log(`backend running on http://localhost:${PORT}`);
});
