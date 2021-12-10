function validar() {
	var nombre, carrera, edad, fecha, expresion;
	nombre = document.getElementById("Nombre").value;
	carrera = document.getElementById("Carrera").value;
	edad = document.getElementById("Edad").value
	fecha = document.getElementById("Fecha").value;
	const añoActual = fecha.getFullYear();

	if (nombre ==="" || carrera==="" || edad==="" || fecha==="") {
		alert("Todos los campos son obligartorios");
		return	false;
	}
	if (edad<=15) {
		alert("Edad incorrecta");
		return	false;
	}
	else if (edad>99) {
		alert("Edad incorrecta");
		return false;
	}
}

function consumirAPI(){
	var caldas=[];
	var antioquia=[];
	var bogota=[];
	var fecha=[];

	fetch('https://www.datos.gov.co/resource/8835-5baf.json')
		.then(respuesta_exitosa => respuesta_exitosa.json())
		.then(function (datos_obtenidos){
			datos_obtenidos.forEach (elemento =>{
				if (elemento.fecha != undefined && elemento.caldas != undefined && elemento.antioquia != undefined && elemento.bogota){
					caldas.push (elemento.caldas);
					antioquia.push (elemento.antioquia);
					bogota.push (elemento.bogota);
					fecha.push(elemento.fecha);
				}
			});
			var graf1 = {
				y: caldas,
				x: fecha,
				name: 'Caldas',
				type: 'bar'
			};

			var graf2 = {
				y: antioquia,
				x: fecha,
				name: 'Antioquia',
				type: 'bar'
			};
			var graf3 = {
				y: bogota,
				x: fecha,
				name: 'Bogotá',
				type: 'bar'
			};
			
			var datosGraficas [srafl, graf2, graf3];

			var layout ={
				bardome: 'stack',
				title:{
					text: 'Pruebas PCR realizadas en Colombia'
				},
			};
			Polty.newPlot('grafico',datosGraficas,layout);;
		}
		
}
consumirAPI();