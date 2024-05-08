//const entrada = 'A B C B A B A A'; //Vencedor A
const entrada = 'B A A B C C B B'; //Vencedor B
//const entrada = 'C B B C C A A C'; //Vencedor C

const votos = entrada.split(' ');

const contagemVotos = {};

votos.forEach(voto => {
    contagemVotos[voto] = (contagemVotos[voto] || 0) + 1;
});

let mapaVencedor;
let maxVotos = 0;

for (const mapa in contagemVotos) {
    if (contagemVotos[mapa] > maxVotos) {
        maxVotos = contagemVotos[mapa];
        mapaVencedor = mapa;
    }
}

console.log('O mapa vencedor é '+mapaVencedor);