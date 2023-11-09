const htmlValidator = require('html-validator');
const fs = require('fs');

const options = {
  format: 'text', // Puedes elegir entre 'json' o 'text'
  data: fs.readFileSync('src/index.html', 'utf8') // Lee el contenido de tu archivo HTML
};

htmlValidator(options)
  .then((result) => {
    console.log(result); // Imprime los resultados de la validación
  })
  .catch((error) => {
    console.error('Error al validar:', error);
  });
