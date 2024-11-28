/**
 * Verifica se um usuário pode acessar o sistema com base em sua idade, status de administrador e se a conta está bloqueada.
 * 
 * @param {Object} usuario - Objeto contendo as informações do usuário.
 * @param {number} usuario.idade - A idade do usuário.
 * @param {boolean} usuario.isAdmin - Se o usuário é um administrador.
 * @param {boolean} usuario.isBlocked - Se a conta do usuário está bloqueada.
 * @returns {boolean} Retorna `true` se o acesso for permitido, `false` caso contrário.
 */
function podeAcessar(usuario) {
    return (usuario.idade > 18 || usuario.isAdmin) && !usuario.isBlocked;
  }
  
  console.log(podeAcessar({ idade: 20, isAdmin: false, isBlocked: false })); 
  console.log(podeAcessar({ idade: 16, isAdmin: true, isBlocked: true })); 
  