const href = document.querySelectorAll('a')

//  console.log(href)

href.forEach((a)=> {
    
    let tooltip
    a.addEventListener('click', (event) => {
        event.preventDefault()
        let title_tooltip = a.title
        let element = document.createElement('div')
        if (tooltip) tooltip.remove();
        element.classList.add('tooltip_active')
        element.textContent = title_tooltip
        element.classList.add('tooltip')
        console.log(element)
        a.insertAdjacentElement("beforeend", element )   
    })
    a.addEventListener('mouseleave', (event) => {
        if (tooltip) tooltip.remove();
    })
});