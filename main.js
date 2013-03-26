function updateClock() {
	var clock = document.getElementById('clock');
	var now = new Date();
	clock.innerText = now.getHours() + ":" + now.getMinutes();
}

function killFirst() {
	var u = document.getElementsByTagName('ul')[0];
	var p = u.getElementsByTagName('li')[0];
	u.removeChild(p);
}

window.onload = function() {
	// document.getElementsByTagName('li')[0].className="disappear";
	setInterval(updateClock, 60e3);
	updateClock();

	document.getElementById('clock').addEventListener('click', killFirst);
}
