const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '1455199545msh53bfce68da0845bp10119cjsn23566562dee1',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
let inputValue = 'Kathmandu';
dataFetch();
document.getElementById("submit").addEventListener("click",function(){
    inputValue= document.getElementById('inputvalue').value;
    dataFetch();
    
})
function dataFetch(){
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+inputValue, options)
        .then(response => response.json())
        .then(response => {
            document.getElementById('city').innerText = inputValue;
            document.getElementById('InfoCity').innerText = inputValue;
            if(response.temp==undefined){
                document.getElementById("errorMessage").style.display="block";
                document.querySelector(".cards").style.display="none";
                document.querySelector(".other").style.display="none";
            }else{
                let unixsunrise = response.sunrise;
                let sunrisedate = new Date(unixsunrise*1000);
                let sunrise =sunrisedate.toLocaleTimeString();
                let unixsunset = response.sunset;
                let sunsetdate = new Date(unixsunset*1000);
                let sunset =sunsetdate.toLocaleTimeString();
                document.getElementById("errorMessage").style.display="none";
                document.querySelector(".cards").style.display="flex";
                document.querySelector(".other").style.display="block";
                document.getElementById('Temperature').innerText= response.temp;
                document.getElementById('Humidity').innerText = response.humidity;
                document.getElementById('wind').innerText = response.wind_speed;
                document.getElementById('cloudPCT').innerText = response.cloud_pct;
                document.getElementById('windDegree').innerText = response.wind_degrees;
                document.getElementById('maxTemp').innerText = response.min_temp;
                document.getElementById('minTemp').innerText = response.min_temp;
                document.getElementById('sunrise').innerText = sunrise;
                document.getElementById('sunset').innerText = sunset;
            }
    })
        .catch(err =>{
            console.error(err)
            if(err != 400){

                document.getElementById("errorMessage").style.display="block";
                document.querySelector(".cards").style.display="none";
                document.querySelector(".other").style.display="none";
                document.getElementById("errorMessage").innerHTML = "Connect to the Internet"
            }          
        });
}
