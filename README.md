# Amistoso Institucional 2026

Sitio web informativo para un encuentro amistoso por aniversario institucional, organizado por UDE Arequipa.

## Ejecutar localmente

No requiere instalación. Abre `index.html` directamente o inicia cualquier servidor estático:

```bash
npx serve .
```

## Publicar en GitHub Pages

1. Sube el contenido de esta carpeta a un repositorio de GitHub.
2. En **Settings > Pages**, elige **Deploy from a branch**.
3. Selecciona la rama `main` y la carpeta raíz.

## Recepción de inscripciones

La aplicación funciona inmediatamente y conserva las inscripciones en el navegador. Para centralizarlas, edita `assets/js/config.js` y coloca en `REGISTRATION_ENDPOINT` la URL de un webhook o Google Apps Script que acepte solicitudes `POST` con JSON.

## Archivos principales

- `index.html`: aplicación.
- `assets/css/styles.css`: sistema visual responsive.
- `assets/js/app.js`: validación, inscripción y experiencia interactiva.
- `assets/js/config.js`: configuración del endpoint.
- `assets/docs/`: documentos históricos no enlazados desde la versión amistosa.
