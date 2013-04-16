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
}

function killFirst() {
	var a = document.getElementsByClassName('alive')[0];
	a.className = "dead";
}

window.onload = function() {
	setInterval(updateClock, 60e3);

	document.getElementById('copterlogo').addEventListener('click', killFirst);
	
	// fix tweets
	setTimeout(fixWidgetLayout, 1e2);
}
