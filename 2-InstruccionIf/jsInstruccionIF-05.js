function mostrar()
{
	var edad = parseInt(txtIdEdad.value)

	if (edad < 13 || edad > 17) { // || es para sumar una condicion en un if
		alert("No es adolescente.")
	}
}//FIN DE LA FUNCIÓN
