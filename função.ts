const teclado = require(`prompt-sync`)();
function verificarData(ano: number, mês: number, dia: number): boolean {

    const data = new Date(ano, mês, dia);
    return (
        data.getFullYear() === ano &&
        data.getMonth() === mês &&
        data.getDate() === dia
    )
}

let ano: number = parseInt(teclado(`Digite o ano: `));
let mês: number = parseInt(teclado(`Digite o mes: `));
let dia: number = parseInt(teclado(`Digite o dia: `));
const dataCorreta = verificarData(ano, mês, dia);
switch (dataCorreta) {
    case true:
        console.log(`${dia}/${mês}/${ano}`)
        break; 
        case false:
        console.log(`Insira uma data valida`)
    default:

        break;
}