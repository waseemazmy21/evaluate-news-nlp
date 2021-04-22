const baseURL = 'https://api.meaningcloud.com/sentiment-2.1';

const dotenv = require('dotenv');
dotenv.config();

var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')

const app = express()
/* Dependencies */
const bodyParser = require('body-parser')
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());


app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})



app.post("/add", async (req,res)=>{

     const {url} = req.body;
     console.log(url)
     try{
         
         const response = await fetch(`${baseURL}?key=${process.env.apiKey}&url=${url}&lang=en`)
         const data = await response.json();
         res.send(data);

     }catch(error){
        console.log(error)
     }

})



