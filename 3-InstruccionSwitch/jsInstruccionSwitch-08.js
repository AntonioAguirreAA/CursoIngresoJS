function mostrar()
{
	let destinoIngresado
	let mensaje;

	destinoIngresado = document.getElementById("txtIdDestino").value;

	switch (destinoIngresado) {
		case "Bariloche":
		case "Ushuaia":

		mensaje = "Frío.";

		break;

		case "Mar del plata":
		case "Cataratas":

		mensaje = "Calor.";

		break;
	}

	alert("En este destino hace " + mensaje);
}//FIN DE LA FUNCIÓN
