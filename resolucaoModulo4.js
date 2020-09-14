//Exercicio 1
console.log("exercicio 01")
function checaIdade(idade) {
    return new Promise(function(resolve,reject){
        setTimeout((idade>=18?resolve():reject()), 2000);
    });
   }
   checaIdade(20)
    .then(function() {
    console.log("Maior que 18");
    })
    .catch(function() {
    console.log("Menor que 18");
    });

var lista = document.querySelector('ul');
var inputLista = document.querySelector('input');
   
function mostraLista(repositorio){
    for(cadaElemento of repositorio){
        var nomeElemento = document.createTextNode(cadaElemento.name);
        var itemLista = document.createElement('li');
        itemLista.appendChild(nomeElemento);
        lista.appendChild(itemLista);
    }
}

function criaLista(){
   
    var usuario = inputLista.value;

    if(!usuario) return;

    axios.get("https://api.github.com/users/"+usuario+"/repos")
        .then(function(response){
            mostraLista(response.data);
        })
}