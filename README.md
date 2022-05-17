# z1-frontend-developer

Flujo de la aplicación:

- Pulsando "take picture" se abre la cámara.
- La cámara hará fotos automáticamente en segundo plano y las enviará al backend.
- En la interfaz mostraremos en rojo si el backend devuelve que no es válida.
- En la interfaz mostraremos en verde si el backend devuelve que es válida y automáticamente pasaremos al usuario a la pantalla principal.
- En cualquier momento que el usuario vaya a la pantalla principal, ya sea porque pulse cancelar o porque se toma la foto correctamente, debemos mostrar la última foto que se haya tomado y el estado que haya devuelto el backend sobre ella.

Este repositorio es un bootstrap de [Create React App](https://github.com/facebook/create-react-app).

## Instalar e iniciar

Para instalar e iniciar el repositorio basta con ejecutar los siguientes comandos dentro del directorio:

```
npm install
npm start
```

La app se arranca en modo desarrollo, se puede acceder a través del navegador ([http://localhost:3000](http://localhost:3000/)).

## App

### Organización

La organización es bastante fiel a la estructura del bootstrap de `create-react-app` con una carpeta `src` donde se encuentran `components` , `images` y `pages` donde se encuentran las dos vistas principales de la App: `Main` y `TakePhoto` . Adicionalmente se ha añadido un archivo de definición `types.d.ts` para definir interfaces.

### States

Sólo se han utilizado dos estados para la aplicación: `picture` donde se guarda la url de la photo que se toma, y `isApproved` que en principio debería ser un `booleano` con dos estados, _approved_ y _rejected_, pero que finalmente tuve que convertir en `number` para que pudiera devolver un tercer antes de ser verificado.

### Props

Para pasar los estados de un componente a otro se han utilizado `Props`. Para ello se ha creado un archivo de definición `types.d.ts` donde se define la interface `Props` para poder reutilizarse en toda la app.

### Fetch

La llamada a la API se realiza dentro de la función `checkImage()` que realiza un fetch y recibe una de estas dos respuestas: `“Approved”` o `“Too Much Glare”.` Una vez obtenida la respuesta, esta actualiza los dos estados `setIsApproved` y `setPicture.`

### Tests

Lamentablemente no he podido realizar ningún test principalmente por dos razones. La primera de ellas es que hasta este momento apenas he tocado librerias de testing. La segunda es que, no tenía demasiado tiempo para aprender y hacer la prueba técnica satisfactoriamente.

## Retos

### Typescript

Uno de los mayores stoppers a la hora de afrontar la prueba ha sido la poca experiencia con Typescript. Hace relativamente poco tiempo que conozco el lenguaje y sólo había trasteado con él a través del playground del sitio oficial de Typescript, con lo que se puede decir que esta prueba sería el primer proyecto en el que aplico Typescript.

### React y styles

Aunque llevo ya algún tiempo trabajando con React, es cierto que últimamente me he enfocado bastante en los estilos. Empezar un proyecto de React y desenvolverme con cierta fluidez me ha costado algo más de lo que esperaba.

### La cámara

El gran reto a la hora de afrontar la prueba venía de la cámara de fotos. Como no era necesario habilitarla, he optado por falsearla, de manera que cuando se accede a ella, se muestra una interfaz con la foto que se enviará.

### El tiempo

Otro reto importante es el tiempo. Aunque estoy acostumbrado a lidiar con tiempos bastante muy ajustados, el hecho de que no conociera mucho el lenguaje ha hecho que tuviera que ponerme mucho más las pilas para sacar la prueba adelante. Por otra parte, para mí es un factor determinante porque al no tener deadline, puedo pasarme días y días puliendo el proyecto.
