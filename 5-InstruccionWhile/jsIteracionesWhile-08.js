/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.
ANTONIO AGUIRRE
*/
function mostrar()
{
	
	let sumaPositivos;
	let multiplicacionNegativos;
	let numeroIngresado;
	let respuesta;
	
	sumaPositivos = 0;
	multiplicacionNegativos = 1;
	respuesta = "s";

	while(respuesta == "s")	{

		numeroIngresado = prompt("Ingrese un número:");
		numeroIngresado = parseInt(numeroIngresado);

		if (numeroIngresado >= 0)	{

			sumaPositivos += numeroIngresado;

		}	else	{

			multiplicacionNegativos = multiplicacionNegativos * numeroIngresado;

		}

		respuesta = prompt("Desea agregar otro número? (s/n)");

	}


	document.getElementById("txtIdSuma").value = sumaPositivos;
	document.getElementById("txtIdProducto").value = multiplicacionNegativos;

}//FIN DE LA FUNCIÓN