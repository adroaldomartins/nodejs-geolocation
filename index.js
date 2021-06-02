let nodeGeocoder = require('node-geocoder');

let options = {
    provider: 'google',
    apiKey: '*SECRET*'
};
let geoCoder = nodeGeocoder(options);

geoCoder.geocode('Rua das palmeiras, 12')
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });

geoCoder.reverse({ lat: -25.56, lon: -48.58 })
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });