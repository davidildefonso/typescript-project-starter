import printMe from './print';
import './style.css';
import Icon from './icon.png';

function component() {
	const element = document.createElement('div');

	element.innerText = 'Hello webpack';
	element.classList.add('hello');
	const btn = document.createElement('button');
	btn.innerHTML = 'Click me and check the console!';
	btn.onclick = printMe;

	const myIcon = new Image();
	myIcon.src = Icon;

	element.appendChild(myIcon);

	element.appendChild(btn);

	return element;
}

document.body.appendChild(component());
