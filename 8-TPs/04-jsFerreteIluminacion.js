  /*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%.
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó.

 */
 //Antonio Aguirre 1°A

function CalcularPrecio ()
{

 	let cantidad;
  let descuento;
  let precioFinal;
  let marca;
  let impuesto;

  cantidad = parseInt(document.getElementById("txtIdCantidad").value);
  marca = document.getElementById("Marca").value;
  descuento = parseFloat(descuento);

  if (cantidad > 5)   //EJERCICIO A
  {

    descuento = 50;

  }
  switch (cantidad)   
  {
    case 5:   //EJERCICIO B
      if (marca == "ArgentinaLuz")
      {
        descuento = 40;
      } else {
        descuento = 30;
      }

      break;

  
    case 4:   //EJERCICIO C
      if (marca == "ArgentinaLuz" || marca == "FelipeLamparas")
      {
        
        descuento = 25;

      }  else  {

        descuento = 20;

      }
      break;
    
    case 3:   //EJERCICIO D
      switch (marca)
      {
        case "ArgentinaLuz":
          descuento = 15;
          break;

        case "FelipeLamparas":
          descuento = 10;
          break;

        default:
          descuento = 5;
          break;
      }
      break;

  
  }

  precioFinal = parseFloat(precioFinal);
  precioFinal = cantidad * 35;
  precioFinal = precioFinal - (precioFinal * descuento / 100);

  if (precioFinal > 120)
  {

    impuesto = 0.1 + precioFinal
    precioFinal = precioFinal + impuesto
    alert("IIBB Usted pagó: $" + impuesto)
    alert("El precio final es: " + precioFinal);

  } else {
  
    alert("El precio final es: " + precioFinal);

  }

}
