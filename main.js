// Inicializar variables
let producto = '';
let cantidad = 0;
let precio = 0;
let seguirComprando = false;
let precioTotal = 0;
let cantidadTotal = 0;

do {
  producto = prompt('Qué producto desea comprar? galletas, cinnamons, helado o todos');
  cantidad = parseInt(prompt('Ingrese la cantidad a comprar:'));

  switch (producto) {
    case 'galletas':
      precio = 2500;
      break;
    case 'cinnamons':
      precio = 3000;
      break;
    case 'helado':
      precio = 2000;
      break;
    case 'todos':
      precio = 7500;
    default:
      alert('Producto no disponible!');
      cantidad = 0
      break;
  }

  precioTotal += precio * cantidad;
  cantidadTotal += cantidad;

  seguirComprando = confirm('Queres seguir comprando?');

} while (seguirComprando)

alert('Ha comprado '+cantidadTotal+' productos y el total es: '+precioTotal);