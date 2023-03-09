document.getElementById("icon_menu").addEventListener("click", mostrar_menu);

function mostrar_menu(){

    document.querySelector(".menu").classList.toggle("mostrar_menu");
    
}

window.onscroll = function () {
    var posicion = window.pageYOffset || document.documentElement.scrollTop;
    var elemento1 = document.getElementById("icon_heart");
    var elemento2 = document.getElementById("icon_fire");
    elemento1.style.bottom = posicion * 0.1 + "px";
    elemento2.style.top = posicion * 0.1 + "px";
}

var boton = document.getElementById("limpiar").addEventListener("click", limpiar);
var clase = document.getElementById("unidad");
var tema = document.getElementById("tema");
var info_tema = document.getElementById("info_tema");

function limpiar() {
    clase.remove();
    tema.textContent = "Inteligencias Multiples";
    info_tema.innerHTML = "La generación de ideas es un proceso innato en el ser humano, nuestro cerebro asocia los estímulos que recibe con la información que ya tienem provocando la imaginación y la creatividad. Una idea no es más que una nueva combinación de elementos. La gente con mayor capacidad creativa es más sensible a las percepciones sensoriales y de inmediato generan las relaciones entre ellas, facilitando el proceso creativo. <br><br><strong>Desarrollo de Ideas</strong>                                     <br><br>Creatividad: Capacidad de Crear, es la producción de una idea, un concepto, una creación o un descubrimiento que es nuevo, original, útil y que satisface tanto a su creador como a otros durante algún periodo. <br><br>El proceso creativo: Tiene su origen en el cerebro; órgano funamental del ser humano y es quizás el menos comprendido <br><br>Hemisferio Izquierdo: El habla, la escritura, razonamiento lógico, matemático y analítico, analísis secuencial de hechosm conciencia del teimpo, etc. <br><br>Hemisferio derecho: Aprecioa la belleza, es no verbal, tiene una visión integradora, es emotivo, base de la creatividad y la intuición, opera a través de imágenes, integra la personalidad del individuo, no es consciente del tiempo, etc <br><br>Hemisferio derecho: Aprecioa la belleza, es no verbal, tiene una visión integradora, es emotivo, base de la creatividad y la intuición, opera a través de imágenes, integra la personalidad del individuo, no es consciente del tiempo, etc <br><br>Hemisferio derecho: Aprecioa la belleza, es no verbal, tiene una visión integradora, es emotivo, base de la creatividad y la intuición, opera a través de imágenes, integra la personalidad del individuo, no es consciente del tiempo, etc";
    // tema.textContent = "Proceso de Pensamiento Creativo";
    // info_tema.textContent = "El pensamiento creativo consiste en la capacidad de salirse de los patrones convencionales de ideación y de inventar nuevas maneras de solución de problemas ode crear algo empleando técnicas novedosas.Cuando hablamos de pensamiento creativo, hacemos alusión a una forma derazonamiento típica de los seres humanos, que es capaz de procesar y reformular lainformación de maneras originales, flexibles, plásticas y fluidas, o bien deaplicarla a la solución de un problema con el que inicialmente no lucía compatible.Es decir que el pensamiento creativo gira en torno a la capacidad deinventiva del ser humano y de su imaginación, las cuales permitieron desde siempredesarrollar herramientas, distintas formas de pensamiento, estrategias desupervivencia o incluso formularse complejas preguntas. Pues el pensamiento creativono sólo tiene que ver con lo estético.";
}