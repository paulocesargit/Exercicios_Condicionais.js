/**
 * Calcula o preço de um produto após a aplicação de um desconto.
 * 
 * @param {number} precoOriginal - O preço original do produto.
 * @param {number} porcentagemDesconto - A porcentagem de desconto a ser aplicada.
 * @returns {number} O preço do produto com o desconto aplicado.
 */
const calDesconto = (precoOriginal, porcentagemDesconto) => {
    return precoOriginal - (precoOriginal * (porcentagemDesconto / 100));
  };
  
  console.log(calDesconto(100, 10)); 
  console.log(calDesconto(250, 20)); 
  