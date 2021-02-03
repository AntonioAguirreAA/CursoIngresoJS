/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar ()
{
	let numero1 = parseInt(txtIdPrecioUno.value);
	let numero2 = parseInt(txtIdPrecioDos.value);
	let numero3 = parseInt(txtIdPrecioTres.value);
	let resultado = numero1 + numero2 + numero3;

	alert("La suma es: " + resultado);

}
function Promedio ()
{
	let numero1 = getElementById('txtIdPrecioUno').value;
	numero1 = parseInt(numero1);
	let numero2 = parseInt(txtIdPrecioDos.value);
	let numero3 = parseInt(txtIdPrecioTres.value);
	let resultado = (numero1 + numero2 + numero3) / 3;

	alert("El promedio es: " + resultado);
}
function PrecioFinal ()
{
	let numero1 = parseInt(txtIdPrecioUno.value);
	let numero2 = parseInt(txtIdPrecioDos.value);
	let numero3 = parseInt(txtIdPrecioTres.value);
	let resultado = numero1 + numero2 + numero3;
	resultado = (resultado * 27 / 100) + resultado;

	alert("El precio final con IVA es: " + resultado);
}
