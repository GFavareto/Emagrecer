import { IMCModel } from "../model/imcModel.js";
import { IMCView } from "../view/imcView.js";

document.getElementById("imc-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const dados = IMCView.getDadosFormulario();
  const imc = IMCModel.calcularIMC(dados.peso, dados.altura);
  const categoria = IMCModel.classificarIMC(imc);

  // Redireciona para a página de resultado específica
  window.location.href = `resultados/resultado-${categoria}.html`;
});
