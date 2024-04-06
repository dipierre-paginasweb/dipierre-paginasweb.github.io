// Valores predeterminados (medidas en metros)

var valorescamadoble = {
    longitud: 1.90,
    ancho: 1.35,
    alto: 0.25
};// OK

var valorescamasimple = {
    longitud: 1.90,
    ancho: 0.9,
    alto: 0.25
};// OK

var valorescabecera = {
    longitud: 1.5,
    ancho: 0.8,
    alto: 0.06
};// OK

var valorescuna = {
    longitud: 1.5,
    ancho: 0.8,
    alto: 0.06
};// OK

var valoresalmohada = {
    longitud: 4,
    ancho: 2,
    alto: 3
};

var valoresTelevisor = {
    longitud: 4,
    ancho: 2,
    alto: 3
};

var valoresmesanoche = {
    longitud: 4,
    ancho: 2,
    alto: 3
};

var valoreslamparapequeña = {
    longitud: 4,
    ancho: 2,
    alto: 3
};

var valoresespejo = {
    longitud: 4,
    ancho: 2,
    alto: 3
};

var valoresSofa = {
    longitud: 1,
    ancho: 2,
    alto: 2
};

var valoreslampara = {
    longitud: 1,
    ancho: 2,
    alto: 2
};

var valorescuadro = {
    longitud: 1,
    ancho: 2,
    alto: 2
};

var valoresnevera = {
    longitud: 1,
    ancho: 2,
    alto: 2
};

var cantidades = {
    camadoble: 1,
    camasimple: 1,
    cabecera: 1,
    almohada: 1,
    televisor: 1,
    mesanoche: 1,
    lamparapequeña: 1,
    espejo: 1,
    sofa: 1,
    lampara: 1,
    cuadro: 1,
    nevera: 1
};

var objetosSeleccionados = []; // Almacena los objetos seleccionados

// Función para agregar o quitar objetos de la lista de seleccionados
function toggleObjeto(objeto) {
    var index = objetosSeleccionados.indexOf(objeto);

    if (index === -1) {
        objetosSeleccionados.push(objeto);
    } else {
        objetosSeleccionados.splice(index, 1);
    }


    // Cambiar apariencia de las imágenes según la selección
    document.getElementById("camadoble-container").classList.toggle("seleccionado", objetosSeleccionados.includes("objeto"));



    // Calcular y mostrar el volumen
    calcularYMostrarVolumen();
}

function actualizarCantidad(objeto, cantidad) {
    cantidades[objeto] = parseInt(cantidad);
    calcularYMostrarVolumen();
}


function calcularYMostrarVolumen() {
    // Calcular volumen total
    var volumen = 0;

    for (var i = 0; i < objetosSeleccionados.length; i++) {
        var objeto = objetosSeleccionados[i];
        var cantidad = cantidades[objeto];

        if (objeto === "camadoble") {
            volumen += (cantidad * valorescamadoble.longitud * valorescamadoble.ancho) * valorescamadoble.alto;

        } else if (objeto === "camasimple") {
            volumen += cantidad * valorescamasimple.longitud * valorescamasimple.ancho * valorescamasimple.alto;        
            
        } else if (objeto === "cabecera") {
            volumen += cantidad * valorescabecera.longitud * valorescabecera.ancho * valorescabecera.alto; 

        } else if (objeto === "televisor") {
            volumen += cantidad * valoresTelevisor.longitud * valoresTelevisor.ancho * valoresTelevisor.alto;

        } else if (objeto === "mesanoche") {
            volumen += cantidad * valoresmesanoche.longitud * valoresmesanoche.ancho * valoresmesanoche.alto;

        } else if (objeto === "lamparapequeña") {
            volumen += cantidad * valoreslamparapequeña.longitud * valoreslamparapequeña.ancho * valoreslamparapequeña.alto;

        } else if (objeto === "espejo") {
            volumen += cantidad * valoresSofa.longitud * valoresSofa.ancho * valoresSofa.alto;

        } else if (objeto === "sofa") {
            volumen += cantidad * valoresnevera.longitud * valoresnevera.ancho * valoresnevera.alto;

        } else if (objeto === "lampara") {
            volumen += cantidad * valoreslampara.longitud * valoreslampara.ancho * valoreslampara.alto;

        } else if (objeto === "cuadro") {
            volumen += cantidad * valorescuadro.longitud * valorescuadro.ancho * valorescuadro.alto;

        } else if (objeto === "nevera") {
            volumen += cantidad * valoresnevera.longitud * valoresnevera.ancho * valoresnevera.alto;
        }
        // Puedes agregar más objetos aquí según sea necesario
    }

    // Redondear volumen a 2 dígitos decimales
    volumen = volumen.toFixed(2);

    // Mostrar resultado
    document.getElementById("resultado").innerHTML = "El volumen total es: " + volumen + "m³";

    // Actualizar resumen de objetos seleccionados
    mostrarResumen();
}


function mostrarResumen() {
    var listaResumen = document.getElementById("listaResumen");
    listaResumen.innerHTML = ""; // Limpiar la lista antes de actualizar

    for (var i = 0; i < objetosSeleccionados.length; i++) {
        var objeto = objetosSeleccionados[i];
        var cantidad = cantidades[objeto];

        if (cantidad) {
            var listItem = document.createElement("li");
            var nombre = obtenerNombre(objeto);
            listItem.textContent = cantidad + " " + nombre + "(s)";
            listaResumen.appendChild(listItem);
        }
    }
}


function obtenerNombre(objeto) {
    var checkboxId = "checkbox" + objeto;
    var nombre = $("#" + checkboxId).data('nombre') || objeto;
    return nombre;
}



// Inicializar la lista de resumen al cargar la página
document.addEventListener("DOMContentLoaded", function () {
    mostrarResumen();
});


$(document).ready(function() {
    $('#recamara').on('click', function() {
        
        $(this).toggleClass('seleccionado');
        $('#sala').removeClass('seleccionado');
        $('#cocina').removeClass('seleccionado');
        $('#patio').removeClass('seleccionado');
        $('#oficina').removeClass('seleccionado');
        $('#otros').removeClass('seleccionado');

        // Mostrar imágenes para la sección Recámara
        $('#recamaraImagenes').show();
        // Ocultar imágenes para las demás secciones
        $('#salaImagenes').hide();
        $('#cocinaImagenes').hide();
        $('#patioImagenes').hide();
        $('#oficinaImagenes').hide();
        $('#otrosImagenes').hide();
    });

    $('#sala').on('click', function() {
        
        $(this).toggleClass('seleccionado');
        $('#recamara').removeClass('seleccionado');
        $('#cocina').removeClass('seleccionado');
        $('#patio').removeClass('seleccionado');
        $('#oficina').removeClass('seleccionado');
        $('#otros').removeClass('seleccionado');

        // Mostrar imágenes para la sección sala
        $('#salaImagenes').show();
        // Ocultar imágenes para las demás secciones
        $('#recamaraImagenes').hide();
        $('#cocinaImagenes').hide();
        $('#patioImagenes').hide();
        $('#oficinaImagenes').hide();
        $('#otrosImagenes').hide();
    });

    $('#cocina').on('click', function() {
        
        $(this).toggleClass('seleccionado');
        $('#recamara').removeClass('seleccionado');
        $('#sala').removeClass('seleccionado');
        $('#patio').removeClass('seleccionado');
        $('#oficina').removeClass('seleccionado');
        $('#otros').removeClass('seleccionado');

        // Mostrar imágenes para la sección cocina
        $('#cocinaImagenes').show();
        // Ocultar imágenes para las demás secciones
        $('#recamaraImagenes').hide();
        $('#salaImagenes').hide();
        $('#patioImagenes').hide();
        $('#oficinaImagenes').hide();
        $('#otrosImagenes').hide();
    });

    $('#patio').on('click', function() {
        
        $(this).toggleClass('seleccionado');
        $('#recamara').removeClass('seleccionado');
        $('#sala').removeClass('seleccionado');
        $('#cocina').removeClass('seleccionado');
        $('#oficina').removeClass('seleccionado');
        $('#otros').removeClass('seleccionado');

        // Mostrar imágenes para la sección patio
        $('#patioImagenes').show();
        // Ocultar imágenes para las demás secciones
        $('#recamaraImagenes').hide();
        $('#salaImagenes').hide();
        $('#cocinaImagenes').hide();
        $('#oficinaImagenes').hide();
        $('#otrosImagenes').hide();
    });

    $('#oficina').on('click', function() {
        
        $(this).toggleClass('seleccionado');
        $('#recamara').removeClass('seleccionado');
        $('#sala').removeClass('seleccionado');
        $('#cocina').removeClass('seleccionado');
        $('#patio').removeClass('seleccionado');
        $('#otros').removeClass('seleccionado');

        // Mostrar imágenes para la sección oficina
        $('#oficinaImagenes').show();
        // Ocultar imágenes para las demás secciones
        $('#recamaraImagenes').hide();
        $('#salaImagenes').hide();
        $('#cocinaImagenes').hide();
        $('#patioImagenes').hide();
        $('#otrosImagenes').hide();
    });

    $('#otros').on('click', function() {
        
        $(this).toggleClass('seleccionado');
        $('#recamara').removeClass('seleccionado');
        $('#sala').removeClass('seleccionado');
        $('#cocina').removeClass('seleccionado');
        $('#patio').removeClass('seleccionado');
        $('#oficina').removeClass('seleccionado');

        // Mostrar imágenes para la sección otros
        $('#otrosImagenes').show();
        // Ocultar imágenes para las demás secciones
        $('#recamaraImagenes').hide();
        $('#salaImagenes').hide();
        $('#cocinaImagenes').hide();
        $('#patioImagenes').hide();
        $('#oficinaImagenes').hide();
    });
});

// Asegúrate de tener incluida la biblioteca de jQuery antes de este script

function scrollToTitulo() {
    const tituloSection = document.getElementById('titulo');
    tituloSection.scrollIntoView({ behavior: 'smooth' });
}

function mostrarImagenes(seccionId) {
    // Ocultar todas las imágenes con un tiempo de desvanecimiento de 500 milisegundos
    const secciones = ['recamaraImagenes', 'salaImagenes', 'cocinaImagenes', 'OtrosImagenes'];
    secciones.forEach(seccion => {
        $('#' + seccion).fadeOut(500);
    });

    // Mostrar la sección correspondiente con un tiempo de desvanecimiento de 500 milisegundos
    $('#' + seccionId).fadeIn(500);
}


// Función para mostrar el texto desvaneciente
function mostrarTexto(objeto) {
    var texto = document.getElementById("texto" + objeto);
    texto.style.display = "block";
}

// Función para ocultar el texto desvaneciente
function ocultarTexto(objeto) {
    var texto = document.getElementById("texto" + objeto);
    texto.style.display = "none";
}
  