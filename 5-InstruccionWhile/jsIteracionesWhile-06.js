/*
Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio.
ANTONIO AGUIRRE
*/
function mostrar()
{
	let contador;
	let acumulador;
	let numeroIngresado;

	acumulador = 0;
	contador = 0;
	
	while (contador < 5 ){
		
		contador++;
		
		numeroIngresado = prompt("Ingrese un numero:");
		numeroIngresado = parseInt(numeroIngresado);
		
		acumulador = acumulador + numeroIngresado;
		
	}
	
	
	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = acumulador/5;

}//FIN DE LA FUNCIÓN