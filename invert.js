var white = 1;
var shadow = 1;

var body = document.getElementsByTagName('body')[0];

var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
var four = document.getElementById('four');
var five = document.getElementById('five');

var julia = document.getElementById('julia');
var about = document.getElementById('about');
var favorites = document.getElementById('favorites');
var tech = document.getElementById('tech');
var nontech = document.getElementById('nontech');
var photos = document.getElementById('photos');
var links = document.getElementById('links');

function invert(){
	if(white){
		document.documentElement.style.setProperty('--white', '#151515');
		document.documentElement.style.setProperty('--black', '#fff');
		body.style.backgroundImage = 'url(low.png)';

		one.style.textShadow = 'none';
		two.style.textShadow = 'none';
		three.style.textShadow = 'none';
		four.style.textShadow = 'none';
		five.style.textShadow = 'none';

		julia.style.textShadow = 'none';
		about.style.textShadow = 'none';
		favorites.style.textShadow = 'none';
		tech.style.textShadow = 'none';
		nontech.style.textShadow = 'none';
		photos.style.textShadow = 'none';
		links.style.textShadow = 'none';

		white = 0;
	}
	else{
		document.documentElement.style.setProperty('--white', '#fff');
		document.documentElement.style.setProperty('--black', '#151515');
		body.style.backgroundImage = 'url(grid.png)';

		one.style.textShadow = '1px 1px 0px var(--pink2), 2px 2px 0px var(--pink2)';
		two.style.textShadow = '1px 1px 0px var(--yellow2), 2px 2px 0px var(--yellow2)';
		three.style.textShadow = '1px 1px 0px var(--green2), 2px 2px 0px var(--green2)';
		four.style.textShadow = '1px 1px 0px var(--blue2), 2px 2px 0px var(--blue2)';
		five.style.textShadow = '1px 1px 0px var(--purple2), 2px 2px 0px var(--purple2)';

		julia.style.textShadow = '1px 1px 0px var(--pink2), 2px 2px 0px var(--pink2), 3px 3px 0px var(--pink2), 4px 4px 0px var(--pink2)';
		about.style.textShadow = '1px 1px 0px var(--yellow2), 2px 2px 0px var(--yellow2), 3px 3px 0px var(--yellow2), 4px 4px 0px var(--yellow2)';
		favorites.style.textShadow = '1px 1px 0px var(--green2), 2px 2px 0px var(--green2), 3px 3px 0px var(--green2), 4px 4px 0px var(--green2)';
		tech.style.textShadow = '1px 1px 0px var(--green2), 2px 2px 0px var(--green2), 3px 3px 0px var(--green2)';
		nontech.style.textShadow = '1px 1px 0px var(--green2), 2px 2px 0px var(--green2), 3px 3px 0px var(--green2)';
		photos.style.textShadow = '1px 1px 0px var(--blue2), 2px 2px 0px var(--blue2), 3px 3px 0px var(--blue2), 4px 4px 0px var(--blue2)';
		links.style.textShadow = '1px 1px 0px var(--purple2), 2px 2px 0px var(--purple2), 3px 3px 0px var(--purple2)';

		white = 1;
	}
}