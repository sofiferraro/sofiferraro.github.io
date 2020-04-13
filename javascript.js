
/* MENU DESPLEGABLE HOVER*/

window.addEventListener('load', iniciar,false);

function iniciar(){
	vardropdown = document.getElementById('dropdowndos');


	dropdown.addEventListener('mouseover', color, false);
	dropdown.addEventListener('mouseout', blanco, false);

}

function blanco(){
	var dropdown = document.getElementById('dropdowndos').clasName += "iconos/twitter.svg";
}

function color(){
	var dropdown = document.getElementById('dropdowndos').src= "iconos/twitter1.svg";
}




function redireccionar(){
	setTimeout("location.href='#sec-1'",50);
}

/*
function redireccionar(portada){

	var portada = document.getElementById('portada').serAttribute('href',"#sec-1",+'portada/'+portada);
}

*/

