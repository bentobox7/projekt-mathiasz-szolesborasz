let feherkepek = []
let feherh2 = []
let feherp = []
let rosekepek = []
let roseh2 = []
let rosep = []
let voroskepek = []
let vorosh2 = []
let vorosp = []
let i = 0;

var f = document.getElementById("feher");
var r = document.getElementById("rose");
var v = document.getElementById("voros");
var k = document.getElementById("kviz");
var fb = document.getElementById("feherb");
var rb = document.getElementById("roseb");
var vb = document.getElementById("vorosb");
var kb = document.getElementById("kvizb");
var bezar = document.getElementsByClassName("bezar")[0];

fb.onclick = function () {
  f.style.display = "block";
}
rb.onclick = function () {
  r.style.display = "block";
}
vb.onclick = function () {
  v.style.display = "block";
}
kb.onclick = function () {
  k.style.display = "block";
}

function Bezaras(id) {
  id.style.display = "none";
}

function FeltoltF() {
  i++;
  let k = document.getElementById("feherkep");
  let h = document.getElementById("feherh2");
  let p = document.getElementById("feherp");
}
function FeltoltR() {
  i++;
  let k = document.getElementById("rosekep");
  let h = document.getElementById("roseh2");
  let p = document.getElementById("rosep");
}
function FeltoltV() {
  i++;
  let k = document.getElementById("voroskep");
  let h = document.getElementById("vorosh2");
  let p = document.getElementById("vorosp");

}


function submitQuiz() {
  const form = document.getElementById('quizForm');
  const result = document.getElementById('result');
  const formData = new FormData(form);
  let score = 0;

  for (let [key, value] of formData.entries()) {
    score += parseInt(value);
  }

  let message = "";
  if (score === 5) {
    message = "🏅 Gratulálunk! Valódi borszakértő vagy!";
  } else if (score >= 3) {
    message = "🍇 Szép munka! Jó úton jársz, hogy borszakértő legyél.";
  } else {
    message = "🍷 Még van mit tanulni – irány egy borkóstoló!";
  }

  result.textContent = `Eredményed: ${score}/5 – ${message}`;
}