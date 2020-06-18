var white = 1;
var body = document.getElementsByTagName('body')[0];

function invert(){
	if(white){
		document.documentElement.style.setProperty('--white', '#151515');
		document.documentElement.style.setProperty('--black', '#fff');
		body.style.backgroundImage = 'url(low.png)';
		white = 0;
	}
	else{
		document.documentElement.style.setProperty('--white', '#fff');
		document.documentElement.style.setProperty('--black', '#151515');
		body.style.backgroundImage = 'url(grid.png)';
		white = 1;
	}
}