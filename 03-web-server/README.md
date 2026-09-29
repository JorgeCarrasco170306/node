# Crear una app de Node.js con TypeScript

Tutorial paso a paso para crear un servidor HTTP basico usando Node.js y TypeScript.

## 1. Requisitos

Instala Node.js desde <https://nodejs.org>. Comprueba la instalacion:

```bash
node --version
npm --version
```

## 2. Crear el proyecto

Abre una terminal y ejecuta:

```bash
mkdir mi-app-ts
cd mi-app-ts
npm init -y
npm install --save-dev typescript tsx @types/node
npx tsc --init
mkdir src
```

## 3. Configurar `package.json`

Reemplaza el contenido de `package.json` por:

```json
{
  "name": "mi-app-ts",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "tsx watch src/app.ts",
    "build": "tsc",
    "start": "node dist/app.js"
  },
  "devDependencies": {
    "@types/node": "^22.0.0",
    "tsx": "^4.19.0",
    "typescript": "^5.7.0"
  }
}
```

## 4. Configurar TypeScript

Reemplaza el contenido de `tsconfig.json` por:

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "types": ["node"],
    "rootDir": "src",
    "outDir": "dist"
  },
  "include": ["src"]
}
```

## 5. Crear la aplicacion

Crea `src/app.ts` con este contenido:

```ts
import { createServer } from 'node:http';

const port = Number(process.env.PORT) || 3000;

const server = createServer((request, response) => {
  response.setHeader('Content-Type', 'application/json; charset=utf-8');

  if (request.url === '/' && request.method === 'GET') {
    response.statusCode = 200;
    response.end(JSON.stringify({ message: 'Hola desde Node.js y TypeScript' }));
    return;
  }

  response.statusCode = 404;
  response.end(JSON.stringify({ error: 'Ruta no encontrada' }));
});

server.listen(port, () => {
  console.log(`Servidor ejecutandose en http://localhost:${port}`);
});
```

## 6. Ejecutar en desarrollo

`tsx` ejecuta TypeScript directamente y reinicia el servidor cuando detecta cambios:

```bash
npm run dev
```

Abre <http://localhost:3000> en el navegador. Para detenerlo, pulsa `Ctrl+C`.

## 7. Compilar y ejecutar como JavaScript

Para generar JavaScript en `dist/`:

```bash
npm run build
npm start
```

## 8. Probar otra ruta

Abre <http://localhost:3000/otra-ruta>. La aplicacion respondera con estado HTTP `404`.

## Estructura final

```text
mi-app-ts/
├── src/
│   └── app.ts
├── .gitignore
├── package.json
├── package-lock.json
└── tsconfig.json
```

## Comandos principales

```bash
npm run dev    # desarrollo con recarga automatica
npm run build  # compilar TypeScript
npm start      # ejecutar la carpeta dist
```
