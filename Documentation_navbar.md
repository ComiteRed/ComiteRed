# Nav Bar V 1.0 (index3.html y style3.css)

Esta es la primera version de la barra de navegación.
Parece que ya casi quedó pero falta hacer que haya un menú desplegable cuando 
la pagina se vea en formato de celular, en primera para que se vea mas bonita y en segunda para que los botones no se vuelvan tan pequeños; para esto decidí implementar javascript, el problema
es que no se como funciona bien jeje asi que trate de buscar plantillas o algo para poder guiarme y el codigo que encontre e hice
fue este:

```
    const toggle_section = document.querySelector('.bars-menu')
    const toggle_menu_icon = document.querySelector('.bars_menu i')
    const dropDownmenu = document.querySelector('.dropdown-menu')

    toggle_section.onclick = function(){
    dropDownmenu.classList.toggle('open')
    const isOpen = dropDownmenu.classList.contains('open')

    toggle_menu_icon.classList = isOpen
        ? 'fa-solid fa-xmark'
        : 'fa fa-bars'
}   

```

En este caso la parte de **const** se explica por si sola, creo una constante con un nombre y despues con la funcion
**document.queryselector()** especifico el nombre de la clase de html de la que quiero crear una constante. Despues especificamos
que cuando "toggle_section" que es el div del botton para el menu desplegable, le hagan click, se inicializara una funcion
la cual devuelve la clase "open" al archivo de css para saber que debe de mostrar la pagina como se escribió en el archivo css
para la clase de cuando el menu esta abierto; despues definimos otra constante para cuando este abierto el menu, no estoy seguro 
si lo de abajo es un condicional o algo pero cuando se da click en las barritas esto deberia hacer que cambien de las barritas a
una "X" y se abra el menu, pero no estoy seguro asi que sera mejor que lo discutamos en la junta del lunes.

## Aiuda no se que estoy haciendo :(

Es la primera vez que trato de usar javasscript sin ayuda y es muy confuso ;-;
no estoy seguro de si esto se puede hacer solo con css pero creo que tenemo sque buscar alternativas o aprender mas sobre esto
para poder terminar bien la responsividad de la barra de navegacion.

#### Cambios realizados por Jesús el 19/03/2023.