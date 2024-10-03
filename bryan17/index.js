const readline = require("readline-sync");

const angka =parseFloat(readline.question("Masukan angka pertama : "));
const operator =readline.question("Masukan operator (+ - * % /) :");
const angka2 =parseFloat(readline.question("Masukan angka pertama: "));

const requiredOperator = ["+","-","*","/","%"];

if (isNaN(angka) || isNaN(angka2)) {
    console.log("inputan anda tidak valid");
} else if (!requiredOperator.includes(operator)) {
    console.log("pilih sesuatu operator yang tersedia");
} else {
    const hasil = processHasil(angka, angka2, operator);
    console.log({ hasil});
}

function processHasil(inputanPertama, inputanKedua, operator) {
    switch (operator) {
        case "+":
            return inputanPertama + inputanKedua;
        case "-":
            return inputanPertama - inputanKedua;
        case "*":
            return inputanPertama * inputanKedua;
        case "/":
            if (angka2 === 0) {
                return console.log("Angka kedua tidak boleh bernilai 0");
            }
            return inputanPertama / inputanKedua;
        case "%":
            return inputanPertama % inputanKedua;
    }
}