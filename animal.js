const animal = {
    nome: "Word",
    especie: "Cachorro",
    idade: 4,
    tutor: false, 
    vacinado: true
};

console.log(animal.nome);
console.log(animal.tutor);

animal.idade = 6;
//console.log(animal);

console.log(`${animal.nome} é um ${animal.especie} com ${animal.idade} anos de idade e possui sua vacina em dia (${animal.vacinado}).`)
