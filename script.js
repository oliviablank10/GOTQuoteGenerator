const url = "https://api.gameofthronesquotes.xyz/v1/random"
async function getData() {
	const response = await fetch(url)
	const data = await response.json()
	console.log(data.sentence)
	console.log(data.character.name)

	document.getElementById("quote").textContent = "'" + data.sentence + "'"
	document.getElementById("person").textContent = "-" + data.character.name
}

var view = document.getElementById("view");
view.addEventListener("click", getData, false);

