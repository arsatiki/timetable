function fixWidgetLayout() {
	var doc = frames['twitter-widget-0'].document;
	var stream = doc.getElementsByClassName('stream')[0];
	stream.style.overflowY = 'hidden';
}