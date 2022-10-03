const paragrafo = document.getElementById('mensagem')

const checaCaps = (event) => {
    
if(event.shiftKey){
    paragrafo.innerHTML = "Atenção: Segurando SHIFT"
}else{
    paragrafo.innerHTML= ''
}
}