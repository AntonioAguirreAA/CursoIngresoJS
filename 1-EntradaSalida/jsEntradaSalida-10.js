/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let importe = parseInt(txtIdImporte.value);
	let aumento = (importe / 4)
	let resultado = (importe - aumento);

	txtIdResultado.value = resultado;

}
