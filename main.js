function counterWatch() {
    function getSeconds(seconds) {
        const date = new Date(seconds * 1000)
        return date.toLocaleTimeString('pt-BR', {
            hour12: false, timeZone: 'GMT'
        })
    }

    const counter = document.querySelector('.counter')
    const start = document.querySelector('.start')
    const pause = document.querySelector('.pause')
    const reset = document.querySelector('.reset')
    let seconds = 0
    let timer;

    function startTimer() {
        timer = setInterval(() => {
            seconds++;
            counter.innerHTML = getSeconds(seconds)
        }, 1000);
    }

    start.addEventListener('click', function (event) {
        counter.classList.remove('pausado')
        pause.classList.remove('buttonBack')
        clearInterval(timer)
        startTimer()
    })

    pause.addEventListener('click', function (event) {
        counter.classList.add('pausado')
        pause.classList.add('buttonBack')
        clearInterval(timer)
    })
    
    reset.addEventListener('click', function (event) {
        counter.classList.remove('pausado')
        pause.classList.remove('buttonBack')
        clearInterval(timer)
        counter.innerHTML = '00:00:00'
        seconds = 0
    })
}
counterWatch()