# React + Vite + Vitest: CI/CD Pipeline y Pruebas Unitarias

Este proyecto es un ejemplo práctico que utiliza **React** con **Vite** como herramienta de construcción, **Vitest** para pruebas unitarias y un pipeline de CI/CD para garantizar calidad y automatización en el desarrollo.

---

## **Descripción del Proyecto**

Este repositorio contiene una aplicación simple de React que incluye:

- Un contador con botones para incrementar y decrementar.
- Pruebas unitarias implementadas con Vitest y Testing Library.
- Configuración de CI/CD mediante GitHub Actions.

---

## **Estructura del Proyecto**

```plaintext
react-vite-cicd/
├── src/
│   ├── App.jsx          # Componente principal de la aplicación
│   ├── App.css          # Estilos del componente App
│   ├── App.test.jsx     # Pruebas unitarias para App.jsx
│   ├── index.css        # Estilos globales
│   ├── main.jsx         # Punto de entrada principal
├── public/              # Archivos públicos
├── .github/workflows/   # Configuración de GitHub Actions para CI/CD
├── package.json         # Configuración del proyecto y dependencias
├── vite.config.js       # Configuración de Vite y Vitest
└── README.md            # Documentación del proyecto
```

---

## **Pasos de Configuración**

### **1. Crear el Proyecto**

1. Inicializa un proyecto con Vite:
   ```bash
   npm create vite@latest react-vite-cicd --template react
   cd react-vite-cicd
   npm install
   ```
2. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

### **2. Añadir Pruebas con Vitest**

1. Instala Vitest:
   ```bash
   npm install --save-dev vitest
   ```
2. Instala las librerías necesarias para pruebas:
   ```bash
   npm install --save-dev @testing-library/react @testing-library/jest-dom jsdom
   ```
3. Configura Vitest en `vite.config.js`:
   ```javascript
   /// <reference types="vitest" />
   import { defineConfig } from "vite";
   import react from "@vitejs/plugin-react";

   export default defineConfig({
     plugins: [react()],
     test: {
       globals: true, // Habilita funciones globales como `test`
       environment: "jsdom", // Simula un navegador para pruebas de React
       setupFiles: './src/tests/setupTests.js', // Configuración global de pruebas
     },
   });
   ```
4. Crea el archivo `src/tests/setupTests.js`:
   ```javascript
   import '@testing-library/jest-dom';
   ```
5. Añade un script en `package.json`:
   ```json
   "scripts": {
     "test": "vitest"
   }
   ```

### **3. Escribir Pruebas Unitarias**

Crea el archivo `src/App.test.jsx` con el siguiente contenido:

```javascript
import { test, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("increment and decrement buttons work", () => {
  render(<App />);

  const incrementButton = screen.getByText("+");
  const decrementButton = screen.getByText("-");
  const counterText = screen.getByText(/El valor actual es:/);

  fireEvent.click(incrementButton);
  expect(counterText).toHaveTextContent("1");

  fireEvent.click(decrementButton);
  expect(counterText).toHaveTextContent("0");
});
```

---

## **CI/CD con GitHub Actions**

1. Crea la carpeta `.github/workflows` en la raíz del proyecto.
2. Crea el archivo `ci.yml` con esta configuración:

```yaml
name: CI/CD Pipeline

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      - name: Set up Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 18

      - name: Install dependencies
        run: npm install

      - name: Run tests
        run: npm test

      - name: Build project
        run: npm run build
```

---

## **Explicación del Archivo de Pruebas**

### Código y explicación:

```javascript
import { test, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
```
- Importamos las herramientas necesarias:
  - `test` y `expect` para definir las pruebas y las aserciones.
  - `render`, `screen`, `fireEvent` para interactuar con el componente.

```javascript
test("increment and decrement buttons work", () => {
  render(<App />);
```
- Definimos un caso de prueba donde renderizamos el componente `App`.

```javascript
  const incrementButton = screen.getByText("+");
  const decrementButton = screen.getByText("-");
  const counterText = screen.getByText(/El valor actual es:/);
```
- Localizamos los elementos del DOM usando `screen.getByText`.

```javascript
  fireEvent.click(incrementButton);
  expect(counterText).toHaveTextContent("1");
```
- Simulamos un clic en el botón de incremento y verificamos que el texto del contador cambie a "1".

```javascript
  fireEvent.click(decrementButton);
  expect(counterText).toHaveTextContent("0");
});
```
- Simulamos un clic en el botón de decremento y verificamos que el texto del contador vuelva a "0".

---

## **Cómo Ejecutar el Proyecto**

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/react-vite-cicd.git
   cd react-vite-cicd
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Ejecuta el servidor de desarrollo:
   ```bash
   npm run dev
   ```
4. Ejecuta las pruebas:
   ```bash
   npm test
   ```

---

## **Contribuir**

Si deseas contribuir a este proyecto, puedes abrir un pull request o reportar problemas en la sección de Issues del repositorio.

---

## **Licencia**

Este proyecto está bajo la licencia MIT. Puedes usarlo y modificarlo libremente.


