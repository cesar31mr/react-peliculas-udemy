# Curso Udemy React

## Instalación

Como primer paso se debe ejecutar el comando
### `$ npm install -f`

Si hay algun error al ejecutar el comando `npm start` se debe editar el comando en el package.json de la siguiente manera:
Este comando:
### `"start": "react-scripts start",`
Por este otro:
### `"start": "react-scripts --openssl-legacy-provider start",`

## Módulo 1. Configurando el `tsconfig.json`
Agregar la siguiente línea después de "forceConsistentCasingInFileNames"
### `"useUnknownInCatchVariables": false,`

## Módulo 5. Configurando React-Router
Se deben hacer las siguientes instalaciones
### `$ npm i react-router-dom@5.2`
### `$ npm i --save-dev @types/react-router-dom`

## Modulo 6. Formulario de Generos
Para continuar debemos instalar la libreria `formik` para un mejor manejo de formularios, ejecutar el siguiente comando:
### `$ npm install formik@2.2.6`

## Modulo 6. Primera regla de validacion
Para continuar debemos instalar la libreria `yup` para manejo de validacion, ejecutar el siguiente comando:
### `$ npm i yup@0.32.9`

## Modulo 6. Texto con Estilo con Markdown
Para poder utilizar texto con formato, negritas, estilo, etc se utilizará la librería `Markdown`. Para eso se instalarán las siguientes dos librerías con este comando:
### `$ npm i react-markdown typed-react-markdown`

## Modulo 6. Creando el Typeahead
Se debe instalar la librería con el siguiente comando:
### `npm i react-bootstrap-typeahead@5.1.4`
Y como se está usando `typescript` se debe instalar también:
### `npm i -D @types/react-bootstrap-typeahead@5.1.4`

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
