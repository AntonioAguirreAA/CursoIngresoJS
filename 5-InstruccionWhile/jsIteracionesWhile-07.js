/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
ANTONIO AGUIRRE
*/
function mostrar()
{
	let contador;
	let acumulador;
	let numeroIngresado;
	let respuesta;

	acumulador = 0;
	contador = 0;
	respuesta = "s";

	while(respuesta == "s")	{

		contador++;
		
		numeroIngresado = prompt("Ingrese un número:");
		numeroIngresado = parseInt(numeroIngresado);

		acumulador = acumulador + numeroIngresado;

		respuesta = prompt("Desea agregar otro número? (s/n)");

	}

	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = acumulador / contador;
}//FIN DE LA FUNCIÓN