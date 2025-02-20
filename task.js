const href = document.querySelectorAll('a')

console(href)
href.array.forEach((a)=> {
    a.addEventListener('click', () => {
        a.classlist.add('tooltip')
    })
});