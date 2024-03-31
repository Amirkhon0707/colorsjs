    
const    red = document.querySelector('.colors-itemf'),
    
        blue = document.querySelector('.colors-items'),
        
        green = document.querySelector('.colors-itemt'),
        
        yellow = document.querySelector('.colors-itemfo'),
        
        del = document.querySelector('.colors-iteml'),
        
        body = document.querySelector('body'),
        
        items = document.querySelectorAll('.items-item'),
        
        redItem = document.querySelector('.colors__items-itemfi'),
    
        blueItem = document.querySelector('.colors__items-itemse'),
        
        greenItem = document.querySelector('.colors__items-itemth'),
        
        yellowItem = document.querySelector('.colors__items-itemfou'),
        
        delItem = document.querySelector('.colors__items-itemla');


red.addEventListener('click', () => {
    body.style.background = 'red'
})

blue.addEventListener('click', () => {
    body.style.background = 'blue'
})

green.addEventListener('click', () => {
    body.style.background = 'rgb(4, 232, 4)'
})

yellow.addEventListener('click', () => {
    body.style.background = 'yellow'
})


del.addEventListener('click', () => {
    body.style.background = 'none'
})


for (let i = 0; i < items.length; i++) {
    redItem.addEventListener('click', () => {
        items[i].style.background = 'red'
    })
    blueItem.addEventListener('click', () => {
        items[i].style.background = 'blue'
    })
    greenItem.addEventListener('click', () => {
        items[i].style.background = 'green'
    })
    yellowItem.addEventListener('click', () => {
        items[i].style.background = 'yellow'
    })
    delItem.addEventListener('click', () => {
        items[i].style.background = 'none'
    })
}

