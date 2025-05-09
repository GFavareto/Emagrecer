export class IMCModel {
  static calcularIMC(peso, altura) {
    if (!peso || !altura) return null;
    return peso / (altura * altura);
  }

  static classificarIMC(imc) {
    if (imc < 18.5) return 'magreza';
    else if (imc < 25) return 'normal';
    else if (imc < 30) return 'sobrepeso';
    else if (imc < 35) return 'obesidade1';
    else if (imc < 40) return 'obesidade2';
    else return 'obesidade3';
  }
}
