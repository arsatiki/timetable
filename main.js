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
	var diffms = upcoming.getTime() - now.getTime();
	return diffms;
}

function attachTimeleftElement(eventElement) {
	var n = document.createElement('span');
	n.className = 'timeleft';
	eventElement.appendChild(n);
	return n;
}

function updateClock() {
	var events = document.getElementsByClassName('alive');
	if (events.length < 2)
		return;
	
	var currentEvent = events[0];
	var nextEvent = events[1];

	var ts = currentEvent.getElementsByClassName('timeleft');
	var t = (ts.length > 0)? ts[0]: attachTimeleftElement(currentEvent);
	t.innerText = "Time left " + 
	              timeleft(nextEvent.dataset.time) / (60e3) +
	              " minutes";
}

function killFirst() {
	var a = document.getElementsByClassName('alive')[0];
	a.className = "dead";
}

function killElFactory(el) { return function() {el.className = "dead"; }}


window.onload = function() {
	setInterval(updateClock, 60e3);
	updateClock();

	var k, events = document.getElementsByClassName('alive');
	console.log(events);
	for (k = 0; k < events.length; k++) {
		var el = events[k];
		var t = timeleft(el.dataset.time);
		setTimeout(killElFactory(el), t);
	}
	document.getElementById('copterlogo').addEventListener('click', killFirst);
	
	// fix tweets
	setTimeout(fixWidgetLayout, 1e2);
}
