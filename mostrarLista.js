let mostrarLista = (arr) => arr.length == 0 ? "Lista Vacía" : `La lista tiene ${arr.length} elementos`;

console.log(mostrarLista([]))
console.log(mostrarLista([1, 2, 3]))