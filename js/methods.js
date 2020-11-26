// LOGS - CONSOLAS
const log = console.log
const error = console.error
//log(value)  // es lo mismo que console.log(value)


// METODOS MANEJO DEL DOM
const id = document.getElementById.bind(document)
const q = document.querySelector.bind(document)
const all = document.querySelectorAll.bind(document)

// Y luego podria usar funciones como estas:
const menu = id('main-menu')
const title = q('#title')
const links = all('.menu__link')

