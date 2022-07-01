
const request = new XMLHttpRequest();
const api_key = '8595ac4eebdce7ec3ef79e8c75c9da3a';
let city = 'Krasnoyarsk';
const cityButton = document.getElementById('city-button') // ;


// Почему же здесь вы не использовали функцию sendData, которая содержит данный код? Прочитайте про принцип DRY – Don not repeat yourself.
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
request.open('GET', url);
request.responseType = 'json';
request.send();


request.onload = function() {
    if (request.status == 200) {
        let temprature = Math.round(request.response.main.temp - 273.15);
        const weatherElem = document.getElementById('weather');
        weatherElem.textContent = `
    In ${city} is
    temprature: ${temprature} °C
    humidity: ${request.response.main.humidity}%
    wind speed: ${request.response.wind.speed} m/s
        `;
    }
}; 


cityButton.addEventListener('click', function() {
    city = prompt('Enter another city');
    
    // Здесь так же – у вас есть функция sendData и код внутри неё может срабатывать где угодно и когда угодно, вам не нужно это переписывать несколько раз. Это наше 3-4 занятие по JS.
    url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    request.open('GET', url);
    request.responseType = 'json';
    request.send();
    request.onload;
});


function sendData() {
    url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    request.open('GET', url);
    request.responseType = 'json';
    request.send();
    request.onload;

    // console.log('!')
};

setInterval( sendData, 3e5 );



const timeOutput = document.getElementById('time-output');
let time = new Date();
let clockIntId;
let startTime = document.getElementById('start-clock');
let timeContainer = document.getElementById('time-container');


function showTime(date) {
    let hours = date.getHours();
    hours = String(hours).padStart(2, '0');

    let minutes = date.getMinutes();
    minutes = String(minutes).padStart(2, '0');

    let seconds = date.getSeconds();
    seconds = String(seconds).padStart(2, '0');
    
    timeOutput.textContent = `${hours}:${minutes}:${seconds}`;
};


function clock() {
    time.setTime( Date.now() );
    showTime(time);
};


function startClock() {
    clockIntId = setInterval(clock, 1000);
};


startTime.addEventListener('click', function(event) {
    // Параметр event здесь не используется

    timeContainer.classList.add('radius');
    // Этот класс включает отображение блока с часами, однако это совсем не очевидно исходя из названия класса
});
