/**
 * Verifica se a idade fornecida corresponde a maior ou menor de idade.
 * 
 * @param {number} idade - A idade da pessoa.
 * @returns {string} Retorna "Menor de idade" se a idade for menor que 18, ou "Maior de idade" se a idade for 18 ou mais.
 */

function verificarIdade(idade) {
    return idade < 18 ? "Menor de idade" : "Maior de idade";
  }
  
  console.log(verificarIdade(15));
  console.log(verificarIdade(18)); 
  console.log(verificarIdade(21)); 
  