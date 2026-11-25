/*=======================================================================
1. BUSCANDO ELEMENTOS DEL HTML
=========================================================================*/
document.addEventListener("DOMContentLoaded", function () {
// Panel lateral a mostrar.
const sidebar = document.getElementById('sidebar');
// Elementos del panel con la información:
const panelTitle = document.getElementById("panel-title");
const panelDescription = document.getElementById("panel-description");
const panelImage = document.getElementById("panel-image");
const closeButton = document.getElementById("close-panel");

// Partes del SVG cuyo ID empieza por "SALA-"
const zones = document.querySelectorAll('[id^="SALA-"]');

//CoNSOLE LOG
	console.log("Sidebar:", sidebar);
    console.log("Zonas encontradas:", zones.length);
    console.log("Zonas:", zones);


/*=======================================================================
2. INFORMACIÓN DE CADA ZONA
=========================================================================*/

// Relación ID del SVG con la información mostrada.

const mapaData = {

//SVG PLANTA BAJA:  

	"SALA-ENT": {
		title: "Entrada",
		description: "Te damos la bienvenida a las instalaciones de LB:39. Esperamos que tu estancia trabajando con nosotros te resulte lo más amena posible."
	},

	"SALA-COM": {
		title: "Comedor",
		description: "Aquí podrás hacer tus comidas diarias. Está terminantemente prohibido llevar alimentos al piso inferior."
	},



	"SALA-OFF": {
		title: "Oficinas",
		description: "Aquí podrás consultar con recursos humanos en caso de que lo necesites. En caso de haber algún problema, se pide la mayor discrección posible. Seguro que podemos solucionarlo sin necesidad de que los rumores vuelen."
	},



	"SALA-DOR3": {
		title: "Dormitorio N3",
		description: "Exclusivo para los trabajadores del laboratorio 4. Obligatorio desinfección previa antes de ir a la planta baja y se prohíbe completamente relacionarse con los trabajadores del resto de laboratorios en el tiempo de descanso si no es extrictamente necesario."
	},


	"SALA-DOR4": {
		title: "Dormitorio N4",
		description: "Exclusivo para los trabajadores del laboratorio 5 y de la sala de especímenes. Se pide por favor no colar a ningún animal, planta o insecto a la planta baja y dormitorio por inofensivo que sea. Desinfección previa: opcional."
	},



	"SALA-DOR1": {
		title: "Dormitorio N1",
		description: "Exclusivo para los trabajaores del laboratorio 1 y morgue. Es obligatorio la desinfección previa a la entrada a la planta baja y dormitorio."
	},

	"SALA-DOR2": {
		title: "Dormitorio N2",
		description: "Exclusivo para los trabajadores de los laboratorios 2 y 3. Es obligatorio el reconocimiento médico previo y desinfección en caso de ser necesario antes de entrar a la planta baja y dormitorio."
	},


	//SVG PLANTA MENOS UNO:

	"SALA-MNT": {
		title: "Mantenimiento",
		description: "Habitación de las herramientas. Esta sala no está conectada al sistema de seguridad. Tengalo en cuenta en caso de emergencia sanitaria." 
	},  

	"SALA-LAB2": {
		title: "Laboratorio 2",
		description: "Unidad de investigación de patógenos." 
	},  

	"SALA-LAB3": {
		title: "Laboratorio 3",
		description: " Unidad de investigación de formas de vida parasitarias." 
	},  

	"SALA-LAB1": {
		title: "laboratorio 1",
		description: "Unidad de realización de autopsias y analisis de muestras biológicas." 
	},  

	"SALA-DEP": {
		title: "Depósito",
		description: "Sala  de almacenaje y destrucción de cuerpos y muestras biológicas." 
	},  

	"SALA-ASC_x5F_PT-1": {
		title: "Acensores planta -1",
		description: "Reservados para el transporte de material sensible entre las plantas -1 y -2. Por favor si necesitan bajar usen las escaleras despúés de desinfectarse correctamente." 
	},  

	"SALA-LAB4": {
		title: "Laboratorio 4",
		description: " Unidad de investigación biotecnológica." 
	},  

	"SALA-LAB5": {
		title: "Laboratorio 5",
		description: "Unidad de investigación de creación e hibridación de especies." 
	},  

	"SALA-ESP": {
		title: "Sala de especímenes",
		description: "Aquí se almacenan y cuidan a las criaturas viables. Se pide que por favor no se encariñen con las criaturas. Siguen siendo objetos de investigación.",
		image: "sketch_bunnmoth.png"
	},  
 

	//SVG PLANTA MENOS DOS:

	"SALA-STRL": {
		title: "Sala de esterilización",
		description: "Habitación dedicada a la desinfección de todo el material quirúrugico, probetas, trajes, etc. En caso de emergencia use la sala y ducha de esterilización de su unidad de invesigación." 
	},

	"SALA-ASS": {
		title: "Aseos",
		description: " Equipados con duchas y retretes para uso común." 
	},

	"SALA-ASC_x5F_PT-2": {
		title: "Ascensores planta -2",
		description: " Reservados para el transporte de material sensible entre las plantas -1 y -2. Por favor si necesitan subir usen las escaleras."
	}, 

	"SALA-ARC": {
		title: "Archivos",
		description: "Sala repleta de libros, documentos e información pública de todo tipo. Sientete libre de consutar lo que necesites cuando necesites. No  está cubierto bajo el sistema de seguridad."
	}, 

	"SALA-ALM": {
		title: "Almacén",
		description: "Sala en la que se conserva diferente material de investigación. No está cubierto bajo el sistema de seguridad."
	}, 

	"SALA-LVND": {
		title: "Lavandería",
		description: "Habitación dedicada a la limpieza de sábanas y ropa. esta sala no está cubierta bajo el sistema de seguridad."
	}, 

	"SALA-EMER": {
		title: "Salida de emergencia",
		description: "Se recuerda que esta puerta está bajo el sistema de seguridad, es obligatorio leerse el manual de emergencias para saber cómo evacuar correctamente las instalaciones antes de que estas queden selladas del mundo exterior. En caso de quedarse encerrado en las instalaciones, estas no se volverána abrir hasta que la emergencia haya sido neutralizada."
	}
};

/*=======================================================================
3. DETECCIÓN DE CLICKS
=========================================================================*/
// Recorremos todas las zonas del SVG
zones.forEach(function(zone){

    zone.addEventListener("click", function() {

    	console.log("Clic detectado:", zone.id);

        // Obtenemos el ID de la zona seleccionada
        const zoneId = zone.id;

        // Buscamos su información
        const info = mapaData[zoneId];

        // Si no existe información, no hacemos nada.
        if (!info) {
        	console.error("No hay información para:", zone.id);
        	return;
        }

        //Actualizamos el título y las descripción del panel.
            panelTitle.textContent = info.title;
            panelDescription.textContent = info.description;

            // Mostramos el panel lateral
            sidebar.classList.add("open");

            console.log("Sidebar abierto:", sidebar.classList.contains("open"));

        // imagen del sidebar
         const panelImage = document.getElementById("panel-image");

         if (info.image) {
    		panelImage.src = info.image;
   			panelImage.style.display = "block";
		} else {
    		panelImage.style.display = "none";
		}

    });

});


/*=======================================================================
4. CERRAR PANEL
=========================================================================*/
closeButton.addEventListener("click", function() {
        sidebar.classList.remove("open");
    });

});

/*=======================================================================
4. MOVERSE ENTRE PLANTAS
=========================================================================*/

const boton1 = document.getElementById("ir-planta1");
const boton2 = document.getElementById("ir-planta0");
const boton3 = document.getElementById("ir-planta2");
const boton4 = document.getElementById("volver-planta1");

boton1.addEventListener("click", function () {
	document.getElementById('PlantaBaja').classList.remove("activo");
	document.getElementById('PlantaMenosUno').classList.add("activo");
});

boton2.addEventListener("click", function () {
	document.getElementById('PlantaMenosUno').classList.remove("activo");
	document.getElementById('PlantaBaja').classList.add("activo");
});

boton3.addEventListener("click", function () {
	document.getElementById('PlantaMenosUno').classList.remove("activo");
	document.getElementById('PlantaMenosDos').classList.add("activo");
});

boton4.addEventListener("click", function () {
	document.getElementById('PlantaMenosDos').classList.remove("activo");
	document.getElementById('PlantaMenosUno').classList.add("activo");
});