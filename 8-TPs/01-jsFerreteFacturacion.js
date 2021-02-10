/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar ()
{
	let numero1;
	let numero2;
	let numero3;
	let resultado;

	numero1 = parseInt(document.getElementById("txtIdPrecioUno").value);
	numero2 = parseInt(document.getElementById("txtIdPrecioDos").value);
	numero3 = parseInt(document.getElementById("txtIdPrecioTres").value);

	resultado = numero1 + numero2 + numero3;

	alert("La suma es: " + resultado);

}
function Promedio ()
{
	let numero1;
	let numero2;
	let numero3;
	let resultado;

	numero1 = parseInt(document.getElementById("txtIdPrecioUno").value);
	numero2 = parseInt(document.getElementById("txtIdPrecioDos").value);
	numero3 = parseInt(document.getElementById("txtIdPrecioTres").value);
	resultado = (numero1 + numero2 + numero3) / 3;

	alert("El promedio es: " + resultado);
}
function PrecioFinal ()
{
	let numero1;
	let numero2;
	let numero3;
	let resultado;

	resultado = parseFloat(resultado)

	numero1 = parseInt(document.getElementById("txtIdPrecioUno").value);
	numero2 = parseInt(document.getElementById("txtIdPrecioDos").value);
	numero3 = parseInt(document.getElementById("txtIdPrecioTres").value);

	resultado = numero1 + numero2 + numero3;
	resultado = (resultado * 27 / 100) + resultado;

	alert("El precio final con IVA es: " + resultado);
}
