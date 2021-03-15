function mudarImagem() {
	document.getElementById('img').src = "img/pepe2.jpg";
}

function inserirTexto(txt) {
	document.getElementsByTagName('div')[0].innerHTML = txt;
}

function aumentar() {
	document.getElementsByTagName('div')[0].style.width = '500px';
	document.getElementsByTagName('div')[0].style.height = '500px';
}

function diminuir() {
	document.getElementsByTagName('div')[0].style.width = '50px';
	document.getElementsByTagName('div')[0].style.height = '50px';
}

function amarelar() {
	document.getElementsByTagName('div')[0].style.backgroundColor = 'yellow';
}
