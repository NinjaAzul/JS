//ValidaCPF

function ValidaCPF(cpfEnviado) {
  Object.defineProperty(this, 'cpfLimpo', {
    enumerable: true,
    get: function () {
      return cpfEnviado.replace(/\D+/g, '');
    },
  });
}

ValidaCPF.prototype.valida = function () {
  if (typeof this.cpfLimpo === 'undefined') return false;
  if (this.cpfLimpo.length !== 11) return false;
  if (this.isSequencia()) return false;

  const cpfParcial = this.cpfLimpo.slice(0, -2);
  const digito1 = this.criaDigito(cpfParcial);
  const digito2 = this.criaDigito(cpfParcial + digito1);
  console.log(digito1);
  console.log(digito2);

  const novoCpf = cpfParcial + digito1 + digito2;

  return novoCpf === this.cpfLimpo;
};

ValidaCPF.prototype.criaDigito = function (cpfParcial) {
  const cpfArray = Array.from(cpfParcial);
  let regressivo = cpfArray.length + 1;
  const total = cpfArray.reduce((acumulador, val) => {
    regressivo + val;
    acumulador += regressivo * Number(val);
    regressivo--;
    console.log(acumulador);
    return acumulador;

  }, 0);

  const digito = 11 - (total % 11);

  return digito > 9 ? "0" : String(digito);
};

ValidaCPF.prototype.isSequencia = function(){
  const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length)
  return sequencia === this.cpfLimpo;
}

const cpf = new ValidaCPF('705.484.450-52');
console.log(cpf.valida());


const cpf2 = new ValidaCPF('070.987.720-03');
console.log(cpf2.valida());


const cpf3 = new ValidaCPF('111.111.111-11');
console.log(cpf3.valida());

if (cpf.valida()){
  console.log("CPF valido")
}else{
  console.log("CPF invalido")
}
