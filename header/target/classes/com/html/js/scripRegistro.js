
document.getElementById("btn__registrar").addEventListener("click", register);
document.getElementById("btn__iniciar-sesion").addEventListener("click", IniciarSesion);

window.addEventListener("resize",anchoPagina);
// declaracion de variables
var contenedor_login_register= document.querySelector(".contenedor__login-register");
var formmulario_login=document.querySelector(".formulario__login");
var formulario_register= document.querySelector(".formulario__register");
var caja_trasera_login=document.querySelector(".cajatrasera-login");
var caja_trasera_register=document.querySelector(".caja_trasera-register");



function register(){
	if(window.innerWidth > 850){
	formulario_register.style.display = "block";
	contenedor_login_register.style.left = "410px";
	formmulario_login.style.display= "none";
	caja_trasera_register.style.opacity ="0";
	caja_trasera_login.style.opacity="1";}
	else{
		formulario_register.style.display = "block";
		contenedor_login_register.style.left = "0px";
		formmulario_login.style.display= "none";
		caja_trasera_register.style.display="none";
		caja_trasera_login.style.display="block";
		caja_trasera_login.style.opacity="1";
	}

}

function anchoPagina(){
	if (window.innerWidth > 850){
		caja_trasera_login.style.display = "block";
		caja_trasera_register.style.display="block";}

	else{
		caja_trasera_register.style.display= "block";
		caja_trasera_register.style.opacity = "1";
		caja_trasera_login.style.display= "none";
		formmulario_login.style.display="block";
		formulario_register.style.display= "none";
		contenedor_login_register.style.left="0px";

	
	}
}

anchoPagina();