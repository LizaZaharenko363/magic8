function startpage(){
	var mainElement = document.createElement('div');
	mainElement.id = 'block';
	mainElement.innerHTML = `
	<div id="header">
		<p>Ask a question and click<br /> for answer</p>
	</div>
	<div id="ball" onclick="wish()">
		<div id="result">
			<p id="what">What is the answer?</p>
		</div>
	</div>`;
	document.body.appendChild(mainElement);
	prompt("What's your question?");
}
function wish(){
	var arrWish = ["It is certain","Without a doubt","Most likely",
	"Signs point to yes","Ask again later","Better not tell you now",
	"My sources say no","Very doubtful"];
	var i = Math.floor(7*Math.random());

	document.getElementById('what').textContent = arrWish[i];
}