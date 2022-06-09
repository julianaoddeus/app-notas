function SalvarAnotacoes(){
  novaAnotacao = document.getElementById('anotacao').value
  document.getElementById('anotacoes-salvas').innerHTML += "<p>"+
  novaAnotacao + "</p>"
  document.getElementById("anotacao").value = " "
  alert("anotação salva\ncom sucesso!")  
}

document.getElementById('salvar').addEventListener('click', function(){
  SalvarAnotacoes();
})