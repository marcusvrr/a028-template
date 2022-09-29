function insereItem(event) {
    const lista = document.getElementById('lista')
    const novoLi = document.createElement('li')
    const novoItem = document.getElementById('meu-input')
    const textoLi = document.createTextNode(novoItem.value)
    novoLi.appendChild(textoLi)
    lista.insertAdjacentElement('beforeend',novoLi)
}
