//el atributo onsubmit activa la funcion verificarForm cuando se envia el formulario antes de enviarlo al servidor con el methodo post
function verificarForm(){
	//asignamos las etiquetas con su id a una variable constante
	//para los campos a rellenar
	const nombre = document.getElementById("name")
	const email = document.getElementById("email")
	const pass = document.getElementById("password")
	const form = document.getElementById("form")
	//para mostrar el error en un parrafo si no cumple las condiciones
	const errorNombre = document.getElementById("warningsNombre")
	const errorEmail = document.getElementById("warningsEmail")
	const errorPass = document.getElementById("warningsPass")
	
	//el evento submit permitira validar el formulario segun las condiciones al presionar el boton
	form.addEventListener("submit", e => {
		//metodo prevenDefault evitara que alguna accion predeterminada al evento no ocurra
		//evitando que el navegador almacene los datos y se muestre en el campo de la url
		e.preventDefault()
		//inicializamos las variables
		let warningsNombre = ""
		let warningsEmail = ""
		let warningsPass = ""
		let entrar = false
		//utilizamos expresiones regulares para condicionar nuestros campos segun lo deseado
		let regexNombre = /^[a-zA-ZÀ-ÿ\s]{3,40}$/ //solo letras y espacios y mayor a 3 caracteres
		let regexEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/ //email tenga la forma usuario@gmail.com 
		let regexPass = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/ //pass acepte entre 8 y 16 caracteres un tenga letras y numeros

		//las etiquetas donde se muestre el error inicializan vacio
		errorNombre.innerHTML = ""
		errorEmail.innerHTML = ""
		errorPass.innerHTML = ""
	
		//si evaluamos el campo nombre, email y pass y no cumple con la expresion regular, cambia el estado de entrar a true de tal modo que se les agrega a las pariables el texto

		if (!regexNombre.test(nombre.value)) {
			warningsNombre += `El nombre debe tener al menos 3 caracteres, solo letras y puede contener espacios. <br>`
			entrar = true
		}
		if (!regexEmail.test(email.value)) {
			warningsEmail += `El correo solo puede contener letras, numeros, puntos, guiones y guion bajo.  <br>`
			entrar = true
		}
		if (!regexPass.test(pass.value)) {
			warningsPass += `La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula. <br>`
			entrar = true
		}

		//luego, si entrar es true mostrara en la etiqueta el parrafo con el error.
		if (entrar) {
			errorNombre.innerHTML = warningsNombre
			errorEmail.innerHTML = warningsEmail
			errorPass.innerHTML = warningsPass
		}
	})
}