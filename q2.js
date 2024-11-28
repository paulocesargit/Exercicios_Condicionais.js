/**
 * Retorna o nome do dia da semana correspondente ao número fornecido.
 * 
 * @param {number} dia - Um número entre 1 e 7 representando um dia da semana.
 * @returns {string} O nome do dia da semana ou "Número inválido" se o número não for entre 1 e 7.
 */

function DiasDaSemana(dia) {
    switch(dia) {
      case 1:
        return "Domingo";
      case 2:
        return "Segunda-feira";
      case 3:
        return "Terça-feira";
      case 4:
        return "Quarta-feira";
      case 5:
        return "Quinta-feira";
      case 6:
        return "Sexta-feira";
      case 7:
        return "Sábado";
      default:
        return "Número inválido";
    }
  }
  
  console.log(DiasDaSemana(3)); 
  console.log(DiasDaSemana(7)); 
  console.log(DiasDaSemana(8)); 
  