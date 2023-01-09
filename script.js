let btnInc = document.getElementById("inc");
let btnDec = document.getElementById("dec");
let count = document.getElementById("count");
let num = 0;

btnInc.addEventListener("click", () => {
  num++;
  count.innerText = num;
});

btnDec.addEventListener("click", () => {
  num--;
  count.innerText = num;
});
