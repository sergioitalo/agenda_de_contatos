const formulario = document.querySelector('#formulario')
const nomes = []
const telefones = []
let listagemContatos = ''
const inputNome = document.querySelector('#nome-contato')
const inputTelefone = document.querySelector('#telefone-contato')

formulario.addEventListener('submit', function(evento) {
  evento.preventDefault()

  criarContato()

  inserirContato()

  calcularQtdContatos()

  inserirQtdContatos()
})


function criarContato() {

  if(telefones.includes(inputTelefone.value)) {
    alert('Esse número já está registrado')
  } else {
    
  nomes.push(inputNome.value)
  telefones.push(inputTelefone.value)
  
  console.log(inputTelefone.length)

  const linha = `<tr><td>${inputNome.value}</td><td>${inputTelefone.value}</td></tr>`

  listagemContatos += linha

  inputNome.value = ''
  inputTelefone.value = ''

}



}

function inserirContato() {
  const corpoTabela = document.querySelector('.corpo-tabela')
  corpoTabela.innerHTML = listagemContatos

}

function calcularQtdContatos() {
  return nomes.length

  
}

function inserirQtdContatos () {
  const TotalContatos = calcularQtdContatos()
  const qtdContatos = document.querySelector('#qtd-contatos')

  qtdContatos.innerHTML = TotalContatos

}