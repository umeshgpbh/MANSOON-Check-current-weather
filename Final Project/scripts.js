var locationSearch = "";
var currentDate = new Date()
var day = currentDate.getDate()
var month = currentDate.getMonth() + 1
var year = currentDate.getFullYear()
//document.write("<b>" + day + "/" + month + "/" + year + "</b>")
function checkweather(){
    // read email by querySelector API
    let location = document.querySelector("#location").value;
    locationSearch = location;

    // query URL
    let queryURL = "http://127.0.0.1:3000/" + location
    console.log(queryURL)
    
    // make AJAX request using fetch API
    fetch(queryURL)
        .then(function (response) {
            //return response;
            return response.json();
        })
        .then(function (result) {
            displayLocationResult(result);
        })
        .catch(function (error) {
            console.log(error.message);
        });
}

function displayLocationResult(result) {
    // get message div
    let msgDiv = document.querySelector("#message");
    // select result div
    let div = document.querySelector("#result");

    if (result.message) {
        // clear contents
        div.innerHTML = "";
        console.log(result);
        
        msgDiv.innerHTML = `<div class="alert alert-danger alert-dismissible" role="alert"> \
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button> \
                                <strong>oops!</strong> ${result.message} \
                            </div>`;    
    }
    else {
        // display success
        console.log(result);
        msgDiv.innerHTML = `<div class="alert alert-success alert-dismissible" role="alert"> \
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button> \
                                <strong>Weather of </strong><h3 style="text-transform: uppercase">${locationSearch}.<h3> \
                            </div>`;
        
       // clear contents
        div.innerHTML = "";

        //dcttd

        let hackedHTMLDiv = `<div class="jumbotron" id="id"> \
        <div class="row">
        <h3>Date: <h5  style="color:green">${"<b>" + day + "/" + month + "/" + year + "</b>"}</h5></h3>
            <div class="col-xs-12 col-sm-12" style="text-align:center">
                <h3>Minimum Temprature : <h5 style="color:blue">${result.main.temp_min} &deg;C</a></h5></h3>
                <h3>Maximum Temprature : <h5 style="color:blue">${result.main.temp_max} &deg;C</h5></hh3>
                <h3>Description : <h5 style="color:blue">${result.weather[0].description}</h5></h3>
                <h3>Wind Speed: <h5 style="color:blue">${result.wind.speed}</h5></h3>
            </div>
        </div>
    </div>`;
$("#result").append(hackedHTMLDiv);
}

console.log(result);
}





        //gujg

        // const weather = result.consolidated_weather;
        // console.log("############");
        // console.log(weather);

        // for(let i=0; i<weather.length; i++) {
        //     console.log(weather[i].weather_state_name);
        //     var elemts = `<div>${weather[i]}`;
        //     let hackedHTMLDiv = `<div class="jumbotron" id="id_${i}"> \
        //                             <div class="row">
        //                             <h3>Date: <h5  style="color:green">${weather[i].applicable_date}</h5></h3>
        //                                 <div class="col-xs-12 col-sm-12" style="text-align:center">
        //                                     <h3>Minimum Temprature : <h5 style="color:blue">${weather[i].min_temp} &deg;C</a></h5></h3>
        //                                     <h3>Maximum Temprature : <h5 style="color:blue">${weather[i].max_temp} &deg;C</h5></hh3>
        //                                     <h3>Current Temprature : <h5 style="color:blue">${weather[i].the_temp} &deg;C</h5></h3>
        //                                     <h3>Wind Speed: <h5 style="color:blue">${weather[i].wind_speed}</h5></h3>
        //                                 </div>
        //                             </div>
        //                         </div>`;
//             $("#result").append(hackedHTMLDiv);
//         }

//         console.log(result);
//     }
// }




        // clear contents
//         div.innerHTML = "";

//         const weather = result.consolidated_weather;
//         console.log("############");
//         console.log(weather);

//         for(let i=0; i<weather.length; i++) {
//             console.log(weather[i].weather_state_name);
//             var elemts = `<div>${weather[i]}`;
//             let hackedHTMLDiv = `<div class="jumbotron" id="id_${i}"> \
//                                     <div class="row">
//                                     <h3>Date: <h5  style="color:green">${weather[i].applicable_date}</h5></h3>
//                                         <div class="col-xs-12 col-sm-12" style="text-align:center">
//                                             <h3>Minimum Temprature : <h5 style="color:blue">${weather[i].min_temp} &deg;C</a></h5></h3>
//                                             <h3>Maximum Temprature : <h5 style="color:blue">${weather[i].max_temp} &deg;C</h5></hh3>
//                                             <h3>Current Temprature : <h5 style="color:blue">${weather[i].the_temp} &deg;C</h5></h3>
//                                             <h3>Wind Speed: <h5 style="color:blue">${weather[i].wind_speed}</h5></h3>
//                                         </div>
//                                     </div>
//                                 </div>`;
//             $("#result").append(hackedHTMLDiv);
//         }

//         console.log(result);
//     }
// }
