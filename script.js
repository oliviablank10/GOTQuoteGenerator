const url = "https://icanhazdadjoke.com/j/R7UfaahVfFd"
async function getData() {
	const response = await fetch(url)
	const data = await response.json()
	console.log(data.joke)
	console.log(data.character.name)

	document.getElementById("joke").textContent = "'" + data.sentence + "'"
	document.getElementById("person").textContent = "-" + data.character.name
}

var view=document.getElementById("view");
view.addEventListener("click", getData, false);

