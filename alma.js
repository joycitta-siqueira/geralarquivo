var valor1 = 0;
var valor2 = 0;
var func = 0;

function limpar(){
    document.getElementById("boxdecalc").value = null;
    var valor1 = 0;
    var valor2 = 0;
}

function digitar(num){
    var num;
    document.getElementById("boxdecalc").value += num;
    var final = document.getElementById("boxdecal").value;
}

function conta(tipo){
    valor1 = document.getElementById("boxdecalc").value;
    document.getElementById("boxdecalc").value = null;
    func = tipo;
}

function resultado(){
    valor2 = document.getElementById("boxdecalc").value;
    if (func == 1) {
        var resultado = parseInt(valor1) + parseInt(valor2);
    } else if (func == 2){
        var resultado = parseInt(valor1) - parseInt(valor2);
    } else if (func == 6){
        var resultado = Math.sqrt(value1);
    }
    document.getElementById("boxdecalc").value = resultado;
}