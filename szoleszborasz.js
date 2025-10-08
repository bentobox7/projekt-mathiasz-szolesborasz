var f = document.getElementById("feher");
var r = document.getElementById("rose");
var v = document.getElementById("voros");
var fb = document.getElementById("feherb");
var rb = document.getElementById("roseb");
var vb = document.getElementById("vorosb");
var bezar = document.getElementsByClassName("bezar")[0];

fb.onclick = function() {
  f.style.display = "block";
}
rb.onclick = function() {
  r.style.display = "block";
}
vb.onclick = function() {
  v.style.display = "block";
}

function Bezaras(id) {
  id.style.display = "none";
}