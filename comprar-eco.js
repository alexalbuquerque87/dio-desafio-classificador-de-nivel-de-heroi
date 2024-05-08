const saldoInicial = 100;
const resultadoUltimoRound = "ganhou";
const custoItem = "115";

function decidirCompraOuEconomizar(saldoInicial, resultadoUltimoRound, custoItem) {
    let novoSaldo;

    //ganhou += 15%, perdeu += 5%, bonus += 20%;
    switch (resultadoUltimoRound) {
        case "ganhou":
            novoSaldo = saldoInicial*1.15;
        break;
        case "perdeu":
            novoSaldo = saldoInicial*1.05;
        break;
        case "bônus":
            novoSaldo = saldoInicial*1.20;
        break;
    }
    
    novoSaldo = Math.round(novoSaldo);

    if (novoSaldo >= custoItem) {
        console.log("Comprar");
    } else {
        console.log("Economizar");
    }
}

decidirCompraOuEconomizar(saldoInicial, resultadoUltimoRound, custoItem);