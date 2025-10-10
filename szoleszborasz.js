let feherkepek = ["csomosz.jpg","erjesztes.jpg","erleles_f.jpg","presles.jpg","preseles2.jpg","szolpres.jpg","szuret_f.jpg","szuret_r.jpg","ulepites_f.jpg"]
let feherh2 = ["Szőlőszüret","Zúzás és préselés","Ülepítés","Erjesztés", "Érlelés", "Szűrés és palackozás"]
let feherp = ["Általában zöld vagy sárga héjú szőlőt használnak.", "A szőlőt azonnal kipréselik, hogy a héjból ne oldódjon ki szín vagy fanyar anyag.", "A mustot hagyják leülepedni, hogy a zavaros részecskék eltávolíthatók legyenek.", " A tiszta mustot alacsony hőmérsékleten, rozsdamentes acéltartályokban erjesztik, így megőrzik a friss, gyümölcsös aromákat.", "Rövidebb ideig tart, gyakran tartályban, ritkábban hordóban.", "A bort letisztítják, majd palackozzák."]
let rosekepek = ["csomosz.jpg","erjesztes.jpg","erleles_f.jpg","presles.jpg","preseles2.jpg","szolpres.jpg","szuret_f.jpg","szuret_r.jpg","ulepites_f.jpg"]
let roseh2 = ["Szőlőszüret", "Zúzás", "Rövid héjon áztatás", "Préselés","Erjesztés","Érlelés és palackozás"]
let rosep = ["Kék szőlőfajtákból készül.", "A szőlőszemeket enyhén zúzzák.", "A héjjal együtt hagyják állni 6–24 óráig (szemben a vörösbor hosszabb héjon erjesztésével), hogy csak enyhe szín és kevés tannin oldódjon ki.", "Az áztatás után a levet elválasztják a héjtól.","Hasonló módon történik, mint a fehérboroknál, alacsony hőmérsékleten.", "Gyorsabban piacra kerül, friss, üde stílusban."]
let voroskepek = ["csomosz.jpg","erjesztes.jpg","erleles_f.jpg","presles.jpg","preseles2.jpg","szolpres.jpg","szuret_f.jpg","szuret_r.jpg","ulepites_f.jpg"]
let vorosh2 = ["Szőlőszüret", "Zúzás és bogyózás", "Erjesztés héjjal együtt", "Csömöszölés", "Préselés", "Érlelés", "Szűrés és palackozás"]
let vorosp = ["Érett, kék szőlőt szüretelnek.", "A szőlőszemeket összezúzzák, leválasztják a szárakat.", "A cefrét (zúzott szőlő héjjal, maggal) tartályba töltik, és természetes vagy hozzáadott élesztővel erjesztik. A héj jelenléte biztosítja a bor sötét színét és a tanninokat, amelyek a bor szerkezetéért és érlelhetőségéért felelősek.", "Az erjedés alatt a héjat folyamatosan visszanyomják a lébe, hogy jobb szín- és ízanyag-kioldódást érjenek el.", "Az erjedés után a bort lefejtik, a visszamaradt héjat és magot kipréselik.", "A bort fahordóban vagy rozsdamentes tartályban érlelik több hónapig, akár évekig is.", " A bort letisztítják, majd palackozzák."]

let kerdesek = ["Melyik borvidék híres a Tokaji aszúról?","Melyik NEM fehérszőlő fajta?","Mit jelent a „cuvée”?","Melyik bor típikusan hosszabban érlelhető?","Miért nem ajánlott túl hidegen felszolgálni a vörösbort?"]
let valaszok = []

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

function Quiz(){
  
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
    message = "Gratulálunk! Valódi borszakértő vagy!";
  } else if (score >= 3) {
    message = "Szép munka! Jó úton jársz, hogy borszakértő legyél.";
  } else {
    message = "Még van mit tanulni – irány egy borkóstoló!";
  }

  result.textContent = `Eredményed: ${score}/5 – ${message}`;
}