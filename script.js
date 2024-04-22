let btn = document.getElementById("resultbtn");
let Qone = document.getElementById("q1");
let Qtwo = document.getElementById("q2");
let Qthree = document.getElementById("q3");
let Qfour = document.getElementById("q4");
let Qfive = document.getElementById("q5");
let Qsix = document.getElementById("q6");
let Aone = document.getElementById("ans1");
let Atwo = document.getElementById("ans2");
let Athree = document.getElementById("ans3");
let Afour = document.getElementById("ans4");
let Afive = document.getElementById("ans5");
let Asix = document.getElementById("ans6");
let resultText = document.getElementById("result");

btn.addEventListener("click", btnclicked);

let resultnum = 0;

function btnclicked() {
  console.log(Qone);
  if (
    Qone.value === "16" ||
    Qone.value === "Sixteen" ||
    Qone.value === "sixteen"
  ) {
    resultnum++;
    Aone.innerHTML = "Correct";
    Aone.style.color = "green";
  } else {
    Aone.innerHTML = "Incorrect";
    Aone.style.color = "red";
  }

  if (
    Qtwo.value == "Baby dragon" ||
    Qtwo.value == "baby dragon" ||
    Qtwo.value == "baby Dragon" ||
    Qtwo.value == "Baby Dragon"
  ) {
    resultnum++;
    Atwo.innerHTML = "Correct";
    Atwo.style.color = "green";
  } else {
    Atwo.innerHTML = "Incorrect";
    Atwo.style.color = "red";
  }

  if (
    Qthree.value === "7" ||
    Qthree.value === "seven" ||
    Qthree.value === "Seven"
  ) {
    resultnum++;
    Athree.innerHTML = "Correct";
    Athree.style.color = "green";
  } else {
    Athree.innerHTML = "Incorrect";
    Athree.style.color = "red";
  }

  if (
    Qfour.value === "inferno tower" ||
    Qfour.value === "Inferno Tower" ||
    Qfour.value === "inferno Tower" ||
    Qfour.value === "Inferno tower"
  ) {
    resultnum++;
    Afour.innerHTML = "Correct";
    Afour.style.color = "green";
  } else {
    Afour.innerHTML = "Incorrect";
    Afour.style.color = "red";
  }

  if (
    Qfive.value === "hog rider" ||
    Qfive.value === "Hog rider" ||
    Qfive.value === "hog Rider" ||
    Qfive.value === "Hog Rider"
  ) {
    resultnum++;
    Afive.innerHTML = "Correct";
    Afive.style.color = "green";
  } else {
    Afive.innerHTML = "Incorrect";
    Afive.style.color = "red";
  }

  if (
    Qsix.value === "clash" ||
    Qsix.value === "Clash" ||
    Qsix.value === "coc" ||
    Qsix.value === "Coc" ||
    Qsix.value === "COC" ||
    Qsix.value === "cOc"
  ) {
    resultnum++;
    Asix.innerHTML = "Correct";
    Asix.style.color = "green";
  } else {
    Asix.innerHTML = "Incorrect";
    Asix.style.color = "red";
  }

  endpercent = Math.floor((resultnum / 6) * 100);
  resultText.innerHTML = `${resultnum} / 6 OR ${endpercent}%`;

  if (resultnum >= 3) {
    resultText.style.color = "green";
  } else {
    resultText.style.color = "crimson";
  }
  resultnum = 0;
}
