# Copa ANIN 2026 — Memoria fotográfica

Aplicación web conmemorativa de la jornada deportiva realizada en la cancha Balón Fuego, con fotografías reales, agradecimiento a los cuatro equipos, planteles y muro de recuerdos.

## Identidad visual

Esta versión no utiliza el logotipo ni archivos de identidad gráfica oficial de ANIN. La cabecera emplea únicamente un distintivo tipográfico neutral «CA 26». Las fotografías documentales se conservan sin retoques.

## Ejecutar localmente

Abre `index.html` directamente o inicia un servidor estático:

```bash
npx serve .
```

## Publicar en GitHub Pages

1. Reemplaza el contenido del repositorio por los archivos de esta carpeta.
2. En **Settings > Pages**, selecciona **Deploy from a branch**.
3. Publica la rama `main` desde la carpeta raíz.

## Archivos principales

- `index.html`: memoria fotográfica y agradecimiento.
- `assets/css/styles.css`: diseño adaptable.
- `assets/js/app.js`: equipos, galería, visor y comentarios locales.
- `assets/images/campeonato-real/`: fotografías reales optimizadas.

## Comentarios

Los comentarios se almacenan localmente en el navegador del visitante. Para compartirlos entre todos los usuarios se requiere una base de datos central.
