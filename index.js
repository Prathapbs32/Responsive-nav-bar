

const menu = document.querySelector('.menu')
    const menuList = document.querySelector('nav ul')
    menu.addEventListener('click',()=>{
        menuList.classList.toggle('showmenu')
    })

    const text = document.querySelector('.menu')
    const textList = document.querySelector('.text')
    text.addEventListener('click',()=>{
        textList.classList.toggle('showtext')
    })