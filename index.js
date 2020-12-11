
const express = require("express");
const app = express();
const https =require("https");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));



app.get("/",function(req , res){
    res.sendFile(__dirname+"/index.html");
   
   
   
    // const cityName ="london"
    // const myUrl= "https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid=30e54c33b41f57f9d7111e7de144e6df&units=metric"

    // https.get(myUrl , function(response){
       
        
    //     response.on('data' , function(data){
    //         const weatherData = JSON.parse(data)
            
    //         const temp = weatherData.main.temp;
    //         const desc =weatherData.weather[0].description;
    //         const wind =weatherData.wind.speed;
    //         const imgs ="http://openweathermap.org/img/wn/"+weatherData.weather[0].icon+"@2x.png"

    //         res.send(`<div style="text-align: center; margin:auto ; background-color:#1C2833; color:white ; min-height: 100vh;">
    //         <h1>Weather App </h1>
    //         <h2> Temparature: ${temp}°C </h2>
    //         <h2> windSpeed ${wind} </h2>
    //         <p>sky condition: ${desc}</p>
    //         <img src="${imgs}" alt="icon photo">
    //         </div>
    //         `)
    //     })

    // })
})

app.post("/" ,function( req ,res ){

    console.log(req.body.cityName);
    
    const cityName = req.body.cityName;

    const myUrl= "https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid=30e54c33b41f57f9d7111e7de144e6df&units=metric"

    https.get(myUrl , function(response){
       
        
        response.on('data' , function(data){
            const weatherData = JSON.parse(data)
            
            const temp = weatherData.main.temp;
            const desc =weatherData.weather[0].description;
            const wind =weatherData.wind.speed;
            const imgs ="http://openweathermap.org/img/wn/"+weatherData.weather[0].icon+"@2x.png"

            res.send(`<div style="text-align: center; margin:auto ; background-color:#1C2833; color:white ; min-height: 100vh;">
            <h1>Weather App </h1>
            <h2> Temparature: ${temp}°C </h2>
            <h2> windSpeed ${wind} </h2>
            <p>sky condition: ${desc}</p>
            <img src="${imgs}" alt="icon photo">
            </div>
            `)
        })

    })

   })





app.listen(3000, function(){
    console.log("server started at 3000");
})