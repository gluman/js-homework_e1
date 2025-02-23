const href = document.querySelectorAll('a');

href.forEach((a) => {
    let tooltipElement = null; // Переменная для хранения элемента подсказки

    a.addEventListener('click', (event) => {
        event.preventDefault();
        
        if (tooltipElement) {
            tooltipElement.remove();
        }

        const title_tooltip = a.title;
        tooltipElement = document.createElement('span'); 
        tooltipElement.className = 'tooltip tooltip_active'; 
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