let input = "";
let hasil = 0;
let operasi = null;
function tampilkanPesan(angka) {
  input += angka;
  document.getElementById("output").innerText = input;
}
function ope(operator) {
  if (input !== "") {
    hasil = parseInt(input);
    input = "";
  }
  operasi = operator;
}
function pengoperasi() {
  if (operasi === "+") {
    hasil += parseInt(input);
  } else if (operasi === "-") {
    hasil -= parseInt(input);
  } else if (operasi === "x") {
    hasil *= parseInt(input);
  } else if (operasi === ":") {
    hasil /= parseInt(input);
  }
  document.getElementById("output").innerText = hasil;
  input = "";
  operator = null;
}
function reset() {
  input = "";
  hasil = 0;
  operasi = null;
  document.getElementById("output").innerText = 0;
}
