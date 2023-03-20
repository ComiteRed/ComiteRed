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