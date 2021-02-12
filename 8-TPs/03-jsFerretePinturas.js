/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	let temperaturaIngresada;
    let temperaturaConvertida;
    temperaturaIngresada = parseFloat (document.getElementById("txtIdTemperatura").value);

    temperaturaConvertida = (temperaturaIngresada - 32) / 1.8;

    alert (temperaturaIngresada + "° Farenheit son " + temperaturaConvertida + "° Centigrados." );

}

function CentigradosFahrenheit () 
{
	let temperaturaIngresada;
    let temperaturaConvertida;
    temperaturaIngresada = parseFloat (document.getElementById("txtIdTemperatura").value);

    temperaturaConvertida = (temperaturaIngresada * 1.8) + 32;

    alert (temperaturaIngresada + "° Celcius son " + temperaturaConvertida + "° Farenheit." );
}
