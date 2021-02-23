/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.
ANTONIO AGUIRRE
*/
function mostrar()
{	
	// declarar letiables
	let numeroIngresado;
	let numeroMaximo;
	let numeroMinimo;
	let respuesta;
	
	//iniciar letiables
	numeroIngresado = prompt("Ingrese un número:");
	numeroIngresado = parseInt(numeroIngresado);
	
	respuesta = "s";
	
	numeroMaximo = numeroIngresado;
	numeroMinimo = numeroIngresado;

	while (respuesta == "s")	{
		
		numeroIngresado = prompt("Ingrese otro número:");
		numeroIngresado = parseInt(numeroIngresado);

		if (numeroIngresado < numeroMinimo)	{

			numeroMinimo = numeroIngresado;

		}	else	{

			numeroMaximo = numeroIngresado;

		}
		
		respuesta = prompt("desea continuar? (s/n)");

	}

	document.getElementById("txtIdMaximo").value = numeroMaximo;
	document.getElementById("txtIdMinimo").value = numeroMinimo;
}//FIN DE LA FUNCIÓN