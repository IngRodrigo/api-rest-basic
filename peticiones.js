const url="https://api.pagopar.com/api/comercios/1.1/iniciar-transaccion";
const data={
	"token": "c35f520cdfeeb5a80d153143f158bc18ab0e2ccc",
	"comprador": {
		"ruc": "4247903-7",
		"email": "fernandogoetz@gmail.com",
		"ciudad": null,
		"nombre": "Rudolph Goetz",
		"telefono": "0972200046",
		"direccion": "",
		"documento": "4247903",
		"coordenadas": "",
		"razon_social": "Rudolph Goetz",
		"tipo_documento": "CI",
		"direccion_referencia": null
	},
	"public_key": "1865dfc68ac7eb377a269f4c66900711",
	"monto_total": 100000,
	"tipo_pedido": "VENTA-COMERCIO",
	"compras_items": [{
		"ciudad": "1",
		"nombre": "Ticket virtual a evento Ejemplo 2017",
		"cantidad": 1,
		"categoria": "909",
		"public_key": "98b97ce494801bf26575a5c4ff2d4f14",
		"url_imagen": "",
		"descripcion": "Pago Matriculacion",
		"id_producto": 123,
		"precio_total": 100000,
		"vendedor_telefono": "",
		"vendedor_direccion": "",
		"vendedor_direccion_referencia": "",
		"vendedor_direccion_coordenadas": ""
	}],
	"fecha_maxima_pago": "2020-02-10 14:14:48",
	"id_pedido_comercio": "1134",
	"descripcion_resumen": ""
}

var myHeaders = new Headers();
myHeaders.append("Access-Control-Allow-Origin","*");
myHeaders.append("Access-Control-Allow-Credentials", "true");
myHeaders.append("Access-Control-Allow-Methods"," POST, GET, OPTIONS");
myHeaders.append("Access-Control-Allow-Headers"," Content-Type, Authorization, X-Requested-With");
myHeaders.append("Content-Type"," application/json");

fetch(url, {
  method: 'POST', // or 'PUT'
  body: JSON.stringify(data), // data can be `string` or {object}!
  headers:myHeaders
}).then(res => res.json())
.catch(error => console.error('Error:', error))
.then(response => console.log('Success:', response));