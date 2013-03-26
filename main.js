function updateClock() {
	var clock = document.getElementById('clock');
	var now = new Date();
	clock.innerText = now.getHours() + ":" + now.getMinutes();
}

window.onload = function() {
	// document.getElementsByTagName('li')[0].className="disappear";
	setInterval(updateClock, 60e3);
	updateClock();
}

