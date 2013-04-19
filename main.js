function fixWidgetLayout() {
	// document.getElementById("myframe").contentDocument
	var doc = frames['twitter-widget-0'].document;
	var link = doc.createElement("link");
	link.href = "tweets.css";
	link.rel = "stylesheet";
	link.type = "text/css";
	doc.head.appendChild(link);
}

function extractTime(s) {
	var t = new Date();
	var hm = s.split(':');
	t.setHours(parseInt(hm[0]));
	t.setMinutes(parseInt(hm[1]));
	return t;
}

function timeleft(s) {
	var now = new Date();
	var upcoming = extractTime(s);
	console.log(now);
	console.log(upcoming);
	var diffms = upcoming.getTime() - now.getTime();
	return (diffms / 60e3);
}

function updateClock() {
	var events = document.getElementsByClassName('alive');
	if (events.length < 2)
		return

	var ts = events[0].getElementsByClassName('timeleft');

	if (ts.length == 0) {
		var n = document.createElement('span');
		n.className = 'timeleft';
		events[0].appendChild(n);
		ts[0] = n;
	}
	var t = ts[0];
	t.innerText = "Time left " + 
	              timeleft(events[1].dataset.time) +
	              " minutes";
}

function killFirst() {
	var a = document.getElementsByClassName('alive')[0];
	a.className = "dead";
}

window.onload = function() {
	setInterval(updateClock, 60e3);
	updateClock();

	document.getElementById('copterlogo').addEventListener('click', killFirst);
	
	// fix tweets
	setTimeout(fixWidgetLayout, 1e2);
}
