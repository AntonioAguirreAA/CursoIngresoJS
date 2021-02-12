/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let claveIngresada;
	let mensaje;
	
	
	mensaje = "La clave es incorrecta.";
	
	do{
		
		claveIngresada = prompt(claveIngresada);

		if (claveIngresada == "utn750"){

			mensaje = "La clave es correcta.";

		}
			else	{

			alert(mensaje);

		}

	} while (claveIngresada != "utn750");
	
	alert (mensaje);

}//FIN DE LA FUNCIÓN
