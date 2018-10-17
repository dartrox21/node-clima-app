## Aplicación del Clima - Curso Node


Recuerden ejecutar ```npm install ``` para las librerías


### Parametros
- -d : Lugar del que se quiere obtener el clima
- -u : Unidad en la que se quiere ver el clima, por default se usa metric.

       Celsius: metric
       
       Fahrenheit: imperial

### Ejemplo:
```
node app -d "Guadalajara Jalisco"
node app -d "Guadalajara Jalisco" -u "imperial"
node app -d "Guadalajara Jalisco" -u "metric"
```
