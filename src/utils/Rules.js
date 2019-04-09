const rules = {
  name: [v => !!v || 'O nome é obrigatório!'],
  email: [
    v => !!v || 'E-mail é obrigatório!',
    v => /.+@.+/.test(v) || 'O E-mail inserido está em um formato inválido!'
  ],
  password: [
    v => v.length >= 6 || 'O tamanho mínimo para a senha é de 6 caracteres!'
  ],
  confirmPassword: function(password) {
    return [v => v == password || 'As senhas não conferem!'];
  }
};

export default rules;
