export class IMCView {
  static getDadosFormulario() {
    return {
      nome: document.getElementById("nome").value,
      idade: document.getElementById("idade").value,
      sexo: document.getElementById("sexo").value,
      peso: parseFloat(document.getElementById("peso").value),
      altura: parseFloat(document.getElementById("altura").value)
    };
  }
}
