console.log('Increment Counter App Ready 1, 2, 3, 4, 5')
const darkness = document.getElementById('dark')
const lite = document.getElementById('light')
const counters = document.querySelectorAll('.counter')
const body = document.getElementById('body')


darkness.addEventListener('click', () => {
    body.classList.add('dark')
    
})

lite.addEventListener('click', () => {
    body.classList.remove('dark')
})

counters.forEach(counter => {
    counter.innerText = '0'

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target')
        const c = +counter.innerText

        const increment = target / 300

        if(c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`
            setTimeout(updateCounter, 1)
        } else {
            counter.innerText = target
        }
    }

    updateCounter()
})