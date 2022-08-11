var express = require('express'); // Get the module
var app = express(); // Create express by calling the prototype in var express
const yt = require('yt-live-url');
const {request} = require('undici');

const port = 5001;


app.get('/', async function (req, res) {

    // let url = 'https://www.youtube.com/channel/' + "UC21SYgktERtPmPMnOQ34SHw" + '/live';
    // const {body} = await request(url);
    // console.log(body)
    // let bodyText = await body.text();
    // console.log(bodyText)
    // let stream = bodyText.match(/(?<=hlsManifestUrl":").*\.m3u8/g);
    // if (stream) {
    //     console.log(stream)
    // } else { 
    //     console.log('Check channel id')
    //     res.end('Check channel id')

    // }
    // res.end(stream)
    // return stream;
    yt.getStream("UC21SYgktERtPmPMnOQ34SHw")
        .then(data => 
            res.end(JSON.stringify(data))
            )


  })

app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
}); 