class CountdownTimer {
    constructor({ selector, targetDate }) {
        this.selector = selector;
        this.targetDate = targetDate;

        this.days = document.querySelector('span[data-value="days"]')
        this.hours = document.querySelector('span[data-value="hours"]')
        this.mins = document.querySelector('span[data-value="mins"]')
        this.secs = document.querySelector('span[data-value="secs"]')
    }
    init() {
        setInterval(() => {
            const currentTime = new Date()
            const timeLeft = this.targetDate - currentTime;
            this.changeHtml(this.setTime(timeLeft))
        }, 1000);
    }
    setTime(timeLeft) {
            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const mins = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const secs = Math.floor((timeLeft % (1000 * 60)) / 1000);
            return {days,hours,mins,secs}
    }
    changeHtml({ days, hours, mins, secs }) {
            this.days.textContent = days
            this.hours.textContent = hours
            if (hours < 10) {
                this.hours.textContent = `0${hours}`
            }
            this.mins.textContent = mins
            if (mins < 10) {
                this.mins.textContent = `0${mins}`
            }            
            this.secs.textContent = secs
            if (secs < 10) {
                this.secs.textContent = `0${secs}`
            }
    }
}

const timer1 = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Dec 20, 2021'),
});

timer1.init()