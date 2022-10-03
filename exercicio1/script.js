const ulElemento = document.getElementById('lista')

const novaLi = document.createElement('li')
const liText0 = document.createTextNode('Item 0')

novaLi.appendChild(liText0)
ulElemento.insertAdjacentElement('afterbegin',novaLi)

const novoL5 = document.createElement('li')
const liCinco = document.createTextNode('Item 5')
novoL5.appendChild(liCinco)
ulElemento.insertAdjacentElement('beforeend',novoL5)
