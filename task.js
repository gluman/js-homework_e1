const href = document.querySelectorAll('a');
const positions = ['top', 'left', 'right', 'bottom'];

href.forEach((a) => {
    let tooltipElement = null; 
    const randomPosition = positions[Math.floor(Math.random() * positions.length)];
    a.addEventListener('click', (event) => {
        event.preventDefault();
        console.log(randomPosition)
        if (tooltipElement) {
            tooltipElement.remove();
        }
        let rect = a.getBoundingClientRect()
        const title_tooltip = a.title;
        tooltipElement = document.createElement('div'); 
        tooltipElement.className = 'tooltip tooltip_active';
        if(randomPosition === 'top'){
            tooltipElement.style.bottom = `${rect.top}px`;
            tooltipElement.style.left = `${rect.left}px`;
        }
        else if(randomPosition === 'bottom'){
            tooltipElement.style.top = `${rect.bottom - 2}px`;
            tooltipElement.style.left = `${rect.left}px`;
        }
        else if(randomPosition === 'left'){
            tooltipElement.style.top = `${rect.top}px`;
            tooltipElement.style.right = `${rect.left - 2}px`;
        }
        else if(randomPosition === 'right'){
            tooltipElement.style.top = `${rect.top}px`;
            tooltipElement.style.left = `${rect.right + 2}px`;
        }
        else {
            console.log('error if-else')
        }
        console.log (tooltipElement.style.top, tooltipElement.style.left)

        tooltipElement.textContent = title_tooltip;
        a.insertAdjacentElement("beforeend", tooltipElement);
    });

    a.addEventListener('mouseleave', () => {
        if (tooltipElement) {
            tooltipElement.remove();
            tooltipElement = null; 
        }
    });
});