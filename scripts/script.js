let cantidad = 0;
let salario = 0;
let extra = 0;

function Calcular(){

    cantidad = document.getElementById("horas").value

    console.log(cantidad)

    if (cantidad>=1 && cantidad<=40) {

        salario= cantidad * 16000
        document.getElementById("SalarioSemanal").value = salario;  
        document.getElementById("SalarioExtra").value = 0;
        document.getElementById("Total a pagar").value = salario;
    }
    else{
        extra = cantidad -40;
        salario = (extra * 20000) + (40 * 16000);
        document.getElementById("SalarioSemanal").value = 40*16000;
        document.getElementById("SalarioExtra").value = extra * 20000;
        document.getElementById("Total a pagar").value = salario;
    }
}


