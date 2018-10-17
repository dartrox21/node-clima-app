const axios = require('axios');


const getClimate = async(lat, lng, unit) =>{

  if(unit !== 'imperial' && unit !== "metric"){
    throw new Error('Unit error');
  }
  let encodedUrl = encodeURI(unit);
  let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=${encodedUrl}&appid=f369635965b00ad16ced5da4da4b9f3b`)

  return{
    temp: resp.data.main.temp,
    temp_min: resp.data.main.temp_min,
    temp_max: resp.data.main.temp_max,
    unit: unit,
  }
}


module.exports = {
  getClimate
}
