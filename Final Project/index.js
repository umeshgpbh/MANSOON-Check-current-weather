var express  = require('express')//var variable_name = require('package_name')
var app = express();
var cors = require('cors');
var request = require('request')
app.use(cors({origin:true}))
app.get('/',function(req,res)
{
    res.send("CONNECTED TO LOCAL HOST SERVER");//IMPLEMENTATION
})


app.get('/:location',(req,res,next) => {
    var options = {
        url: `http://api.openweathermap.org/data/2.5/weather?q=${req.params.location}&APPID=a70ba5d158748fcda026cc47025b8b9c`
        ,
        headers:{
            'User-Agent':'My web server',
            'content-type':'application/json'
        }
    }
    function callback(error, response, body){
       if(!error && response.statusCode === 200)
       {
           res.send(JSON.parse(body))
           return;
       }

       else if(response.statusCode === 404)
       {
           res.send({message:"your city not found"})
           return;
       }
       //console.log(response.coord.lon);
       res.status(response.statusCode).send(response)
       
    }
    request(options, callback);
})

app.listen(3000);
