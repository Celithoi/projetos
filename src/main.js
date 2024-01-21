import './assets/css/style.css';

const key = '1784625ced738871c33586147a4b24ae';

function inicia(){
    document.addEventListener('click', e => {
        const el = e.target
        let dados ; 
        let entrada ;
        if(el.classList.contains('botao-buscar')||el.classList.contains('img-busca')){
           entrada = document.querySelector('.input-cidade');
        dados = buscarCidade(entrada.value);
    }
        console.log(dados);
        ;
    });
         
}
   
async function buscarCidade(cidade){
    const retorno = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json());
    colocarDadosNaTela(retorno)  
}

function colocarDadosNaTela(dados){
    console.log(dados);
    document.querySelector('.output-cidade').innerHTML = "Tempo em " + dados.name;
    document.querySelector('.output-temp').innerHTML = Math.floor(dados.main.temp)+' °C';
    document.querySelector('.previsão').innerHTML = dados.weather[0].description;
    document.querySelector('.umidadeValor').innerHTML = dados.main.humidity+"% de Humidade";
    document.querySelector('.icone').src =`https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}

inicia();



