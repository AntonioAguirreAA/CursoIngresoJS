/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let importe;
	let aumento;
	let resultado;

	importe = parseInt(txtIdSueldo.value);
	aumento = (importe / 10)
	resultado = (importe + aumento);

	txtIdResultado.value = resultado;
}
