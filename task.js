const href = document.querySelectorAll('a');

href.forEach((a) => {
    let tooltipElement = document.getElementsByClassName('tooltip_active')
    const tooltipPosition = a.dataset.position
    a.addEventListener('click', (event) => {
        event.preventDefault()
        let rect = a.getBoundingClientRect()
        const title_tooltip = a.title
        tooltipElement = document.createElement('div')
        tooltipElement.className = 'tooltip_active tooltip_active'

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
        console.log(tooltipElement.style.top, tooltipElement.style.left)
        tooltipElement.textContent = title_tooltip;
        a.insertAdjacentElement("beforeend", tooltipElement);
    });

    a.addEventListener('click', () => {
        if (tooltipElement.className.trim() !== '') {
            tooltipElement.remove();
            tooltipElement = null;
        }
    });
});