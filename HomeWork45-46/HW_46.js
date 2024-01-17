"use strict";

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
        xml.open('GET', `https://api.openweathermap.org/data/2.5/weather?q=${city.toUpperCase()}&units=metric&APPID=5d066958a60d315387d9492393935c19`, true);
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

    switch (item) {
        case 'main':
            const main = data[item];
            for (const item in main) {
                const check = item === 'temp' || item === 'pressure' || item === 'humidity';
    
                if(check) {
                    const li = document.createElement('li')
                    li.innerText = `${item}: ${main[item]}`
                    list.appendChild(li)
                }
            }
            break;

        case 'wind': 
            const wind = data[item];
            for (const key in wind) {
                const check = key === 'speed' || key === 'deg';

                if(check) {
                    const li = document.createElement('li');
                    li.innerText = `${key}: ${wind[key]}`;
                    list.appendChild(li);
                }
            }
            break;
        
        case 'weather':
            const [weather] = data[item];
        
            for (const value in weather) {
                
                if(value === 'description') {
                    const li = document.createElement('li');
                    li.innerText = `${value}: ${weather[value]}`;
                    list.appendChild(li);
                } 
    
                if (value === 'icon') {
                    const img = document.createElement('img');
                    img.setAttribute('src', `https://openweathermap.org/img/w/${weather[value]}.png`)
                    list.appendChild(img);
                }
            }
            break;
    }
}

const callWeather = () => {
    checkedValue();
}

btn.addEventListener('click', callWeather);