/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos).

ANTONIO AGUIRRE 1°A
*/
function mostrar()
{
	//declarar contadores y letiables 
	let respuesta;
	let numeroIngresado;
	let sumaNegativos; 
	let sumaPositivos;
	let cantidadPositivos;
	let cantidadNegativos;
	let cantidadCero;
	let pares;
	let primeraPregunta;
	let contador;

	primeraPregunta = true;

	pares = 0;
	cantidadCero = 0;
	cantidadPositivos = 0;
	cantidadNegativos = 0;
	contador = 0;

	sumaPositivos = 0;
	sumaNegativos = 0;

	respuesta="s";

	while(respuesta == "s")
	{
		
		contador++;
		
		numeroIngresado = prompt("Ingrese un número:");
		numeroIngresado = parseInt(numeroIngresado);
		
		if (numeroIngresado == 0){

			cantidadCero++;

		}	else	{

			if (numeroIngresado > 0){

				cantidadPositivos++;
				sumaPositivos += numeroIngresado;

			}	else	{

				cantidadNegativos++;
				sumaNegativos += numeroIngresado;

			}

		}

		if (numeroIngresado % 2 == 0)	{ //	(NUMERO % 2 == 0) DEVUELVE EL NUMERO SI ES PAR

			pares++;

		}
		

		respuesta = prompt("desea continuar? (s/n)");


	}//fin del while

	alert ("-Suma de positivos: " + sumaPositivos +
	"\n-Suma de negativos: " + sumaNegativos +
	"\n-Cantidad de positivos: " + cantidadPositivos +
	"\n-Cantidad de negativos: " + cantidadNegativos +
	"\n-Cantidad de ceros: " + cantidadCero +
	"\n-Cantidad de números pares: " + pares +
	"\n-Promedio de positivos: " + (sumaPositivos / contador) +
	"\n-Promedio de negativos: " + (sumaNegativos / contador) +
	"\n-Diferencia de positivos y negativos: " + (sumaPositivos + sumaNegativos));

	//document.write("la suma de negativos es :"+sumaNegativos);
	//PREGUNTAR POR DOCUMENT.WRITE


}//FIN DE LA FUNCIÓN