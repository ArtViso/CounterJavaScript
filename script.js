const zero = document.querySelector(".zero"),
  lower = document.querySelector(".lower"),
  add = document.querySelector(".add");

let a = 0;

lower.addEventListener("click", lowerCase);
add.addEventListener("click", addCase);

function lowerCase() {
  a--;
  if (a <= -1) {
    zero.style.color = "red";
  } else {
    zero.style.color = "white";
  }
  zero.innerHTML = a;
}
function addCase() {
  a++;
  if (a >= 1) {
    zero.style.color = "green";
  } else {
    zero.style.color = "white";
  }
  zero.innerHTML = a;
}
