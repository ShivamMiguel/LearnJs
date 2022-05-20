function changeMode(){

	changeClasses();
	changeText();
	

}

function changeClasses(){
	button.classList.toggle(darkMode);
	h1.classList.toggle(darkMode);
	body.classList.toggle(darkMode);
	footer.classList.toggle(darkMode);
}

function changeText(){
	const lightModeclass = "Light Mode";
	const darkModeclass = "dark Mode";

	if(button.classList.contains(darkMode)){
		button.innerHTML= lightModeclass;
		h1.innerHTML = darkModeclass + " ON";

		return;
	}

		button.innerHTML= darkModeclass;
		h1.innerHTML = lightModeclass + " ON";
	
}





const darkMode = 'dark-mode';
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];

const button = document.getElementById('mode-selector');
button.addEventListener('click', changeMode);

