
const {
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
} = require('../src/util');

test('somar 2 e 3 deve retornar 5', () => {
  expect(somar(2, 3)).toBe(5);
});

test('ehPar deve retornar true para 8', () => {
  expect(ehPar(8)).toBe(true);
});

test('inverterTexto deve inverter a palavra "amor"', () => {
  expect(inverterTexto("amor")).toBe("roma");
});

test('removerEspacos deve tirar espaços nas extremidades', () => {
  expect(removerEspacos("  teste  ")).toBe("teste");
});

test('capitalizar deve colocar a primeira letra em maiúscula', () => {
  expect(capitalizar("gato")).toBe("Gato");
});

test('mediaLista deve retornar média correta de [2, 4, 6]', () => {
  expect(mediaLista([2, 4, 6])).toBe(4);
});

test('maiorElemento deve retornar o maior número da lista', () => {
  expect(maiorElemento([3, 8, 2, 5])).toBe(8);
});

test('ordenarLista deve retornar a lista ordenada', () => {
  expect(ordenarLista([5, 1, 3])).toEqual([1, 3, 5]);
});

test('buscarElemento deve retornar true se o elemento existir', () => {
  expect(buscarElemento(["a", "b", "c"], "b")).toBe(true);
});

test('contarVogais deve contar corretamente as vogais em uma frase', () => {
  expect(contarVogais("Olá mundo")).toBe(4);
});

test('validarCPF deve retornar true para CPF válido com pontos e traço', () => {
  expect(validarCPF("123.456.789-09")).toBe(true);
});

test('senhaForte deve retornar true para senha com letras maiúsculas, minúsculas, números e símbolos', () => {
  expect(senhaForte("Teste@123")).toBe(true);
});

test('formatarData deve formatar data corretamente no padrão pt-BR', () => {
  expect(formatarData("2023-04-01")).toBe("01/04/2023");
});
