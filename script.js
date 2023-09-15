const targetDate = new Date('2023-10-28T04:00:00').getTime();
const countdownInterval = setInterval(updateCountdown, 1000);

function updateCountdown() {
    const currentDate = new Date().getTime();
    const timeRemaining = targetDate - currentDate;

    if (timeRemaining <= 0) {
        clearInterval(countdownInterval);
        document.getElementById('days').innerHTML = '00';
        document.getElementById('hours').innerHTML = '00';
        document.getElementById('minutes').innerHTML = '00';
        document.getElementById('seconds').innerHTML = '00';
    } else {
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
        document.getElementById('days').innerHTML = padZeroes(days);
        document.getElementById('hours').innerHTML = padZeroes(hours);
        document.getElementById('minutes').innerHTML = padZeroes(minutes);
        document.getElementById('seconds').innerHTML = padZeroes(seconds);
    }
}
function padZeroes(value) {
    return value.toString().padStart(2, '0');
}
updateCountdown();
