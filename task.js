const href = document.querySelectorAll('a')

href.forEach((a) => {
    let tooltipElement = null
    a.addEventListener('click', (event) => {
        event.preventDefault()
        if (tooltipElement) {
            tooltipElement.remove();
            tooltipElement = null;
            return
        }
        tooltipElement = document.createElement('div')
        tooltipElement.className = 'tooltip tooltip_active'
        const tooltipPosition = a.dataset.position
        const title_tooltip = a.title;
        const rect = a.getBoundingClientRect();

        if (tooltipPosition === 'top') {
            tooltipElement.style.bottom = `${rect.top}px`
            tooltipElement.style.left = `${rect.left}px`
        }
        else if (tooltipPosition === 'bottom') {
            tooltipElement.style.top = `${rect.bottom - 2}px`
            tooltipElement.style.left = `${rect.left}px`
        }
        else if (tooltipPosition === 'left') {
            tooltipElement.style.top = `${rect.top}px`
            tooltipElement.style.right = `${rect.left - 2}px`
        }
        else if (tooltipPosition === 'right') {
            tooltipElement.style.top = `${rect.top}px`
            tooltipElement.style.left = `${rect.right + 2}px`
        }
        else {
            console.log('error if-else')
        }
        tooltipElement.textContent = title_tooltip
        document.body.appendChild(tooltipElement)
    })

    document.addEventListener('click', (event) => {
        if (tooltipElement && !a.contains(event.target)) {
            tooltipElement.remove()
            tooltipElement = null
        }
    })
})