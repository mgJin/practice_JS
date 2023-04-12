const API_KEY ="a6b7408b1b2ca3e35154fbc4a06f2190";

/**성공했을 때 */
function onGeoOk(position){
    //유저의 위치정보를 담아서 argument로 준다.
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response =>response.json()).then(data =>{
        
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        
        weather.innerText = data.name;
        city.innerText = `${data.weather[0].main}/${data.main.temp}`;
    })
    ;
}
/**실패했을 때 */
function onGeoError(){
    alert("Can't find you. No weather for you.");
}

/**성공했을 때 부르는 함수와 실패했을 때 부르는 함수를 넣는다 */
navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);