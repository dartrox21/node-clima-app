const argv = require('yargs')
  .options({
    direction:{
      alias:'d',
      desc: 'City to obtain the climate',
      demand: true,
    },
    unit:{
      alias: 'u',
      desc: 'Temperature is available in Fahrenheit = "imperial" and Celsius = "metric"',
      default: 'metric',
    }
  })
  .help()
  .argv;

module.exports = {
  argv,
}
