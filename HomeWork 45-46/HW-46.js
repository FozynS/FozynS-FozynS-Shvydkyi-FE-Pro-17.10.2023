/*
За допомогою ajax-запиту вивести погоду
http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19
q=XXX - місто, для якого показати погоду
temp – температура
pressure - тиск
description – опис
humidity – вологість 
speed – швидкість вітру
deg - напрям у градусах
icon - значок, де 10d код іконки
http://openweathermap.org/img/w/10d.png

*/
const list = document.querySelector('.weather-information');
const btn = document.querySelector('.btn-weather');

const checkedValue = () => {
    const city = document.querySelector('.input-city').value;

    if(!city) {
        alert('Введите город');
    } else {
        getInformation(city);
    }
}

const getInformation = (city) => {
    try {
        const xml = new XMLHttpRequest();
        xml.addEventListener('load', transformatiomRequest);
        xml.open('GET', `http://api.openweathermap.org/data/2.5/weather?q=${city.toUpperCase()}&units=metric&APPID=5d066958a60d315387d9492393935c19`);
        xml.send();
    } catch (error) {
        console.error(error);
    }
    
}

const transformatiomRequest = function() {
    try {
        const cityWeatherInfo = JSON.parse(this.responseText);
        showWeatherInformation(cityWeatherInfo);
    } catch (error) {
        console.error(error);
    }
}

const showWeatherInformation = (data) => {
    list.innerHTML = '';
    
    for (const item in data) {
        checkTopic(item, data);
    }
}

const checkTopic = (item, data) => {
    if(item === 'main') {
        const main = data[item];
        for (const item in main) {
            const check = item === 'temp' || item === 'pressure' || item === 'humidity';

            if(check) {
                const li = document.createElement('li')
                li.innerText = `${item}: ${main[item]}`
                list.appendChild(li)
            }
        }
        
    }

    if(item === 'wind') {
        const wind = data[item];
        for (const key in wind) {
            const check = key === 'speed' || key === 'deg';

            if(check) {
                const li = document.createElement('li');
                li.innerText = `${key}: ${wind[key]}`;
                list.appendChild(li);
            }
        }
    }

    if(item === 'weather') {
        const [weather] = data[item];
        
        for (const value in weather) {
            
            if(value === 'description') {
                const li = document.createElement('li');
                li.innerText = `${value}: ${weather[value]}`;
                list.appendChild(li);
            } 

            if (value === 'icon') {
                const img = document.createElement('img');
                img.setAttribute('src', `http://openweathermap.org/img/w/${weather[value]}.png`)
                list.appendChild(img);
            }
        }
    }
}

const callWeather = () => {
    checkedValue();
}

btn.addEventListener('click', callWeather);