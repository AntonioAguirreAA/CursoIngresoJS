// SWITCH EJERCICIO 9
// ANTONIO AGUIRRE

function mostrar()
{
	let estacionIngresada;
	let destinoIngresado;
	let descuetoAumento;
	let mensaje;
	let precioFinal;

	estacionIngresada = document.getElementById("txtIdEstacion").value;
	destinoIngresado = document.getElementById("txtIdDestino").value;
	descuetoAumento = parseFloat(1);

	switch (estacionIngresada) {
		case "Invierno":

			switch (destinoIngresado) {
				case "Bariloche":
					descuetoAumento = 1.2
					break;
				case "Cataratas":
				case "Cordoba":
					descuetoAumento = 0.9
					break;
				case "Mar del plata":
					descuetoAumento = 0.8
					break;
				} //FIN SWITCH INVIERNO

			break;

		case "Verano":
			switch (destinoIngresado) {
				case "Bariloche":
					descuetoAumento = 0.8
					break;
				case "Cataratas":
				case "Cordoba":
					descuetoAumento = 1.1
					break;
				case "Mar del plata":
					descuetoAumento = 1.2
					break;
			}
		break;

		case "Otoño":
		case "Primavera":

			switch (destinoIngresado) {
				case "Bariloche":
				case "Mar del plata":
				case "Cataratas":
					descuetoAumento = 1.1
					break;
				}

		break;
	}

	precioFinal = 15000 * descuetoAumento
	alert ("La tarifa del viaje es de: $" + precioFinal);

}//FIN DE LA FUNCIÓN
