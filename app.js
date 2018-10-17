const argv = require('./config/yargs').argv;
const place = require('./place/place');
const climate = require('./climate/climate');


let getInfo = async(direction, unit)=>{
  try{
    let coords = await place.getPlaceLatLng(direction);
    let temp  = await climate.getClimate(coords.lat, coords.lng, unit);

    return `Climate in ${coords.direction}\nTemperature: ${temp.temp}\nMinimum temperature: ${temp.temp_min}\nMaximun temperature: ${temp.temp_max}`

  }catch(e){
    return `couldn't determine climate in ${direction}`;
  }
}

console.log(argv);
getInfo(argv.direction, argv.unit)
  .then(message => console.log(message))
  .catch(error => console.log(error))
