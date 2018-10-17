const axios = require('axios');

const getPlaceLatLng = async(direction) =>{
  let encodedUrl = encodeURI(direction);

  let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyAu2rb0mobiznVJnJd6bVb5Bn2WsuXP2QI`)

  if(resp.data.status === 'ZERO_RESULTS'){
    throw new Error(`No results to the given city: ${direction}`);
  }
  // console.log(JSON.stringify( resp.data, undefined, 2));
  //console.log(resp.status);

  let location = resp.data.results[0];
  let coords = location.geometry.location;

  return {
    direction: location.formatted_address,
    lat: coords.lat,
    lng: coords.lng,
  }
}

module.exports = {
  getPlaceLatLng,
}
