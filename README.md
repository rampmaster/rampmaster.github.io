# Rampmaster.dev

## 📋 Descripción del Proyecto
Este repositorio contiene el código fuente para el sitio web personal/profesional **rampmaster.dev**. Incluye el CV en español e inglés, exportable a PDF desde el botón de impresión.

## 🚀 Stack Tecnológico
El proyecto utiliza tecnologías modernas de desarrollo web para asegurar rendimiento, escalabilidad y mantenibilidad:

*   **Framework:** [Next.js 15](https://nextjs.org/) (App Router, exportación estática)
*   **Lenguaje:** [TypeScript](https://www.typescriptlang.org/)
*   **Estilos:** [Tailwind CSS 4](https://tailwindcss.com/)
*   **Gestión de Paquetes:** npm
*   **CI/CD:** GitHub Actions
*   **Hosting:** GitHub Pages (Exportación Estática)

## 🛠️ Guía de Inicio Rápido

### Prerrequisitos
Asegúrate de tener instalado lo siguiente en tu entorno local:
*   **Node.js**: v20 o superior (Recomendado LTS)
*   **npm**: Incluido con Node.js

### Instalación
Clona el repositorio e instala las dependencias:

```bash
git clone https://github.com/rampmaster/rampmaster.github.io.git
cd rampmaster.github.io
npm install
```

### Desarrollo Local
Para iniciar el servidor de desarrollo con recarga en caliente (Hot Reload):

```bash
npm run dev
```
El sitio estará disponible en `http://localhost:3000`.

### Construcción y Despliegue
Para generar la versión de producción (exportación estática):

```bash
npm run build
```
Los archivos generados se ubicarán en la carpeta `out/` (configuración por defecto para exportación estática en Next.js).

## 📂 Estructura del Proyecto

```
rampmaster.github.io/
├── .github/                 # Workflows de GitHub Actions (deploy a GitHub Pages)
├── public/                  # Archivos estáticos (logo, favicon, imagen OG)
├── src/
│   ├── app/
│   │   ├── (en)/            # Raíz en inglés: "/"  (html lang="en")
│   │   ├── (es)/es/         # Raíz en español: "/es" (html lang="es")
│   │   └── globals.css      # Estilos globales y de impresión (CV en PDF)
│   ├── components/          # Secciones (CV, proyectos, contacto) y UI
│   ├── context/             # Contexto de idioma (definido por la ruta)
│   ├── data/                # Contenido del CV y proyectos en ES/EN
│   └── lib/seo.ts           # Metadatos, canonical y hreflang por idioma
├── next.config.js           # Exportación estática
└── package.json             # Dependencias y scripts
```

### Editar el CV
Todo el contenido está en `src/data/resume.ts`, con un objeto por idioma (`resumeDataEs` y `resumeDataEn`). **Cualquier cambio debe hacerse en ambos.** Cada experiencia acepta `highlights`, una lista de logros que se muestran como viñetas.

### Variables de entorno
- `NEXT_PUBLIC_GOOGLE_ANALYTICS_ID` (secreto del repositorio): si no está definido, no se carga Google Analytics.

## 🤝 Contribución
1.  Haz un Fork del proyecto.
2.  Crea una rama para tu funcionalidad (`git checkout -b feature/nueva-funcionalidad`).
3.  Haz Commit de tus cambios (`git commit -m 'Agrega nueva funcionalidad'`).
4.  Haz Push a la rama (`git push origin feature/nueva-funcionalidad`).
5.  Abre un Pull Request.

## 📄 Licencia
Este proyecto está bajo la licencia [MIT](LICENSE).
