
/**
 * Verifica se um número é par ou ímpar.
 * 
 * @param {number} numero - O número a ser verificado.
 * @returns {string} "Par" se o número for par, ou "Ímpar" se for ímpar.
 */

function parImpar(numero) {
    return numero % 2 === 0 ? "Par" : "Ímpar";
  }
  
  console.log(parImpar(10)); 
  console.log(parImpar(15)); 
  console.log(parImpar(22)); 
  