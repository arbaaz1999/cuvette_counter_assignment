let btnInc = document.getElementById("inc");
let btnDec = document.getElementById("dec");
let reset_btn = document.getElementById("reset_btn");
let count = document.getElementById("count");
let num = 0;

btnInc.addEventListener("click", () => {
  num++;
  count.innerText = num;
});

btnDec.addEventListener("click", () => {
  if (num > 0) {
    num--;
    count.innerText = num;
  }
});

reset_btn.addEventListener("click", () => {
  num = 0;
  count.innerText = num;
});
