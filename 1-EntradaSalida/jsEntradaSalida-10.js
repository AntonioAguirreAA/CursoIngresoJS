/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let importe;
	let aumento;
	let resultado;

	importe = parseInt(txtIdImporte.value);
	aumento = (importe / 4)
	resultado = (importe - aumento);

	txtIdResultado.value = resultado;

}
