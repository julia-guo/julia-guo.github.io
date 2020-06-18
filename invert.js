var white = 1;

function invert(){
	if(white){
		document.documentElement.style.setProperty('--bg', '#151515');
		document.documentElement.style.setProperty('--bg2', '#fff');
		white = 0;
	}
	else{
		document.documentElement.style.setProperty('--bg', '#fff');
		document.documentElement.style.setProperty('--bg2', '#aaa');
		white = 1;
	}
}