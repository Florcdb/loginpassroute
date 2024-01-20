// Snippets de código para poder componer el programa

//Usado?: YES (app.js)
 // const middlewares = require('./middlewares');
//--- Explicación: creamos una constante para importar los middlewares en app.js

// -------------------------------------------------------------------------------------

//Usado?: YES (app.js)
//const bodyParser = require('body-parser');
//--- Explicación: Analiza los datos que le llegan de forma sencilla 

// -------------------------------------------------------------------------------------

//Usado?: YES (app.js)
// const session = require('express-session');
//--- Explicación: creamos una constante para importar express session en app.js

// -------------------------------------------------------------------------------------

//Usado?: YES, (app.js)
//const express = require('express');
//--- Explicación: Se  utiliza para iniciar express en este servidor

// -------------------------------------------------------------------------------------

//Usado?: yes (middlewares.js)
//const bodyParser = require('body-parser');
//--- Explicación: librería de node.js que sirve para procesar los datos de solicitudes HTTP y acceder a los datos de la solicitud

// -------------------------------------------------------------------------------------

//Usado?: yes(middleware.js)
//const session = require('express-session');
//--- Explicación: almacenar datos en el servidor

// -------------------------------------------------------------------------------------

//Usado?: YES (app.js)
// const dotenv = require('dotenv');
//--- Explicación: Tiene función de librería 

// -------------------------------------------------------------------------------------

//Usado?: YES (app.js)
// const middlewares = require('./middlewares');
//--- Explicación: Declaramos una constante llamada middlewares que requiera de middleware.js para funcionar

// -------------------------------------------------------------------------------------

//Usado?: YES (app.js)
// const routes = require('./routes');
//--- Explicación: declaramos una constante en la que importamos la ruta para que funcione

// -------------------------------------------------------------------------------------

//Usado?: 
//dotenv.config();
//--- Explicación:

// -------------------------------------------------------------------------------------

//Usado?: YES (app.js)
//const app = express();
//--- Explicación: Ejecuta la aplicación con express mediante una función

// -------------------------------------------------------------------------------------

//Usado?: YES, en app.js
//const PORT = 4000;
//--- Explicación: Se utiliza para declarar el puerto del servidor

// -------------------------------------------------------------------------------------

//Usado?: YES (middlewares.js)
// const dotenv = require('dotenv');
//--- Explicación: creamos una variable para poder importar el archivo dotenv

// -------------------------------------------------------------------------------------

//Usado?: YES (middleware.js)
//dotenv.config();
//--- Explicación: Carga automáticamente las variables 

// -------------------------------------------------------------------------------------

//Usado?: yes (app.js)
//middlewares.setupApp(app);
//--- Explicación:  trae la funcion srtupAPP del archivo middlewares

// -------------------------------------------------------------------------------------

//Usado?:YES (routes.js)
// routes.setup(app);
//--- Explicación: 

// -------------------------------------------------------------------------------------

//Usado?: YES, en middlewares.js
/*const validarPalabraMiddleware = (req, res, next) => {
  const palabraCorrecta = process.env.PALABRA_SECRETA || '';

  if (req.body.palabra === palabraCorrecta) {
    req.session.palabraSecreta = req.body.palabra;
    next();
  } else {
    res.redirect('/?error=1');
  }
};*/
//--- Explicación: declaramos una constante que valide la palabra secreta con condicionales que si da error, redireccione a un error


// -------------------------------------------------------------------------------------


//Usado?: yes (routes.js)
/* const setup = (app) => {
  app.get('/', (req, res) => {
    const mensajeError = req.query.error
      ? (req.query.error === '1' ? 'Palabra incorrecta, inténtalo de nuevo.' : 'No estás logado.')
      : '';
    if (req.session.palabraSecreta) {
      return res.redirect('/profile');
    }
  //Aquí va código dentro    
})}*/
//--- Explicación: da error si no estas logado y tira un mensaje


// -------------------------------------------------------------------------------------


//Usado?: YES (routes.js)
/* res.send(`
  <html>
    <body>
      <h1>Página de Inicio</h1>
      <p>${mensajeError}</p>
      <form method="post" action="/profile">
        <label for="palabra">Introduce la palabra:</label>
        <input type="text" name="palabra" required>
        <button type="submit">Enviar</button>
      </form>
    </body>
  </html>
`);*/
//--- Explicación: es el mensaje de la funcion setup()
 

// -------------------------------------------------------------------------------------

//Usado?: yes(middleware.js)
//const setupAPP = (app) => {
//  app.use(bodyParser.urlencoded({ extended: true }));
//  app.use(session({
//    secret: 'secretoSuperSecreto',
//    resave: false,
//    saveUninitialized: true,
//  }));
//};
//--- Explicación:  traducir el codigo  al hacer la accion enviar,crea un servidor con esos valores

// -------------------------------------------------------------------------------------

//Usado?: yes (routes.js)
//app.post('/profile', middlewares.validarPalabraMiddleware, (req, res) => {
//  res.send(`
//    <h1>Ruta del Perfil</h1>
//    <form method="post" action="/logout">
//      <button type="submit">Log Out</button>
//    </form>
//  `);
//});
//--- Explicación: crea la ruta hacia el perfil de usuario

// -------------------------------------------------------------------------------------

//Usado?:YES(app.js)
//app.use(bodyParser.urlencoded({ extended: true }));

//--- Explicación:  Hace el elemento legible. 

// -------------------------------------------------------------------------------------

//Usado?: yes
/*app.use(session({
  secret: process.env.PALABRA_SECRETA || 'secretoSuperSecreto',
  resave: false,
  saveUninitialized: true,
}));

//--- Explicación: 

// -------------------------------------------------------------------------------------

//Usado?: YES, (app.js)
/*app.listen(PORT, () => {
  console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});
//--- Explicación: Se utiliza para que el servidor escuche el puerto en el que se va a ejecutar

// -------------------------------------------------------------------------------------*/

//Usado?: yes (middleware.js)
//const verificarSesionMiddleware = (req, res, next) => {
//  if (req.session.palabraSecreta) {
//    next();
//  } else {
//    res.redirect('/?error=2');
//  }
//};
//--- Explicación: comprueba la palabra secreta y si no es correcta te redirige a otra pagina

// -------------------------------------------------------------------------------------


//Usado?: yes (route.js)
//app.get('/profile', middlewares.verificarSesionMiddleware, (req, res) => {
//  res.send(`
//    <h1>Ruta del Perfil (Sesión activa)</h1>
//    <form method="post" action="/logout">
//      <button type="submit">Log Out</button>
//    </form>
//  `);
//});
//--- Explicación: lleva a la direccion /profile mientras verifica la sesion y si se ha introducio la palabra secreta

// -------------------------------------------------------------------------------------


//Usado?: yes (routes.js)
//app.post('/logout', (req, res) => {
//  req.session.destroy((err) => {
//    if (err) {
//      console.error('Error al cerrar sesión:', err);
//    }
//    res.redirect('/');
//  });
//});
//--- Explicación:  da error al cerrar sesion o redirige al inicio

// -------------------------------------------------------------------------------------

//Usado?: yes (routes.js)
/* module.exports = {
  setup,
}; */
//--- Explicación:exporta los elementos declarados

 
// -------------------------------------------------------------------------------------

//Usado?: yes(middleware.js)
//module.exports = {
  //validarPalabraMiddleware,
  //verificarSesionMiddleware,
  //setupAPP,
//};
//--- Explicación: exporta los elementos declarados

// -------------------------------------------------------------------------------------

