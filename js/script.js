$(document).ready(function() {
	$('#fullpage').fullpage({
		menu: '#menu',
		anchors: ['firstPage', 'secondPage', '3rdPage', '4rdPage', '5rdPage', '6rdPage', '7rdPage', '8rdPage'],
		sectionsColor: ['#fff', '#eee','#fff', '#eee','#3BBB5A', '#fff','#eee','#4E4E4E'],
		autoScrolling: false,
		fitToSection: false,
	});
});