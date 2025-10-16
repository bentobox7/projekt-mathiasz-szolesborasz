let feherkepek = ["szuret_f.jpg","preseles.jpg","ulepites_f.jpg","erjesztes.jpg","erleles_f.jpg","feherbor.png"]
let feherh2 = ["Szőlőszüret","Zúzás és préselés","Ülepítés","Erjesztés", "Érlelés", "Szűrés és palackozás"]
let feherp = ["Általában zöld vagy sárga héjú szőlőt használnak.", "A szőlőt azonnal kipréselik, hogy a héjból ne oldódjon ki szín vagy fanyar anyag.", "A mustot hagyják leülepedni, hogy a zavaros részecskék eltávolíthatók legyenek.", " A tiszta mustot alacsony hőmérsékleten, rozsdamentes acéltartályokban erjesztik, így megőrzik a friss, gyümölcsös aromákat.", "Rövidebb ideig tart, gyakran tartályban, ritkábban hordóban.", "A bort letisztítják, majd palackozzák."]
let rosekepek = ["szuret_r.jpg","preseles.jpg","logo.png","preseles2.jpg","erjesztes.jpg","rose.png"]
let roseh2 = ["Szőlőszüret", "Zúzás", "Rövid héjon áztatás","Préselés","Erjesztés","Érlelés és palackozás"]
let rosep = ["Kék szőlőfajtákból készül.", "A szőlőszemeket enyhén zúzzák.", "A héjjal együtt hagyják állni 6–24 óráig (szemben a vörösbor hosszabb héjon erjesztésével), hogy csak enyhe szín és kevés tannin oldódjon ki.", "Az áztatás után a levet elválasztják a héjtól.","Hasonló módon történik, mint a fehérboroknál, alacsony hőmérsékleten.", "Gyorsabban piacra kerül, friss, üde stílusban."]
let voroskepek = ["szuret_r.jpg","zuzas.jpg","erjesztes.jpg","csomosz.jpg","preseles.jpg","erleles_f.jpg","vorosbor.png"]
let vorosh2 = ["Szőlőszüret", "Zúzás és bogyózás", "Erjesztés héjjal együtt", "Csömöszölés", "Préselés", "Érlelés", "Szűrés és palackozás"]
let vorosp = ["Érett, kék szőlőt szüretelnek.", "A szőlőszemeket összezúzzák, leválasztják a szárakat.", "A cefrét (zúzott szőlő héjjal, maggal) tartályba töltik, és természetes vagy hozzáadott élesztővel erjesztik. A héj jelenléte biztosítja a bor sötét színét és a tanninokat, amelyek a bor szerkezetéért és érlelhetőségéért felelősek.", "Az erjedés alatt a héjat folyamatosan visszanyomják a lébe, hogy jobb szín- és ízanyag-kioldódást érjenek el.", "Az erjedés után a bort lefejtik, a visszamaradt héjat és magot kipréselik.", "A bort fahordóban vagy rozsdamentes tartályban érlelik több hónapig, akár évekig is.", " A bort letisztítják, majd palackozzák."]

let kerdesek = ["Melyik színű bor készül kék szőlőből?", "Melyik színű bor készül a héjon áztatás után kipréselt mustból?", "Melyik színű bor erjed a héjon és magon?", "Melyik bort érlelik a leghosszabb ideig?"]
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
var fk = document.getElementById("feherkep");
var rk = document.getElementById("rosekep");
var vk = document.getElementById("voroskep");
var fh = document.getElementById("feherh2");
var rh = document.getElementById("roseh2");
var vh = document.getElementById("vorosh2");
var fp = document.getElementById("feherp");
var rp = document.getElementById("rosep");
var vp = document.getElementById("vorosp");
var bezar = document.getElementsByClassName("bezar")[0];
var modalgombf = document.getElementById("modalgombf");
var modalgombr = document.getElementById("modalgombr");
var modalgombv = document.getElementById("modalgombv");
var modalgombfv = document.getElementById("modalgombfv");
var modalgombrv = document.getElementById("modalgombrv");
var modalgombvv = document.getElementById("modalgombvv");

fb.onclick = function () {
  f.style.display = "block";
  i = 0;
  fk.src = `kepek/${feherkepek[i]}`;
  fh.innerHTML = feherh2[i];
  fp.innerHTML = feherp[i];
  modalgombf.style.display = "block";
  modalgombfv.style.display = "none";
}
rb.onclick = function () {
  r.style.display = "block";
  i = 0;
  rk.src = `kepek/${rosekepek[i]}`;
  rh.innerHTML = roseh2[i];
  rp.innerHTML = rosep[i];
  modalgombr.style.display = "block";
  modalgombrv.style.display = "none";
}
vb.onclick = function () {
  v.style.display = "block";
  i = 0;
  vk.src = `kepek/${voroskepek[i]}`;
  vh.innerHTML = vorosh2[i];
  vp.innerHTML = vorosp[i];
  modalgombv.style.display = "block";
  modalgombvv.style.display = "none";
}

kb.onclick = function () {
  k.style.display = "block";
}
modalgombf.onclick = function() {
  i++;
  fk.src = `kepek/${feherkepek[i]}`;
  fh.innerHTML = feherh2[i];
  fp.innerHTML = feherp[i];
  if (i == feherkepek.length - 1) {
    modalgombf.style.display = "none";
  }
  modalgombfv.style.display = "block";
}
modalgombr.onclick = function() {
  i++;
  rk.src = `kepek/${rosekepek[i]}`;
  rh.innerHTML = roseh2[i];
  rp.innerHTML = rosep[i];
  if (i == rosekepek.length - 1) {
    modalgombr.style.display = "none";
  }
  modalgombrv.style.display = "block";
}
modalgombv.onclick = function() {
  i++;
  vk.src = `kepek/${voroskepek[i]}`;
  vh.innerHTML = vorosh2[i];
  vp.innerHTML = vorosp[i];
  if (i == voroskepek.length - 1) {
    modalgombv.style.display = "none";
  }
  modalgombvv.style.display = "block";
}

modalgombfv.onclick = function() {
  i--;
  fk.src = `kepek/${feherkepek[i]}`;
  fh.innerHTML = feherh2[i];
  fp.innerHTML = feherp[i];
  if (i == 0) {
    modalgombfv.style.display = "none";
  }
  modalgombf.style.display = "block";
}
modalgombrv.onclick = function() {
  i--;
  rk.src = `kepek/${rosekepek[i]}`;
  rh.innerHTML = roseh2[i];
  rp.innerHTML = rosep[i];
  if (i == 0) {
    modalgombrv.style.display = "none";
  }
  modalgombr.style.display = "block";
}
modalgombvv.onclick = function() {
  i--;
  vk.src = `kepek/${voroskepek[i]}`;
  vh.innerHTML = vorosh2[i];
  vp.innerHTML = vorosp[i];
  if (i == 0) {
    modalgombvv.style.display = "none";
  }
  modalgombv.style.display = "block";
}

function Bezaras(id) {
  id.style.display = "none";
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