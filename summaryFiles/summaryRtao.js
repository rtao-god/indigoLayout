window.addEventListener('DOMContentLoaded', () => {
    openMenu('.toggle-btn', '#sidebar', '#sidebar ul li', 'active') // вызываем функцию с нужными нам селекторами
})

const openMenu = (triggerSelector, targetSelector, closeSelector, activClass) => {
    const trigger = document.querySelector(triggerSelector) // достаем все ДОМ елементы
    const target = document.querySelector(targetSelector)
    const close = document.querySelectorAll(closeSelector)

    close.forEach(i => i.addEventListener('click', () => { // навешиваем обработчик событий на ссылки, даже если она буде одна,
        target.classList.remove(activClass) // функция все равно тработает

    }))

    trigger.addEventListener('click', e => { // тут обработчик событий на триггер

        target.classList.toggle(activClass)

    })}



const btn = document.querySelector('.btn-toggle')

const div1 = document.querySelector('.dark-theme')

btn.addEventListener('click', function() {

    div1.classList.toggle('light-theme')

})