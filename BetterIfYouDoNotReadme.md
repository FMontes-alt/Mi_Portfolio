# BetterIfYouDoNotReadme.md

## 📐 Guía de Estilo — Portafolio de Francisco José Montes Belloso

---

### ✨ Estética General: *Acero & Cristal*

Inspirado en superficies limpias, estructuras metálicas y vidrios traslúcidos. Todo el diseño transmite **profesionalidad**, **claridad visual** y un enfoque **moderno tecnológico**. La estructura sigue una jerarquía clara, diseño modular, uso de sombras suaves y bordes redondeados.

---

### 🎨 Paleta de Colores

| Nombre               | HEX        | Uso principal                            |
|----------------------|------------|------------------------------------------|
| **Gris Acero Oscuro**| `#1f2937`  | Fondo base (body, header, footer)        |
| **Gris Perla**       | `#e5e7eb`  | Texto secundario / detalles              |
| **Blanco Niebla**    | `#f9fafb`  | Fondo de secciones / contenido destacado |
| **Azul Cristal**     | `#60a5fa`  | Botones, links y acentos visuales        |
| **Azul Nocturno**    | `#1e3a8a`  | Títulos y sombreado de bloques           |
| **Sombra Vidrio**    | `rgba(255,255,255,0.06)` | Transparencias / Glassmorphism |

---

### 🔡 Tipografías

- **Primaria**: `'Poppins', sans-serif`
- **Secundaria** (fallback): `Arial`, `Helvetica`, `sans-serif`

> ✔️ Clara, legible en móvil, moderna y elegante.

---

### 🧾 Estructura de Archivos

```
mi-porfolio/
│
├── index.html
├── about.html
├── projects.html
├── contact.html
│
├── assets/
│   ├── images/         # Fotografías personales y proyectos
│   ├── icons/          # Íconos en SVG para habilidades y redes
│
├── styles/
│   ├── style.css       # Estilos generales
│   ├── header.css      # Header responsive
│   ├── body.css        # Hero, skills, educación, etc.
│   ├── footer.css      # Footer fijo y redes sociales
│
├── scripts/
│   ├── claro-oscuro.js # Modo oscuro / claro
│
└── README.md           # Documentación del proyecto
```

---

### 📸 Logo Personal

- 🧠 Actualmente tipográfico: `"Mi Portfolio"` dentro de un `<div class="logo">`.
- 💡 Propuesta futura: SVG minimalista inspirado en cristal y acero.

---

### 📚 Librerías Utilizadas

- **Fuentes Google Fonts**:  
  [`Poppins`](https://fonts.google.com/specimen/Poppins)
  
- **Iconos SVG personalizados**:
  - [Devicon](https://devicon.dev/)
  - [FontAwesome](https://fontawesome.com/)
  
- **Inspiraciones en diseño y código**:
  - [Glassmorphism CSS Generator](https://hype4.academy/tools/glassmorphism-generator)
  - [Heroicons](https://heroicons.com/)

---

### ⚙️ Problemas Técnicos Encontrados

#### 1. 💥 Incompatibilidad de visualización en móviles
- **Problema**: Algunos elementos no se adaptaban bien a pantallas pequeñas (iPhone SE).
- **Solución**: Rediseño total **mobile-first**, uso de `flex`, `grid`, `media queries`, y tamaños relativos (`em`, `%`, `vh`, `vw`).

#### 2. 🎭 Alternancia de temas oscuro/claro no funcionaba correctamente
- **Problema**: El script `claro-oscuro.js` no guardaba el estado del tema.
- **Solución**: Implementación de `localStorage` para mantener la preferencia del usuario entre sesiones.

#### 3. 🔍 Accesibilidad en navegación con teclado
- **Problema**: Algunos botones e imágenes no eran accesibles.
- **Solución**: Se añadieron atributos `alt`, `aria-label` y `tabindex` correctamente.

#### 4. 🖼️ Carga de imágenes muy lenta
- **Problema**: Imágenes de proyectos sin comprimir.
- **Solución**: Reducción de tamaño, compresión y uso de `loading="lazy"` en `<img>`.

---

### 📈 Mejora Continua

- ✅ Optimizado para móviles primero.
- ✅ Compatible con lectores de pantalla.
- ✅ Diseño modular escalable.
- ✅ Listo para desplegar en GitHub Pages.

---

### 🧠 Lecciones Aprendidas

> - La importancia de trabajar primero el diseño móvil.
> - Que menos es más: jerarquía visual clara mejora la experiencia.
> - Lo visual impacta, pero lo funcional convence.

---

### 🧑‍💻 Autor

**Francisco José Montes Belloso**  
[GitHub](https://github.com/FMontes-alt) | [LinkedIn](https://www.linkedin.com/in/francisco-jos%C3%A9-montes-belloso-82a246350/)

---

> “La estética nace del orden. Y el orden, del código limpio.”
