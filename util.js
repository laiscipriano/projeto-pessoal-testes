
function somar(a, b) {
  return a + b;
}

function ehPar(numero) {
  return numero % 2 === 0;
}

function inverterTexto(texto) {
  return texto.split('').reverse().join('');
}

function removerEspacos(texto) {
  return texto.trim();
}

function capitalizar(texto) {
  return texto.charAt(0).toUpperCase() + texto.slice(1);
}

function mediaLista(lista) {
  if (lista.length === 0) throw new Error('Lista vazia');
  const total = lista.reduce((acc, n) => acc + n, 0);
  return total / lista.length;
}

function maiorElemento(lista) {
  return Math.max(...lista);
}

function ordenarLista(lista) {
  return [...lista].sort((a, b) => a - b);
}

function buscarElemento(lista, elemento) {
  return lista.includes(elemento);
}

function contarVogais(texto) {
  return (texto.match(/[aeiou]/gi) || []).length;
}

function validarCPF(cpf) {
  return /^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(cpf);
}

function senhaForte(senha) {
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#\$%\^&\*]).{8,}$/.test(senha);
}

function formatarData(data) {
  const d = new Date(data);
  if (isNaN(d)) throw new Error("Data inválida");
  return d.toLocaleDateString("pt-BR");
}

module.exports = {
  somar,
  ehPar,
  inverterTexto,
  removerEspacos,
  capitalizar,
  mediaLista,
  maiorElemento,
  ordenarLista,
  buscarElemento,
  contarVogais,
  validarCPF,
  senhaForte,
  formatarData
};
