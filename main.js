function fixWidgetLayout() {
	// document.getElementById("myframe").contentDocument
	var doc = frames['twitter-widget-0'].document;
	var link = doc.createElement("link");
	link.href = "tweets.css";
	link.rel = "stylesheet";
	link.type = "text/css";
	doc.head.appendChild(link);
}

function updateClock() {
	var clock = document.getElementById('clock');
	var now = new Date();
	clock.innerText = now.getHours() + ":" + now.getMinutes();
}

function killFirst() {
	var a = document.getElementsByClassName('alive')[0];
	a.className = "dead";
}

window.onload = function() {
	// document.getElementsByTagName('li')[0].className="disappear";
	setInterval(updateClock, 60e3);
	updateClock();

	document.getElementById('clock').addEventListener('click', killFirst);
	
	// fix tweets
	setTimeout(fixWidgetLayout, 1e2);
}
