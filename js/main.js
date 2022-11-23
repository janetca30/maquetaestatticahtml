//funcion active en modal redes-edicion.html
var btnContainer = document.getElementById("icotitle");

var btns = btnContainer.getElementsByClassName("btnir");

for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
    });
}