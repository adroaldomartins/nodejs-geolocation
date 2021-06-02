let nodeGeocoder = require('node-geocoder');

let optionsGoogle = {
    provider: 'google',
    apiKey: 'AIzaSyBDcDUoRlMQqyF3Qobuto6U14RKhRqaNRY*'
};
let geoCoderGoogle = nodeGeocoder(optionsGoogle);

let optionsOpenStreetMap = {
    provider: 'openstreetmap'
};
let geoCoderOpenStreetMap = nodeGeocoder(optionsOpenStreetMap);

geoCoderGoogle.geocode('Rua das palmeiras, 12')
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });

geoCoderGoogle.reverse({ lat: -25.56, lon: -48.58 })
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });

geoCoderOpenStreetMap.geocode('Rua das palmeiras, 12')
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });

geoCoderOpenStreetMap.reverse({ lat: -25.56, lon: -48.58 })
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });

