# Rampmaster.dev

## 📋 Descripción del Proyecto
Este repositorio contiene el código fuente para el sitio web personal/profesional **rampmaster.dev**. El proyecto está actualmente en proceso de renovación visual y técnica.

## 🚀 Stack Tecnológico
El proyecto utiliza tecnologías modernas de desarrollo web para asegurar rendimiento, escalabilidad y mantenibilidad:

*   **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
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
├── .github/            # Workflows de GitHub Actions
├── public/             # Archivos estáticos (imágenes, fuentes, etc.)
├── src/
│   └── app/            # Código fuente de la aplicación (Next.js App Router)
├── next.config.js      # Configuración de Next.js
├── tailwind.config.js  # Configuración de Tailwind CSS
└── package.json        # Dependencias y scripts
```

## 🤝 Contribución
1.  Haz un Fork del proyecto.
2.  Crea una rama para tu funcionalidad (`git checkout -b feature/nueva-funcionalidad`).
3.  Haz Commit de tus cambios (`git commit -m 'Agrega nueva funcionalidad'`).
4.  Haz Push a la rama (`git push origin feature/nueva-funcionalidad`).
5.  Abre un Pull Request.

## 📄 Licencia
Este proyecto está bajo la licencia [MIT](LICENSE) (o especificar si es otra).
