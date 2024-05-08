const nome = 'espada';
const quantidade = 2;

let inventario = [
    { nome: 'espada', quantidade: 1},
    { nome: 'escudo', quantidade: 1}    
];

let item = inventario.find(inv => inv.nome === nome);

console.log(item);

if (item && (item.quantidade === quantidade)) {
    console.log('Disponível');
} else {
    console.log('Indisponível');
}